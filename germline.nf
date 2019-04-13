#!/usr/bin/env nextflow

/*
================================================================================
--------------------------------------------------------------------------------
 Processes overview
 - DellyCall
 - DellyFilter
 - CreateIntervalBeds
 - RunHaplotypecaller
 - RunManta
 - RunStrelka
 - RunBcfToolsFilterNorm
 - RunBcfToolsMerge
 - RunVcf2Maf
*/


/*
================================================================================
=                           C O N F I G U R A T I O N                          =
================================================================================
*/

tsvPath = ''
if (params.sample) tsvPath = params.sample

referenceMap = defineReferenceMap()

bamFiles = Channel.empty()

tsvFile = file(tsvPath)

bamFiles = extractBamFiles(tsvFile)

/*
================================================================================
=                               P R O C E S S E S                              =
================================================================================
*/

tools = params.tools ? params.tools.split(',').collect{it.trim().toLowerCase()} : []

// --- Run Delly
svTypes = Channel.from("DUP", "BND", "DEL", "INS", "INV")
(bamsForDelly, bamFiles) = bamFiles.into(2)

process DellyCall {
  tag {idNormal + '_' + svType}

  publishDir "${params.outDir}/${idTumor}_vs_${idNormal}/germline_variants/delly"

  input:
    each svType from svTypes
    set sequenceType, idTumor, idNormal, file(bamTumor), file(bamNormal), file(baiTumor), file(baiNormal) from bamsForDelly
    set file(genomeFile), file(genomeIndex) from Channel.value([
      referenceMap.genomeFile,
      referenceMap.genomeIndex
    ])

  output:
    set idTumor, idNormal, svType, file("${idNormal}_${svType}.bcf"), file("${idNormal}_${svType}.bcf.csi") into dellyCallOutput

  when: 'delly' in tools

  script:
  """
  delly call \
    --svtype ${svType} \
    --genome ${genomeFile} \
    --outfile ${idNormal}_${svType}.bcf \
    ${bamNormal}
  """
}

process DellyFilter {
  tag {idNormal + '_' + svType}

  publishDir "${params.outDir}/${idTumor}_vs_${idNormal}/germline_variants/delly"

  input:
    set idTumor, idNormal, svType, file(dellyBcf), file(dellyBcfIndex) from dellyCallOutput


  output:
    file("*.filter.bcf") into dellyFilterOutput
    file("*.filter.bcf.csi") into dellyFilterIndexedOutput

  when: 'delly' in tools

  outfile="${dellyBcf}".replaceFirst(".bcf",".filter.bcf")

  script:
  """
  delly filter \
    --filter germline \
    --outfile ${outfile} \
    ${dellyBcf}
  """
}

// --- Run Haplotypecaller
(sampleIdsForIntervalBeds, bamFiles) = bamFiles.into(2)

process CreateScatteredIntervals {
  tag {intervals.fileName}

  // publishDir "${params.outDir}/${idTumor}_vs_${idNormal}/germline_variants/intervals"

  input:
    set file(genomeFile), file(genomeIndex), file(genomeDict), file(intervals) from Channel.value([
      referenceMap.genomeFile, 
      referenceMap.genomeIndex,
      referenceMap.genomeDict,
      referenceMap.intervals
      ])
    set sequenceType, idTumor, idNormal, file(bamTumor), file(bamNormal), file(baiTumor), file(baiNormal) from sampleIdsForIntervalBeds

  output:
    file('intervals/*.interval_list') into bedIntervals mode flatten

  when: "haplotypecaller" in tools

  script:
  """
  gatk SplitIntervals \
    --reference ${genomeFile} \
    --intervals ${intervals} \
    --scatter-count 30 \
    --subdivision-mode BALANCING_WITHOUT_INTERVAL_SUBDIVISION_WITH_OVERFLOW \
    --output intervals
  """
}

(bamsForHaplotypecaller, bamFiles) = bamFiles.into(2)
bamsForHaplotypecallerIntervals = bamsForHaplotypecaller.spread(bedIntervals)

if (params.verbose) bamsForHaplotypecallerIntervals = bamsForHaplotypecallerIntervals.view {
  "BAMs for Haplotypecaller with Intervals:\n\
  ID    : ${it[0]}\tStatus: ${it[1]}\tSample: ${it[2]}\n\
  File  : [${it[4].fileName}]"
}

