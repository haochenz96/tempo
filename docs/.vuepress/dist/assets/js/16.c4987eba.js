(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{199:function(t,e,a){"use strict";a.r(e);var n=a(0),i=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"running-the-vaporware-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-vaporware-pipeline","aria-hidden":"true"}},[t._v("#")]),t._v(" Running the Vaporware pipeline")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("This basic command shows how to run Vaporware, with an explanation of flags and input arguments:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nextflow run pipeline.nf \\\n    --somatic --germline --outDir <path to output subdirectory> \\ \n    -w <path to temporary work directory with cached results> \\\n    -profile juno \\\n    --mapping <input mapping tsv file>  \\\n    --pairing <input pairing tsv file>  \\\n    -with-report <name of html file> \\ \n    -with-trace <name of html file> \n\n")])])]),a("ul",[a("li",[t._v("The "),a("code",[t._v("--somatic")]),t._v(" and "),a("code",[t._v("--germline")]),t._v(" flags indicate to run the somatic and germline variant calling modules, respectively.")]),t._v(" "),a("li",[a("code",[t._v("--outDir")]),t._v(" is the directory where the output will end up. This directory does not need to exist. If not set, by default it will be set to run directory (i.e. the directory from which 'the command "),a("code",[t._v("nextflow run")]),t._v(" is executed.)")]),t._v(" "),a("li",[a("code",[t._v("-w")]),t._v(" is the directory where the temporary output will be cached. By default, this is set to the run directory. Please see")]),t._v(" "),a("li",[a("code",[t._v("-profile")]),t._v(" loads the preset configuration required to run the pipeline in the supported environment. Accepted values are "),a("code",[t._v("juno")]),t._v(" and "),a("code",[t._v("awsbatch")]),t._v(" for execution on the "),a("router-link",{attrs:{to:"/juno-setup.html"}},[t._v("Juno cluster")]),t._v(" or on "),a("router-link",{attrs:{to:"/aws-setup.html"}},[t._v("AWS Batch")]),t._v(".")],1),t._v(" "),a("li",[t._v("The files provided to the "),a("code",[t._v("--mapping")]),t._v(" and "),a("code",[t._v("--pairing")]),t._v(" arguments should contain the mapping of FASTQ files to sample names and of tumor-normal pairs. These are tab-separated files, see further description below and examples in the "),a("a",{attrs:{href:"test_inputs"}},[t._v("test_inputs")]),t._v(" directory.")])]),t._v(" "),a("p",[t._v("Using test input provided in the GitHub repository (in the "),a("code",[t._v("REPO")]),t._v(" directory), here is an example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nextflow run pipeline.nf --somatic --germline \\\n    --mapping test_inputs/local/full_test_mapping.tsv \\ \n    --pairing test_inputs/local/full_test_pairing.tsv \\\n     -profile juno --outDir Result \\\n     -with-report report.html\n     -with-timeline timeline.html\n")])])]),a("h2",{attrs:{id:"input-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-files","aria-hidden":"true"}},[t._v("#")]),t._v(" Input files")]),t._v(" "),a("h3",{attrs:{id:"the-mapping-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-mapping-file","aria-hidden":"true"}},[t._v("#")]),t._v(" The mapping file")]),t._v(" "),a("p",[t._v("This file is necessary to map the input FASTQ pairs from one or more sequencing lanes to sample names. Additionally, this file tells the pipeline whether the samples are exome or genome samples. In the case of the former, the capture kit used is also input.")]),t._v(" "),a("p",[a("em",[t._v("Note: The header line is mandatory but not the order of columns.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("SAMPLE")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("LANE")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("ASSAY")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("TARGET")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("FASTQ_PE1")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("FASTQ_PE2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("normal_sample_1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L001")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("wes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("agilent")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L001_R01.fastq.gz")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L001_R02.fastq.gz")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("normal_sample_1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L002")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("wes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("agilent")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L002_R01.fastq.gz")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L002_R02.fastq.gz")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("tumor_sample_1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L001")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("wes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("agilent")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L001_R01.fastq.gz")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L001_R02.fastq.gz")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("tumor_sample_1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("...")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("wes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("agilent")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("...")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("...")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("tumor_sample_1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L00N")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("wes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("agilent")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L00N_R01.fastq.gz")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("L00N_R02.fastq.gz")])])])]),t._v(" "),a("p",[t._v("Accepted values for the "),a("strong",[t._v("ASSAY")]),t._v(" column are "),a("code",[t._v("exome")]),t._v(" and "),a("code",[t._v("genome")]),t._v("."),a("br"),t._v("\nAccepted values for the "),a("strong",[t._v("TARGET")]),t._v(" column are "),a("code",[t._v("agilent")]),t._v(" and "),a("code",[t._v("idt")]),t._v("."),a("br"),t._v("\nRead further details on these parameters "),a("router-link",{attrs:{to:"/bioinformatics-components.html#genome-versus-exome"}},[t._v("here")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"the-pairing-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-pairing-file","aria-hidden":"true"}},[t._v("#")]),t._v(" The pairing file")]),t._v(" "),a("p",[t._v("The pipeline needs to know which tumor and normal samples are to be analyzed as matched pairs. This files provides that pairing by referring to the sample names as provided in the "),a("strong",[t._v("SAMPLE")]),t._v(" column in the mapping file.")]),t._v(" "),a("p",[a("em",[t._v("Note: The header line is mandatory but not the order of columns.")])]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("NORMAL_ID")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("TUMOR_ID")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("normal_sample_1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("tumor_sample_1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("normal_sample_2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("tumor_sample_2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("...")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("...")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("normal_sample_n")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("tumor_sample_n")])])])]),t._v(" "),a("h2",{attrs:{id:"running-with-input-bams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-with-input-bams","aria-hidden":"true"}},[t._v("#")]),t._v(" Running with input BAMs")]),t._v(" "),a("h2",{attrs:{id:"running-the-pipeline-on-juno"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-pipeline-on-juno","aria-hidden":"true"}},[t._v("#")]),t._v(" Running the pipeline on Juno")]),t._v(" "),a("h3",{attrs:{id:"lsf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lsf","aria-hidden":"true"}},[t._v("#")]),t._v(" LSF")]),t._v(" "),a("p",[t._v("We recommend submitting "),a("code",[t._v("nextflow run pipelin.nf")]),t._v(" via bsub:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('bsub -W <hh:mm> -n 1 -R "rusage[mem=<requested memory>]" \\\n    -o <LSF output file name>.out -e <LSF error file name>.err nextflow run pipeline.nf --somatic --germline \\\n    --mapping <input mapping tsv file> --pairing <input pairing tsv file> -profile juno \\\n    --outDir <path to output subdirectory> -w <path to temporary work directory with cached results> \\\n    -with-report <name of html report file> -with-trace <name of html trace file> \n')])])]),a("p",[t._v("It's "),a("strong",[t._v("important")]),t._v(" that users use the recent version of singularity.")]),t._v(" "),a("h3",{attrs:{id:"screen-or-tmux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#screen-or-tmux","aria-hidden":"true"}},[t._v("#")]),t._v(" screen or tmux")]),t._v(" "),a("p",[t._v("Another option is to use a screen session for running the pipeline interactively, naming and entering a screen session as follows:")]),t._v(" "),a("p",[a("code",[t._v("$ screen -RD new_screen_name")])]),t._v(" "),a("p",[t._v("Once you have set up the appropriate variables for singularity and the Nextflow singularity cache with "),a("code",[t._v("export NXF_SINGULARITY_CACHEDIR")]),t._v(" (see the details in "),a("router-link",{attrs:{to:"/juno-setup.html"}},[t._v("Juno setup")]),t._v("), run the pipeline as follows:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nextflow run pipeline.nf \\\n    --somatic --germline --outDir <path_to_output_subdirectory> -w <path_to_temp_work_subdirectory> -profile juno \\\n    --mapping <path_to_pairing_file>\n    --pairing <path_to_mapping_file>\n")])])]),a("p",[a("em",[t._v("NOTE:")]),t._v(" Normally it's not a good idea to run things on the log-in nodes of the server. Consider scheduling an intervative sessioon via e.g. "),a("code",[t._v('bsub -Is -n 1 -R "rusage[mem=20]" csh')])])])},[],!1,null,null,null);e.default=i.exports}}]);