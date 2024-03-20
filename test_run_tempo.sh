#!/bin/bash 
#BSUB -J TEMPO
#BSUB -n 36                # number of core(tasks) for parallel jobs          
#BSUB -R rusage[mem=2]    # expected resorce consumption for memory
#BSUB -W 1:00            # run time limit (hours)
#BSUB -o /data/iacobuzc/haochen/bulk_analysis/tempo_pipeline/test_run.stdout
#BSUB -eo /data/iacobuzc/haochen/bulk_analysis/tempo_pipeline/test_run.stderr

cd /data/iacobuzc/haochen/software/tempo

module load java/1.8.0_31
module load singularity/3.1.1

NXF_VER=22.10.7 nextflow run pipeline.nf \
    --mapping test_inputs/local/full_test_mapping.tsv \
    --pairing test_inputs/local/full_test_pairing.tsv \
    -profile test_singularity \
    --outDir results \
    --somatic --germline --QC --aggregate