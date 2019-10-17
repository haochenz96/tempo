(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(t,e,r){t.exports=r.p+"assets/img/brandenburg5_allegro.d6292417.jpg"},189:function(t,e,r){"use strict";r.r(e);var n=r(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"time-efficient-mutational-profiling-in-oncology-tempo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#time-efficient-mutational-profiling-in-oncology-tempo","aria-hidden":"true"}},[t._v("#")]),t._v(" Time-Efficient Mutational Profiling in Oncology (Tempo)")]),t._v(" "),n("p",[t._v("Tempo is a computational pipeline for processing data of paired-end whole-exome (WES) and whole-genome sequencing (WGS) of human cancer samples with matched normals. Its components are containerized and the pipeline runs on the "),n("a",{attrs:{href:"http://hpc.mskcc.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Juno high-performance computing cluster"),n("OutboundLink")],1),t._v(" at Memorial Sloan Kettering Cancer Center and on "),n("a",{attrs:{href:"https://aws.amazon.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon Web Services (AWS)"),n("OutboundLink")],1),t._v(". The pipeline was written by members of the "),n("a",{attrs:{href:"https://www.mskcc.org/research-programs/molecular-oncology",target:"_blank",rel:"noopener noreferrer"}},[t._v("Center for Molecular Oncology"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("These pages contain instructions on how to run the Tempo pipeline. It also contains documentation on the bioinformatic components in the pipeline, some motivation for various parameter choices, plus an outline describing the reference resources used.")]),t._v(" "),n("p",[t._v("If there are any questions or comments, you are welcome to "),n("a",{attrs:{href:"https://github.com/mskcc/tempo/issues/new?title=%5BUser%20question%5D",target:"_blank",rel:"noopener noreferrer"}},[t._v("raise an issue"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[n("small",[t._v("Note: Tempo currently only supports human samples. The pipeline has only been tested for exome and genome sequencing experiments, and all reference files are in build GRCh37 of the human genome.")])]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"table-of-contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents","aria-hidden":"true"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),n("h3",{attrs:{id:"_1-getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Getting Started")]),t._v(" "),n("h4",{attrs:{id:"_1-1-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-setup","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1. Setup")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/installation.html"}},[t._v("Installation")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/juno-setup.html"}},[t._v("Setup on Juno")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/aws-setup.html"}},[t._v("Setup on AWS")])],1)]),t._v(" "),n("h4",{attrs:{id:"_1-2-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-usage","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2. Usage")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/running-the-pipeline.html"}},[t._v("Running the Pipeline")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/running-the-pipeline.html#modifying-or-resuming-pipeline-run"}},[t._v("Modifying or Resuming Pipeline Run")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/running-the-pipeline.html#after-successful-run"}},[t._v("After Successful Run")])],1)])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/nextflow-basics.html"}},[t._v("Nextflow Basics")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/working-with-containers.html"}},[t._v("Working With Containers")])],1)]),t._v(" "),n("h4",{attrs:{id:"_1-3-outputs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-outputs","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3 Outputs")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/outputs.html#bam-files"}},[t._v("BAM Files")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/outputs.html#qc-outputs"}},[t._v("QC Outputs")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/outputs.html#somatic-data"}},[t._v("Somatic Data")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/outputs.html#germline-data"}},[t._v("Germline Data")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/outputs.html#extended-outputs"}},[t._v("Extended Outputs")])],1)]),t._v(" "),n("h3",{attrs:{id:"_2-pipeline-contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-pipeline-contents","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Pipeline contents")]),t._v(" "),n("h4",{attrs:{id:"_2-1-bioinformatic-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-bioinformatic-components","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1. Bioinformatic Components")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/bioinformatic-components.html#read-alignment"}},[t._v("Read Alignment")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/bioinformatic-components.html#somatic-analyses"}},[t._v("Somatic Analyses")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/bioinformatic-components.html#germline-analyses"}},[t._v("Germline Analyses")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/bioinformatic-components.html#quality-control"}},[t._v("Quality Control")])],1)]),t._v(" "),n("h4",{attrs:{id:"_2-2-reference-resources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-reference-resources","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2. Reference Resources")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/reference-resources.html#genome-assembly"}},[t._v("Genome Assembly")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/reference-resources.html#genomic-intervals"}},[t._v("Genomic Intervals")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/reference-resources.html#repeatmasker-and-mappability-blacklist"}},[t._v("RepeatMasker and Mappability Blacklist")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/reference-resources.html#preferred-transcript-isoforms"}},[t._v("Preferred Transcript Isoforms")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/reference-resources.html#hotspot-annotation.html"}},[t._v("Hotspot Annotation")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/reference-resources.html#oncokb.html"}},[t._v("OncoKB Annotation")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/gnomad.html"}},[t._v("gnomAD")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/wes-panel-of-normals.html"}},[t._v("Panel of Normals for Exomes")])],1)]),t._v(" "),n("h4",{attrs:{id:"_2-3-variant-annotation-and-filtering"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-variant-annotation-and-filtering","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3. Variant Annotation and Filtering")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/variant-annotation-and-filtering.html#somatic-snvs-and-indels"}},[t._v("Somatic SNVs and Indels")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/variant-annotation-and-filtering.html#germline-snvs-and-indels"}},[t._v("Germline SNVs and Indels")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/variant-annotation-and-filtering.html#somatic-and-germline-svs"}},[t._v("Somatic and Germline SVs")])],1)]),t._v(" "),n("h3",{attrs:{id:"_3-help-and-other-resources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-help-and-other-resources","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Help and Other Resources")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/troubleshooting.html"}},[t._v("Troubleshooting")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/aws-glossary.html"}},[t._v("AWS Glossary")])],1)]),t._v(" "),n("h3",{attrs:{id:"_4-contributing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-contributing","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. Contributing")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/contributing-to-tempo.html"}},[t._v("Contributing to Tempo")])],1)]),t._v(" "),n("p",{attrs:{align:"center"}},[n("img",{attrs:{src:r(184)}})]),t._v(" "),n("hr")])},[],!1,null,null,null);e.default=a.exports}}]);