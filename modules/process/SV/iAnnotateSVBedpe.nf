process iAnnotateSVBedpe {
  tag {idTumor + "__" + idNormal}

  container = "cmopipeline/iannotatesv:0.0.2" 

  publishDir "${params.outDir}/somatic/${outputPrefix}/combined_svs", mode: params.publishDirMode, pattern: ".combined.filtered.bedpe"
  publishDir "${params.outDir}/somatic/${outputPrefix}/combined_svs", mode: params.publishDirMode, pattern: "*.annotsv.tsv"

  input:
    tuple val(idTumor), val(idNormal), val(target), path(bedpein) 
    path(repeatMasker)
    path(mapabilityBlacklist)
    path(spliceSites)
    path(custom_scripts) 
    val(genome)

  output:
    tuple val(idTumor), val(idNormal), val(target), path("${outputPrefix}.combined.annot.filtered.bedpe"), emit: SVAnnotBedpe
    tuple val(idTumor), val(idNormal), val(target), path("${outputPrefix}.combined.annot.filtered.pass.bedpe"), emit: SVAnnotBedpePass

  when: workflow.profile != "test" 

  script:
  outputPrefix = "${idTumor}__${idNormal}"
  genomeBuild = "GRCh37"
  genome_ = genome == "GRCh37" ? "hg19" : genome == "GRCh38" ? "hg38" : "hg18"
  """
  python ${custom_scripts}/pair_to_bed_annot.py \\
    --blacklist-regions ${mapabilityBlacklist} \\
    --bedpe ${bedpein} \\
    --tag mappability \\
    --output ${outputPrefix}.combined.dac.bedpe \\
    --match-type either 
  
  python ${custom_scripts}/pair_to_bed_annot.py \\
    --blacklist-regions ${repeatMasker} \\
    --bedpe ${outputPrefix}.combined.dac.bedpe \\
    --tag repeat_masker \\
    --output ${outputPrefix}.combined.dac.rm.bedpe \\
    --match-type either 
  
  python ${custom_scripts}/detect_cdna.py \\
    --intermediate \\
    --exon-junct ${spliceSites} \\
    --bedpe ${outputPrefix}.combined.dac.rm.bedpe \\
    --out-bedpe ${outputPrefix}.combined.dac.rm.cdna.bedpe \\
    --out ${outputPrefix}.contamination.tsv

  python ${custom_scripts}/run_iannotatesv.py \\
    --bedpe ${outputPrefix}.combined.dac.rm.cdna.bedpe \\
    --genome ${genome_}

  cp ${outputPrefix}.combined.dac.rm.cdna.iannotate.bedpe \\
    ${outputPrefix}.combined.annot.filtered.bedpe

  awk -F"\\t" '\$1 ~ /#/ || \$12 == "PASS"' \\
    ${outputPrefix}.combined.annot.filtered.bedpe > \\
    ${outputPrefix}.combined.annot.filtered.pass.bedpe
  
  """

}