// --- Run Manta
(bamsForManta, bamsForStrelka, bamFiles) = bamFiles.into(3)

process RunManta {
  tag {idTumor + "_vs_" + idNormal}

  publishDir "${params.outDir}/${idTumor}_vs_${idNormal}/germline_variants/manta"

  input:
    set sequenceType, idTumor, idNormal, file(bamTumor), file(bamNormal), file(baiTumor), file(baiNormal) from bamsForManta
    set file(genomeFile), file(genomeIndex) from Channel.value([
      referenceMap.genomeFile,
      referenceMap.genomeIndex
    ])

  output:
    file("*.vcf.gz") into mantaOutput
    file("*.vcf.gz.tbi") into mantaIndexedOutput

  when: 'manta' in tools

  // flag with --exome if exome
  script:
  """
  configManta.py \
    --reference ${genomeFile} \
    --bam ${bamNormal} \
    --runDir Manta

  python Manta/runWorkflow.py \
    --mode local \
    --jobs ${task.cpus}

  mv Manta/results/variants/candidateSmallIndels.vcf.gz \
    Manta_${idNormal}.candidateSmallIndels.vcf.gz
  mv Manta/results/variants/candidateSmallIndels.vcf.gz.tbi \
    Manta_${idNormal}.candidateSmallIndels.vcf.gz.tbi
  mv Manta/results/variants/candidateSV.vcf.gz \
    Manta_${idNormal}.candidateSV.vcf.gz
  mv Manta/results/variants/candidateSV.vcf.gz.tbi \
    Manta_${idNormal}.candidateSV.vcf.gz.tbi
  mv Manta/results/variants/diploidSV.vcf.gz \
    Manta_${idNormal}.diploidSV.vcf.gz
  mv Manta/results/variants/diploidSV.vcf.gz.tbi \
    Manta_${idNormal}.diploidSV.vcf.gz.tbi
  """
}

// --- Run Strelka2
process RunStrelka2 {
  tag {idTumor + "_vs_" + idNormal}

  publishDir "${params.outDir}/${idTumor}_vs_${idNormal}/germline_variants/strelka2"

  input:
    set sequenceType, idTumor, idNormal, file(bamTumor), file(bamNormal), file(baiTumor), file(baiNormal) from bamsForStrelka
    set file(genomeFile), file(genomeIndex), file(genomeDict) from Channel.value([
      referenceMap.genomeFile,
      referenceMap.genomeIndex,
      referenceMap.genomeDict
    ])

  output:
    file("*.vcf.gz") into strelkaOutput
    file("*.vcf.gz.tbi") into strelkaIndexedOutput

  when: 'strelka2' in tools
  
  script:
  """
  configureStrelkaGermlineWorkflow.py \
    --referenceFasta ${genomeFile} \
    --bam ${bamNormal} \
    --runDir Strelka

  python Strelka/runWorkflow.py \
    --mode local \
    --jobs ${task.cpus}

  mv Strelka/results/variants/genome.*.vcf.gz Strelka_${idNormal}_genome.vcf.gz
  mv Strelka/results/variants/genome.*.vcf.gz.tbi Strelka_${idNormal}_genome.vcf.gz.tbi
  mv Strelka/results/variants/variants.vcf.gz Strelka_${idNormal}_variants.vcf.gz
  mv Strelka/results/variants/variants.vcf.gz.tbi Strelka_${idNormal}_variants.vcf.gz.tbi
  """
}

// --- Process Delly and Manta VCFs 

( sampleIdsForDellyMantaMerge, bamFiles ) = bamFiles.into(2)

process MergeDellyAndManta {
  tag { idNormal }

  publishDir "${params.outDir}/${idTumor}_vs_${idNormal}/germline_variants/vcf_merged_output"

  input:
    file(dellyFilterData) from dellyFilterOutput.collect()
    file(mantaData) from mantaOutput.collect()
    set sequenceType, idTumor, idNormal, file(bamTumor), file(bamNormal), file(baiTumor), file(baiNormal) from sampleIdsForDellyMantaMerge

  output:
    file("*.merge.vcf.gz") into vcfDellyMantaMergedOutput

  when: 'manta' in tools && 'delly' in tools

  script:
  """ 
  for f in *.bcf
  do 
    bcftools view --output-type z \$f > \${f%.bcf}.vcf.gz
  done

  for f in *.vcf.gz
  do
    tabix --preset vcf \$f
  done

  bcftools merge \
    --force-samples \
    --merge none \
    --output-type z \
    --output ${idNormal}.delly.manta.merge.vcf.gz \
    *.vcf.gz
  """
}

