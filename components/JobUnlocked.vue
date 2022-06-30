<template>
    <div class="col-6">
        <div :class="'h-100 bg-' + bg + ' py-4 px-3'">
            <div class="row align-items-center">
                <div class="col-auto ps-0 align-self-start">
                    <button type="button" class="btn p-0 border-0" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="~/assets/ui/info.png" width="12px" />
                    </button>
                    <div class="dropdown-menu lh-1" style="max-width:35%;">
                        <small class="text-light text-shadow">{{ $t('desc_' + job.id) }}</small>
                    </div>
                </div>
                <div class="col">
                    <span class="h5 text-white text-shadow">{{ $t('name_' + job.id) }}</span>
                </div>
				<!-- <div class="col-auto">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" role="switch" :id="'switchExcluded' + job.id" v-model="job.excluded">
                        <label class="form-check-label text-light text-shadow small" :for="'switchExcluded' + job.id">{{ $t('word_autoExclude') }}</label>
                    </div>
                </div> -->
				<div class="col-auto d-flex text-success text-shadow align-items-baseline justify-content-end">
                    <div class="form-check">
                        <label class="form-check-label text-light text-shadow small" :for="'switchExcluded' + job.id">{{ $t('word_autoExcludeLevelJob') }}</label>
                        <input class="form-input form-control" autocomplete="off" style="width: 50px; display: inline-block; height: 20px; line-height: 20px; text-align: center;" role="switch" :id="'switchExcluded' + job.id" :value="typeof job.excludeLevel === 'string' ? $t(job.excludeLevel) : job.excludeLevel" @input="(e) => job.excludeLevel = e.target.value">
                    </div>
                </div>
                <div class="col-12 d-flex text-success text-shadow align-items-baseline justify-content-end small">
                    +<FormatCoin :value="job.getIncome()" />
                    <small class="ms-1 text-light">/{{ $t('word_days') }}</small>
                </div>
            </div>
            <div class="mt-1 row align-items-center">
                <div class="col-auto small">
                    <span class="text-light text-shadow">{{ $t('job_level') }}</span>
                    <span class="text-white text-shadow"><FormatNumber :value="job.level" /></span>
                </div>
                <div v-if="job.bonusLevel > 0" class="col-auto small">
                    <span class="text-light text-shadow">{{ $t('job_max') }}</span>
                    <span class="text-white text-shadow"><FormatNumber :value="job.bonusLevel" /></span>
                </div>
                <div class="col-12"></div>
                <div v-if="job.bonusLevel > 0" class="col-auto small">
                    <span class="text-light text-shadow">{{ $t('job_speed') }}</span>
                    <span class="text-success text-shadow">+<FormatNumber :value="job.bonusLevel * 10" /> %</span>
                </div>
            </div>
            <div class="mt-1 row align-items-center">
                <div class="col">
                    <div class="my-1 progress bg-progress">
                        <div class="progress-bar bg-normal" role="progressbar" :style="'width:' + Math.round(100 * this.job.current / this.job.getMax()) + '%'" :aria-valuenow="Math.round(100 * this.job.current / this.job.getMax())" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-auto pe-0">
                    <button type="button" class="btn p-0 border-0" @click="$emit('activate')">
                        <img v-if="isActive == false" src="~/assets/ui/toggleOff.png" width="24px" />
                        <img v-if="isActive == true" src="~/assets/ui/toggleOn.png" width="24px" />
                    </button>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-auto small">
                    <span class="text-shadow"><Timer :value="Math.round((this.job.getMax() - this.job.current) / (4 * this.gain))" :class="{ 'text-timer':isActive == true, 'text-light':isActive == false }" /></span>
                </div>
                <div class="col-auto small">
                    <span class="text-shadow"><FormatDate :value="Math.round((this.job.getMax() - this.job.current) / (4 * this.gain))" :class="{ 'text-timer':isActive == true, 'text-light':isActive == false }" /></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props:[ 'job', 'bg', 'gain', 'isActive' ],
}
</script>