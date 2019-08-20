(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{198:function(e,r,a){"use strict";a.r(r);var t=a(0),o=Object(t.a)({},function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"reference-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Reference files")]),e._v(" "),a("h2",{attrs:{id:"grch37"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grch37","aria-hidden":"true"}},[e._v("#")]),e._v(" GRCh37")]),e._v(" "),a("h3",{attrs:{id:"genome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genome","aria-hidden":"true"}},[e._v("#")]),e._v(" Genome")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://software.broadinstitute.org/gatk/download/bundle",target:"_blank",rel:"noopener noreferrer"}},[e._v("GATK bundle"),a("OutboundLink")],1),e._v(", also available "),a("a",{attrs:{href:"https://console.cloud.google.com/storage/browser/gatk-legacy-bundles/b37",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"snv-and-indel-calling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snv-and-indel-calling","aria-hidden":"true"}},[e._v("#")]),e._v(" SNV and indel calling")]),e._v(" "),a("p",[e._v("For genomes, use "),a("a",{attrs:{href:"https://github.mskcc/vaporware/blob/master/docs/INTERVALS.md#genome",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("bed")]),e._v(' file of "callable"'),a("OutboundLink")],1),e._v(" regions from GATK's bundle.")]),e._v(" "),a("p",[e._v("For exomes, use "),a("code",[e._v("bed")]),e._v(" file corresponding to the platform used for target capture, see "),a("a",{attrs:{href:"https://github.mskcc/vaporware/blob/master/docs/INTERVALS.md#exome-capture-platform",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation on intervals"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"structural-variant-sv-calling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structural-variant-sv-calling","aria-hidden":"true"}},[e._v("#")]),e._v(" Structural variant (SV) calling")]),e._v(" "),a("p",[e._v("Delly provides and takes as an argument a "),a("a",{attrs:{href:"https://github.com/dellytools/delly/tree/master/excludeTemplates",target:"_blank",rel:"noopener noreferrer"}},[e._v("file of regions"),a("OutboundLink")],1),e._v(" to "),a("em",[e._v("exclude")]),e._v(" from variant calling. This excludes telomeres and centromeres from auto- and allosomes as well as any other contig.")]),e._v(" "),a("p",[e._v("For Manta, substract these regions from a bed file of the whole genome to generate a list of regions to "),a("em",[e._v("include")]),e._v(". First clean up the file provided by Delly, since it is not in "),a("code",[e._v("bed")]),e._v(" format:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('grep -Ev "chr|MT|GL00|NC|hs37d5" human.hg19.excl.tsv > human.hg19.excl.clean.bed\nbedtools subtract -a b37.bed -b human.hg19.excl.clean.bed > b37.minusDellyExclude.bed\n')])])]),a("h2",{attrs:{id:"grch38"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grch38","aria-hidden":"true"}},[e._v("#")]),e._v(" GRCh38")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://software.broadinstitute.org/gatk/download/bundle",target:"_blank",rel:"noopener noreferrer"}},[e._v("GATK bundle"),a("OutboundLink")],1),e._v(", also available "),a("a",{attrs:{href:"https://console.cloud.google.com/storage/browser/genomics-public-data/resources/broad/hg38",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Support for hg38 is currently somewhat limited. Please raise an issue at https://github.com/mskcc/vaporware/issues if you would like to process data with GRch38. However, please note that hg38 reference files are easily avilable from UCSC.")])])},[],!1,null,null,null);r.default=o.exports}}]);