( sampleIdsForBcfToolsFilter, bamFiles ) = bamFiles.into(2)

process RunBcfToolsFilterOnDellyManta {
  tag {idTumor + "_vs_" + idNormal}

  publishDir "${params.outDir}/${idTumor}_vs_${idNormal}/germline_variants/vcf_output"

  input:
    set sequenceType, idTumor, idNormal, file(bamTumor), file(bamNormal), file(baiTumor), file(baiNormal) from sampleIdsForBcfToolsFilter
    file(vcf) from vcfDellyMantaMergedOutput
    set file(genomeFile), file(genomeIndex), file(genomeDict) from Channel.value([
      referenceMap.genomeFile,
      referenceMap.genomeIndex,
      referenceMap.genomeDict
    ])

  output:
    file("*filtered.vcf.gz") into vcfFilterNormOutput

  when: "manta" in tools && "delly" in tools

  outfile = "${vcf}".replaceFirst('vcf.gz', 'filtered.vcf.gz')

  script:
  """
  tabix --preset vcf ${vcf}

  bcftools filter \
    -r 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,MT,X,Y \
    --output-type z \
    --output ${outfile} \
    ${vcf} 
  """
}

/*
================================================================================
=                               AWESOME FUNCTIONS                             =
================================================================================
*/

def checkParamReturnFile(item) {
  params."${item}" = params.genomes[params.genome]."${item}"
  return file(params."${item}")
}

def defineReferenceMap() {
  if (!(params.genome in params.genomes)) exit 1, "Genome ${params.genome} not found in configuration"
  result_array = [
    'dbsnp'            : checkParamReturnFile("dbsnp"),
    'dbsnpIndex'       : checkParamReturnFile("dbsnpIndex"),
    // genome reference dictionary
    'genomeDict'       : checkParamReturnFile("genomeDict"),
    // FASTA genome reference
    'genomeFile'       : checkParamReturnFile("genomeFile"),
    // genome .fai file
    'genomeIndex'      : checkParamReturnFile("genomeIndex"),
    // BWA index files
    'bwaIndex'         : checkParamReturnFile("bwaIndex"),
    // VCFs with known indels (such as 1000 Genomes, Mill’s gold standard)
    'knownIndels'      : checkParamReturnFile("knownIndels"),
    'knownIndelsIndex' : checkParamReturnFile("knownIndelsIndex"),
  ]

  if (!params.test) {
    result_array << ['vcf2mafFilterVcf'         : checkParamReturnFile("vcf2mafFilterVcf")]
    result_array << ['vcf2mafFilterVcfIndex'    : checkParamReturnFile("vcf2mafFilterVcfIndex")]
    result_array << ['vepCache'                 : checkParamReturnFile("vepCache")]
    // for SNP Pileup
    result_array << ['facetsVcf'        : checkParamReturnFile("facetsVcf")]
    // MSI Sensor
    result_array << ['msiSensorList'    : checkParamReturnFile("msiSensorList")]
    // intervals file for spread-and-gather processes
    result_array << ['intervals'        : checkParamReturnFile("intervals")]
  }
  return result_array
}

def extractBamFiles(tsvFile) {
  // Channeling the TSV file containing FASTQ.
  // Format is: "idTumor idNormal bamTumor bamNormal baiTumor baiNormal"
  Channel.from(tsvFile)
  .splitCsv(sep: '\t')
  .map { row ->
    SarekUtils.checkNumberOfItem(row, 7)
    def sequenceType = row[0]
    def idTumor = row[1]
    def idNormal = row[2]
    def bamTumor = SarekUtils.returnFile(row[3])
    def bamNormal = SarekUtils.returnFile(row[4])
    def baiTumor = SarekUtils.returnFile(row[5])
    def baiNormal = SarekUtils.returnFile(row[6])

    SarekUtils.checkFileExtension(bamTumor,".bam")
    SarekUtils.checkFileExtension(bamNormal,".bam")
    SarekUtils.checkFileExtension(baiTumor,".bai")
    SarekUtils.checkFileExtension(baiNormal,".bai")

    [ sequenceType, idTumor, idNormal, bamTumor, bamNormal, baiTumor, baiNormal ]
  }
}