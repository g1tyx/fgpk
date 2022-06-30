<template>
    <div class="col-6">
        <div :class="'h-100 bg-' + bg + ' py-4 px-3'">
            <div class="row align-items-center">
                <div class="col-auto ps-0 align-self-start">
                    <button type="button" class="btn p-0 border-0" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="~/assets/ui/info.png" width="12px" />
                    </button>
                    <div class="dropdown-menu lh-1" style="max-width:35%;">
                        <small class="text-light text-shadow">{{ $t('desc_' + skill.id) }}</small>
                    </div>
                </div>
                <div class="col">
                    <span class="h5 text-white text-shadow">{{ $t('name_' + skill.id) }}</span>
                </div>
                <div class="col-auto">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" role="switch" :id="'switchExcluded' + skill.id" v-model="skill.excluded">
                        <label class="form-check-label text-light text-shadow small" :for="'switchExcluded' + skill.id">{{ $t('word_autoExclude') }}</label>
                    </div>
                </div>
				<div class="col-12 d-flex text-success text-shadow align-items-baseline justify-content-end">
                    <div class="form-check">
                        <label class="form-check-label text-light text-shadow small" :for="'switchExcluded' + skill.id">{{ $t('word_autoExcludeLevel') }}</label>
                        <input class="form-input form-control" autocomplete="off" style="width: 50px; display: inline-block; height: 20px; line-height: 20px; text-align: center;" role="switch" :id="'switchExcluded' + skill.id" :value="typeof skill.excludeLevel === 'string' ? $t(skill.excludeLevel) : skill.excludeLevel" @input="(e) => skill.excludeLevel = e.target.value">
                    </div>
                </div>
                <div class="col-12 d-flex text-success text-shadow align-items-baseline justify-content-end">
                    <small class="me-1">{{ $t('effectName_' + effectId) }}</small>                    
                    <span v-if="skill.effect > 0 && skill.id != 'mindSeize'"><small>+</small><FormatNumber :value="Math.round(100 * skill.getEffect() - 100)" class="small" /></span>
                    <span v-if="skill.effect < 0 || skill.id == 'mindSeize'"><small v-if="skill.id != 'mindSeize'" class="text-danger">-</small><FormatNumber :value="Math.round(100 - 100 * skill.getEffect())" class="small text-danger" /></span>                    
                    <small class="ms-1" :class="{ 'text-danger':skill.effect < 0 || skill.id == 'mindSeize' }">%</small>
                </div>
            </div>
            <div class="mt-1 row align-items-center">
                <div class="col-auto small">
                    <span class="text-light text-shadow">{{ $t('job_level') }}</span>
                    <span class="text-white text-shadow"><FormatNumber :value="skill.level" /></span>
                </div>
                <div v-if="skill.bonusLevel > 0" class="col-auto small">
                    <span class="text-light text-shadow">{{ $t('job_max') }}</span>
                    <span class="text-white text-shadow"><FormatNumber :value="skill.bonusLevel" /></span>
                </div>
                <div class="col-12"></div>
                <div v-if="skill.bonusLevel > 0" class="col-auto small">
                    <span class="text-light text-shadow">{{ $t('job_speed') }}</span>
                    <span class="text-success text-shadow">+<FormatNumber :value="skill.bonusLevel * 10" /> %</span>
                </div>
            </div>
            <div class="mt-1 row align-items-center">
                <div class="col">
                    <div class="my-1 progress bg-progress">
                        <div class="progress-bar bg-normal" role="progressbar" :style="'width:' + Math.round(100 * this.skill.current / this.skill.getMax()) + '%'" :aria-valuenow="Math.round(100 * this.skill.current / this.skill.getMax())" aria-valuemin="0" aria-valuemax="100"></div>
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
                    <span class="text-shadow"><Timer :value="Math.round((this.skill.getMax() - this.skill.current) / (4 * this.gain))" :class="{ 'text-timer':isActive == true, 'text-light':isActive == false }" /></span>
                </div>
                <div class="col-auto small">
                    <span class="text-shadow"><FormatDate :value="Math.round((this.skill.getMax() - this.skill.current) / (4 * this.gain))" :class="{ 'text-timer':isActive == true, 'text-light':isActive == false }" /></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props:[ 'skill', 'bg', 'gain', 'isActive', 'effectId' ],
}
</script>