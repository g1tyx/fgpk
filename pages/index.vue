<template>
    <div class="h-100 w-100 d-flex align-items-center justify-content-center">
        
        <div v-if="started == false" class="bg-status position-relative">
            <div class="position-absolute" style="top:-55px; left:calc(50% - 25px);"><img src="~/assets/logo.png" width="50px" /></div>
            <div class="mt-2 container">
                <div class="row justify-content-center">
                    <div class="col-auto text-center"><span class="h3 fw-bold text-light text-shadow">{{ $t('screenLoading_name') }}</span></div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto"><span class="flicker text-light text-shadow">{{ $t('screenLoading_text') }}</span></div>
                </div>
            </div>
        </div>
        
        <div v-if="started == true" id="wrapper" class="d-flex align-items-stretch mt-3">
        
            <div class="ms-n3 col-auto bg-status d-flex flex-column position-relative" style="width:285px">
            
                <div class="position-absolute" style="top:-55px; left:calc(50% - 25px);"><img src="~/assets/logo.png" width="50px" /></div>
            
                <div class="container mt-3 pt-0">
                    <div v-if="isAlive == true" class="row gx-0 align-items-center">
                        <div class="col-auto bg-box p-2 d-flex align-items-center justify-content-center">
                            <img src="~/assets/ui/life.png" width="24px" class="mt-1 ms-1" />
                        </div>
                        <div class="ms-1 col position-relative" style="height:50px;">
                            <div class="progress bg-transparent position-absolute" style="top:6px; left:5px; right:9px; height:19px;">
                                <div class="progress-bar bg-transparent bg-progress-red" role="progressbar" :style="'width:' + daysProgress + '%'" :aria-valuenow="daysProgress" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="position-absolute w-100 small" style="top:2px; left:10px;">
									<i18n path="left_age" tag="span" class="fw-bold text-light opacity-75">
                                    	<span class="fw-bold text-light opacity-75"><FormatNumber :value="years" /></span>
									</i18n>
									<i18n path="left_days" tag="span" class="fw-bold text-light opacity-75">
                                   		<span class="fw-bold text-light opacity-75">{{ Math.floor(days - years * 365) }}</span>
									</i18n>
                                </div>
                            </div>
                            <div class="position-absolute" style="top:0px; left:0px; right:0px; bottom:0px;">
                                <img src="~/assets/ui/lifebar.png" height="50px" />
                            </div>
                            <div class="progress bg-transparent position-absolute" style="top:27px; left:10px; right:9px;">
                                <div class="position-absolute w-100 small" style="top:3px; left:7px;">
                                    <span class="fw-bold text-dark opacity-75">{{ $t('left_lifespan') }}</span>
                                    <span class="fw-bold text-dark opacity-75"><FormatNumber :value="Math.floor(lifespan / 365)" /></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn p-0 border-0 grow bg-btn-bounded d-flex align-items-center justify-content-center" style="width:36px; height:36px;" @click="togglePause()">
                                <img v-if="paused == false" src="~/assets/ui/play.png" width="12px" class="ms-1" />
                                <img v-if="paused == true" src="~/assets/ui/pause.png" width="12px" class="ms-1" />
                            </button>
                        </div>
                    </div>
                    <div v-if="isAlive == false" class="row gx-0">
                        <div class="col-auto">
                            <div class="bg-box p-2 d-flex align-items-center justify-content-center">
                                <img src="~/assets/ui/skull.png" width="24px" style="margin-left:2px;" />
                            </div>
                        </div>
                        <div class="ms-2 col">
                            <div>
                                <span class="h5 text-danger text-shadow">{{ $t('death_title') }}</span>
                            </div>
                            <div class="lh-1">
                                <small class="text-muted text-shadow">{{ $t('death_text') }}</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="h-100" style="overflow:auto;">
                
                    <div class="container pt-0">
                        <div class="row align-items-center">
                            <div class="col">
                                <span class="h5 text-light text-shadow">{{ $t('left_balance') }}</span>
                            </div>
                            <div class="col-auto small">
                                <FormatCoin :value="coins" class="text-shadow" :class="{ 'text-white':coins >= 0, 'text-danger':coins < 0 }" />
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col small">
                                <span class="text-muted text-shadow">{{ $t('left_net') }}</span>
                            </div>
                            <div class="col-auto small d-flex align-items-baseline">
                                <small v-if="net >= 0" class="text-success text-shadow">+</small>
                                <FormatCoin :value="net" class="text-shadow small" :class="{ 'text-success':net >= 0, 'text-danger':net < 0 }" />
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col small">
                                <span class="text-muted text-shadow">{{ $t('left_income') }}</span>
                            </div>
                            <div class="col-auto small d-flex align-items-baseline">
                                <small class="text-success text-shadow">+</small>
                                <FormatCoin :value="totalIncome" class="text-success text-shadow small" />
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col small">
                                <span class="text-muted text-shadow">{{ $t('left_expenses') }}</span>
                            </div>
                            <div class="col-auto small d-flex align-items-baseline">
                                <small class="text-danger text-shadow">-</small>
                                <FormatCoin :value="totalExpense" class="text-danger text-shadow small" />
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col">
                                <span class="h5 text-light text-shadow">{{ $t('left_happiness') }}</span>
                            </div>
                            <div class="col-auto">
                                <small class="text-muted text-shadow">x</small>
                                <FormatNumber :value="happiness" class="h5 text-white text-shadow" />
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col small">
                                <span class="text-muted text-shadow">{{ $t('left_happinessDesc') }}</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="evils > 0" class="container">
                        <div class="row align-items-center">
                            <div class="col">
                                <span class="h5 text-evil text-shadow">{{ $t('left_evil') }}</span>
                            </div>
                            <div class="col-auto">
                                <small class="text-muted text-shadow">x</small>
                                <FormatNumber :value="evils" class="h5 text-white text-shadow" />
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col small">
                                <span class="text-muted text-shadow">{{ $t('left_evilDesc') }}</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="essences > 0" class="container">
                        <div class="row align-items-center">
                            <div class="col">
                                <span class="h5 text-essence text-shadow">{{ $t('left_essence') }}</span>
                            </div>
                            <div class="col-auto">
                                <small class="text-muted text-shadow">x</small>
                                <FormatNumber :value="essences" class="h5 text-white text-shadow" />
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col small">
                                <span class="text-muted text-shadow">{{ $t('left_essenceDesc') }}</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="getSkill('timeWarping').unlocked == true" class="container">
                        <div class="row align-items-center">
                            <div class="col">
                                <span class="h5 text-light text-shadow">{{ $t('left_timeWarping') }}</span>
                            </div>
                            <div class="col-auto">
                                <small class="text-muted text-shadow">x</small>
                                <FormatNumber :value="timeWarping" class="h5 text-white text-shadow" />
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-auto pe-0">
                                <button type="button" class="btn p-0 border-0" @click="toggleTimeWarping()">
                                    <img v-if="timeWarpingEnabled == false" src="~/assets/ui/toggleOff.png" width="16px" />
                                    <img v-if="timeWarpingEnabled == true" src="~/assets/ui/toggleOn.png" width="16px" />
                                </button>
                            </div>
                            <div class="col small">
                                <span class="text-muted text-shadow">{{ $t('left_timeWarpingDesc') }}</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="years >= 20 || rebirthOneCount >= 1" class="container">
                        <div class="row align-items-baseline">
                            <div class="col">
                                <span class="h5 text-light text-shadow">{{ $t('left_currentJob') }}</span>
                            </div>
                            <div class="col-auto small">
                                <span class="ms-3 text-white text-shadow">{{ $t('name_' + currentJob.id) }}</span>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-auto pe-0">
                                <button type="button" class="btn p-0 border-0" @click="toggleAutoJob()">
                                    <img v-if="autoJobEnabled == false" src="~/assets/ui/toggleOff.png" width="16px" />
                                    <img v-if="autoJobEnabled == true" src="~/assets/ui/toggleOn.png" width="16px" />
                                </button>
                            </div>
                            <div class="col small">
                                <span class="text-muted text-shadow">{{ $t('left_autoJob') }}</span>
                            </div>
                            <div class="col-auto small">
                                <span class="text-muted text-shadow">{{ $t('left_lvl') }}</span>
                                <span class="text-muted text-shadow"><FormatNumber :value="currentJob.level" /></span>
                            </div>
                        </div>
                    </div>

                    <div v-if="years >= 20 || rebirthOneCount >= 1" class="container">
                        <div class="row align-items-baseline">
                            <div class="col">
                                <span class="h5 text-light text-shadow">{{ $t('left_currentJobCat') }}</span>
                            </div>
                            <div class="col-auto small">
                                <span class="ms-3 text-white text-shadow">{{ $t('name_' + currentJob.cat) }}</span>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-auto pe-0">
                                <button type="button" class="btn p-0 border-0" @click="toggleAutoJobCat()">
                                    <img v-if="autoJobCatEnabled == false" src="~/assets/ui/toggleOff.png" width="16px" />
                                    <img v-if="autoJobCatEnabled == true" src="~/assets/ui/toggleOn.png" width="16px" />
                                </button>
                            </div>
                            <div class="col small">
                                <span class="text-muted text-shadow">{{ $t('left_autoJobCat') }}</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="years >= 20 || rebirthOneCount >= 1" class="container">
                        <div class="row align-items-baseline">
                            <div class="col">
                                <span class="h5 text-light text-shadow">{{ $t('left_currentSkill') }}</span>
                            </div>
                            <div class="col-auto small">
                                <span class="ms-3 text-white text-shadow">{{ $t('name_' + currentSkill.id) }}</span>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-auto pe-0">
                                <button type="button" class="btn p-0 border-0" @click="toggleAutoSkill()">
                                    <img src="~/assets/ui/toggleOff.png" width="16px" :class="{ 'd-none':autoSkillEnabled == true }" />
                                    <img src="~/assets/ui/toggleOn.png" width="16px" :class="{ 'd-none':autoSkillEnabled == false }" />
                                </button>
                            </div>
                            <div class="col small">
                                <span class="text-muted text-shadow">{{ $t('left_autoSkill') }}</span>
                            </div>
                            <div class="col-auto small">
                                <span class="text-muted text-shadow">{{ $t('left_lvl') }}</span>
                                <span class="text-muted text-shadow"><FormatNumber :value="currentSkill.level" /></span>
                            </div>
                        </div>
                    </div>

					<div v-if="years >= 20 || rebirthOneCount >= 1" class="container">
                        <div class="row align-items-center">
                            <div class="col-auto pe-0">
                                <button type="button" class="btn p-0 border-0" @click="toggleAutoShop()">
                                    <img v-if="autoShopEnabled == false" src="~/assets/ui/toggleOff.png" width="16px" />
                                    <img v-if="autoShopEnabled == true" src="~/assets/ui/toggleOn.png" width="16px" />
                                </button>
                            </div>
                            <div class="col small">
                                <span class="text-muted text-shadow">{{ $t('left_autoShop') }}</span>
                            </div>
                        </div>
                    </div>

                    <div v-if="getJob('corrupted').unlocked || rebirthThreeCount > 0" class="container">
                        <div class="row align-items-center">
                            <div class="col">
                                <div class="d-flex align-items-center">
                                    <div class="col">
                                        <span class="h5 text-void text-shadow">{{ $t('left_voidShift') }}</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="col-auto pe-0">
                                        <button type="button" class="btn p-0 border-0" @click="toggleAutoPause()">
                                            <img src="~/assets/ui/toggleOff.png" width="16px" :class="{ 'd-none':autoPauseEnabled == true }" />
                                            <img src="~/assets/ui/toggleOn.png" width="16px" :class="{ 'd-none':autoPauseEnabled == false }" />
                                        </button>
                                    </div>
                                    <div class="ps-1 col small">
                                        <span class="text-muted text-shadow">{{ $t('left_autoPause') }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto d-flex align-items-center justify-content-end">
                                <input type="number" class="form-control form-control-sm text-end" v-model="pauseDelay" style="width:90px;" />
                                <small class="text-muted ms-1">{{ $t('left_age', [""]) }}</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div class="container">
                
                    <div class="row align-items-center justify-content-around">
                        <div class="col-auto">
                            <a href="https://www.patreon.com/bePatron?u=61283131" target="_blank">
                                <img src="~/assets/patreon.png" width="24px" height="24px" />
                            </a>
                        </div>
                        <div class="col-auto">
                            <a href="https://ko-fi.com/freddecgames" target="_blank">
                                <img src="~/assets/kofi.png" width="24px" height="24px" />
                            </a>
                        </div>                        
                        <form class="col-auto" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">
                            <button type="submit" class="btn p-0 border-0">
                                <img src="~/assets/paypal.png" width="24px" height="24px" />
                            </button>
                        </form>
                        <div class="col-auto">
                            <a href="https://discord.gg/3UkgeeT9CV" target="_blank">
                                <img src="~/assets/discord.png" width="24px" height="24px" alt="Discord" />
                            </a>
                        </div>
                    </div>
                    
                    <div class="row g-2 align-items-center justify-content-center">
                        <div class="col-auto">
                            <a href="https://freddecgames.com" target="_blank">
                                <img src="~/assets/freddec.png" width="24px" height="24px" class="rounded-circle" alt="Freddec Games" />
                            </a>
                        </div>
                        <div class="col-auto text-center">
                            <div><small class="text-muted text-shadow">© Freddec Games 2022</small></div>
                            <div><small class="text-muted text-shadow">All rights reserved.</small></div>
                        </div>
                    </div>

                </div>

            </div>
            
            <div class="ms-3 col bg-popup position-relative pt-4">
            
                <div v-if="toastAchievement" class="position-absolute p-2 start-0 end-0 bottom-0" style="z-index:10;">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-auto">
                            <div class="bg-achievement p-2 position-relative" style="width:48px; height:48px;">
                                <div class="text-muted small text-shadow text-center">{{ $t('word_lvl') }}</div>
                                <div class="text-light text-shadow text-center">{{ toastAchievement.level }}</div>
                                <div class="position-absolute" style="bottom:-12px; right:-12px;">
                                    <img src="~/assets/ui/achievementDone.png" width="36px" />
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="bg-item-desc py-2 px-4" style="min-width:15rem;">
                                <div class="mb-1 text-light text-shadow">{{ $t('name_' + toastAchievement.id) }}</div>
                                <div class="mb-1 small text-light text-shadow">{{ $t('desc_' + toastAchievement.id) }}</div>
                                <div class="small text-muted text-shadow">{{ $t('check_' + toastAchievement.id) }}</div>
                                <div v-if="toastAchievement.apply" class="mt-1 small text-success text-shadow">{{ $t('bonus_' + toastAchievement.id) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="container position-absolute" style="top:-77px;">
                    <div class="row gx-3 justify-content-center">
                        <div class="col-auto text-center" style="width:125px;">
                            <button type="button" class="btn p-0 border-0 grow" :class="{ 'active':currentPage == 'jobs' }" @click="setCurrentPage('jobs')">
                                <img :src="require('~/assets/ui_'+language+'/jobs.png')" width="100px" :class="{ 'd-none':currentPage == 'jobs' }" />
                                <img :src="require('~/assets/ui_'+language+'/jobsOutline.png')" width="111px" :class="{ 'd-none':currentPage != 'jobs' }" />
                            </button>
                        </div>
                        <div class="col-auto text-center" style="width:125px;">
                            <button type="button" class="btn p-0 border-0 grow" :class="{ 'active':currentPage == 'skills' }" @click="setCurrentPage('skills')">
                                <img :src="require('~/assets/ui_'+language+'/skills.png')" width="100px" :class="{ 'd-none':currentPage == 'skills' }" />
                                <img :src="require('~/assets/ui_'+language+'/skillsOutline.png')" width="111px" :class="{ 'd-none':currentPage != 'skills' }" />
                            </button>
                        </div>
                        <div class="col-auto text-center" style="width:125px;">
                            <button type="button" class="btn p-0 border-0 grow" :class="{ 'active':currentPage == 'shop' }" @click="setCurrentPage('shop')">
                                <img :src="require('~/assets/ui_'+language+'/shop.png')" width="100px" :class="{ 'd-none':currentPage == 'shop' }" />
                                <img :src="require('~/assets/ui_'+language+'/shopOutline.png')" width="111px" :class="{ 'd-none':currentPage != 'shop' }" />
                            </button>
                        </div>
                        <div v-if="years >= 25" class="col-auto text-center" style="width:125px;">
                            <button type="button" class="btn p-0 border-0 grow" :class="{ 'active':currentPage == 'rebirth' }" @click="setCurrentPage('rebirth')">
                                <img :src="require('~/assets/ui_'+language+'/rebirth.png')" width="100px" :class="{ 'd-none':currentPage == 'rebirth' }" />
                                <img :src="require('~/assets/ui_'+language+'/rebirthOutline.png')" width="111px" :class="{ 'd-none':currentPage != 'rebirth' }" />
                            </button>
                        </div>
                        <div v-if="years >= 10000" class="col-auto text-center" style="width:125px;">
                            <button type="button" class="btn p-0 border-0 grow" :class="{ 'active':currentPage == 'cosmos' }" @click="setCurrentPage('cosmos')">
                                <img :src="require('~/assets/ui_'+language+'/cosmos.png')" width="100px" :class="{ 'd-none':currentPage == 'cosmos' }" />
                                <img :src="require('~/assets/ui_'+language+'/cosmosOutline.png')" width="111px" :class="{ 'd-none':currentPage != 'cosmos' }" />
                            </button>
                        </div>
                    </div>
                </div>

                <div class="container position-absolute" style="width:auto; top:20px; right:-60px;">
                    <div class="row g-2 flex-column">
                        <div class="col-auto">
                            <button type="button" class="btn p-0 border-0 grow" :class="{ 'active':currentPage == 'settings' }" @click="setCurrentPage('settings')">
                                <img src="~/assets/ui/settings.png" width="50px" :class="{ 'd-none':currentPage == 'settings' }" />
                                <img src="~/assets/ui/settingsOutline.png" width="50px" :class="{ 'd-none':currentPage != 'settings' }" />
                            </button>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn p-0 border-0 grow" :class="{ 'active':currentPage == 'achievements' }" @click="setCurrentPage('achievements')">
                                <img src="~/assets/ui/achievements.png" width="50px" :class="{ 'd-none':currentPage == 'achievements' }" />
                                <img src="~/assets/ui/achievementsOutline.png" width="50px" :class="{ 'd-none':currentPage != 'achievements' }" />
                            </button>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn p-0 border-0 grow" :class="{ 'active':currentPage == 'stats' }" @click="setCurrentPage('stats')">
                                <img src="~/assets/ui/stats.png" width="50px" :class="{ 'd-none':currentPage == 'stats' }" />
                                <img src="~/assets/ui/statsOutline.png" width="50px" :class="{ 'd-none':currentPage != 'stats' }" />
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="h-100 me-2" style="overflow:auto; z-index:10;" :class="{ 'bg-rebirth':currentPage == 'rebirth', 'bg-cosmos':currentPage == 'cosmos' }">
                
                    <div v-if="currentPage == 'jobs'" class="pt-4">
                    
                        <Title image="jobCommon">
                                                    
                            <JobUnlocked v-if="getJob('beggar').unlocked == true" bg="listbg6" :job="getJob('beggar')" :gain="getTaskGain(getJob('beggar'))" :isActive="isJobActive('beggar')" @activate="setCurrentJob('beggar')" />
                            
                            <TaskLocked v-if="getJob('farmer').visible == true && getJob('farmer').unlocked == false" :task="getJob('farmer')">
                                <Requirement :req="getJob('farmer').reqs[0]" :task="getJob('beggar')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('farmer').unlocked == true" bg="listbg6" :job="getJob('farmer')" :gain="getTaskGain(getJob('farmer'))" :isActive="isJobActive('farmer')" @activate="setCurrentJob('farmer')" />

                            <TaskLocked v-if="getJob('fisherman').visible == true && getJob('fisherman').unlocked == false" :task="getJob('fisherman')">
                                <Requirement :req="getJob('fisherman').reqs[0]" :task="getJob('farmer')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('fisherman').unlocked == true" bg="listbg6" :job="getJob('fisherman')" :gain="getTaskGain(getJob('fisherman'))" :isActive="isJobActive('fisherman')" @activate="setCurrentJob('fisherman')" />

                            <TaskLocked v-if="getJob('miner').visible == true && getJob('miner').unlocked == false" :task="getJob('miner')">
                                <Requirement :req="getJob('miner').reqs[0]" :task="getJob('fisherman')" />
                                <Requirement :req="getJob('miner').reqs[1]" :task="getSkill('strength')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('miner').unlocked == true" bg="listbg6" :job="getJob('miner')" :gain="getTaskGain(getJob('miner'))" :isActive="isJobActive('miner')" @activate="setCurrentJob('miner')" />

                            <TaskLocked v-if="getJob('blacksmith').visible == true && getJob('blacksmith').unlocked == false" :task="getJob('blacksmith')">
                                <Requirement :req="getJob('blacksmith').reqs[0]" :task="getJob('miner')" />
                                <Requirement :req="getJob('blacksmith').reqs[1]" :task="getSkill('strength')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('blacksmith').unlocked == true" bg="listbg6" :job="getJob('blacksmith')" :gain="getTaskGain(getJob('blacksmith'))" :isActive="isJobActive('blacksmith')" @activate="setCurrentJob('blacksmith')" />

                            <TaskLocked v-if="getJob('merchant').visible == true && getJob('merchant').unlocked == false" :task="getJob('merchant')">
                                <Requirement :req="getJob('merchant').reqs[0]" :task="getJob('blacksmith')" />
                                <Requirement :req="getJob('merchant').reqs[1]" :task="getSkill('bargaining')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('merchant').unlocked == true" bg="listbg6" :job="getJob('merchant')" :gain="getTaskGain(getJob('merchant'))" :isActive="isJobActive('merchant')" @activate="setCurrentJob('merchant')" />
                            
                        </Title>

                        <Title image="jobMilitary">
                        
                            <TaskLocked v-if="getJob('squire').visible == true && getJob('squire').unlocked == false" :task="getJob('squire')">
                                <Requirement :req="getJob('squire').reqs[0]" :task="getSkill('strength')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('squire').unlocked == true" bg="listbg7" :job="getJob('squire')" :gain="getTaskGain(getJob('squire'))" :isActive="isJobActive('squire')" @activate="setCurrentJob('squire')" />
                        
                            <TaskLocked v-if="getJob('footman').visible == true && getJob('footman').unlocked == false" :task="getJob('footman')">
                                <Requirement :req="getJob('footman').reqs[0]" :task="getJob('squire')" />
                                <Requirement :req="getJob('footman').reqs[1]" :task="getSkill('strength')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('footman').unlocked == true" bg="listbg7" :job="getJob('footman')" :gain="getTaskGain(getJob('footman'))" :isActive="isJobActive('footman')" @activate="setCurrentJob('footman')" />
                        
                            <TaskLocked v-if="getJob('veteranFootman').visible == true && getJob('veteranFootman').unlocked == false" :task="getJob('veteranFootman')">
                                <Requirement :req="getJob('veteranFootman').reqs[0]" :task="getJob('footman')" />
                                <Requirement :req="getJob('veteranFootman').reqs[1]" :task="getSkill('battleTactics')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('veteranFootman').unlocked == true" bg="listbg7" :job="getJob('veteranFootman')" :gain="getTaskGain(getJob('veteranFootman'))" :isActive="isJobActive('veteranFootman')" @activate="setCurrentJob('veteranFootman')" />
                        
                            <TaskLocked v-if="getJob('centenary').visible == true && getJob('centenary').unlocked == false" :task="getJob('centenary')">
                                <Requirement :req="getJob('centenary').reqs[0]" :task="getJob('veteranFootman')" />
                                <Requirement :req="getJob('centenary').reqs[1]" :task="getSkill('strength')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('centenary').unlocked == true" bg="listbg7" :job="getJob('centenary')" :gain="getTaskGain(getJob('centenary'))" :isActive="isJobActive('centenary')" @activate="setCurrentJob('centenary')" />
                        
                            <TaskLocked v-if="getJob('knight').visible == true && getJob('knight').unlocked == false" :task="getJob('knight')">
                                <Requirement :req="getJob('knight').reqs[0]" :task="getJob('centenary')" />
                                <Requirement :req="getJob('knight').reqs[1]" :task="getSkill('battleTactics')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('knight').unlocked == true" bg="listbg7" :job="getJob('knight')" :gain="getTaskGain(getJob('knight'))" :isActive="isJobActive('knight')" @activate="setCurrentJob('knight')" />
                        
                            <TaskLocked v-if="getJob('veteranKnight').visible == true && getJob('veteranKnight').unlocked == false" :task="getJob('veteranKnight')">
                                <Requirement :req="getJob('veteranKnight').reqs[0]" :task="getJob('knight')" />
                                <Requirement :req="getJob('veteranKnight').reqs[1]" :task="getSkill('strength')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('veteranKnight').unlocked == true" bg="listbg7" :job="getJob('veteranKnight')" :gain="getTaskGain(getJob('veteranKnight'))" :isActive="isJobActive('veteranKnight')" @activate="setCurrentJob('veteranKnight')" />
                        
                            <TaskLocked v-if="getJob('holyKnight').visible == true && getJob('holyKnight').unlocked == false" :task="getJob('holyKnight')">
                                <Requirement :req="getJob('holyKnight').reqs[0]" :task="getJob('veteranKnight')" />
                                <Requirement :req="getJob('holyKnight').reqs[1]" :task="getSkill('manaControl')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('holyKnight').unlocked == true" bg="listbg7" :job="getJob('holyKnight')" :gain="getTaskGain(getJob('holyKnight'))" :isActive="isJobActive('holyKnight')" @activate="setCurrentJob('holyKnight')" />
                        
                            <TaskLocked v-if="getJob('lieutenantGeneral').visible == true && getJob('lieutenantGeneral').unlocked == false" :task="getJob('lieutenantGeneral')">
                                <Requirement :req="getJob('lieutenantGeneral').reqs[0]" :task="getJob('holyKnight')" />
                                <Requirement :req="getJob('lieutenantGeneral').reqs[1]" :task="getSkill('battleTactics')" />
                                <Requirement :req="getJob('lieutenantGeneral').reqs[2]" :task="getSkill('manaControl')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('lieutenantGeneral').unlocked == true" bg="listbg7" :job="getJob('lieutenantGeneral')" :gain="getTaskGain(getJob('lieutenantGeneral'))" :isActive="isJobActive('lieutenantGeneral')" @activate="setCurrentJob('lieutenantGeneral')" />
                            
                        </Title>
                        
                        <Title v-if="getJob('student').visible == true" image="jobArcane">
                            
                            <TaskLocked v-if="getJob('student').visible == true && getJob('student').unlocked == false" :task="getJob('student')">
                                <Requirement :req="getJob('student').reqs[0]" :task="getSkill('concentration')" />
                                <Requirement :req="getJob('student').reqs[1]" :task="getSkill('meditation')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('student').unlocked == true" bg="listbg8" :job="getJob('student')" :gain="getTaskGain(getJob('student'))" :isActive="isJobActive('student')" @activate="setCurrentJob('student')" />
                            
                            <TaskLocked v-if="getJob('apprenticeMage').visible == true && getJob('apprenticeMage').unlocked == false" :task="getJob('apprenticeMage')">
                                <Requirement :req="getJob('apprenticeMage').reqs[0]" :task="getSkill('manaControl')" />
                                <Requirement :req="getJob('apprenticeMage').reqs[1]" :task="getJob('student')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('apprenticeMage').unlocked == true" bg="listbg8" :job="getJob('apprenticeMage')" :gain="getTaskGain(getJob('apprenticeMage'))" :isActive="isJobActive('apprenticeMage')" @activate="setCurrentJob('apprenticeMage')" />
                            
                            <TaskLocked v-if="getJob('adeptMage').visible == true && getJob('adeptMage').unlocked == false" :task="getJob('adeptMage')">
                                <Requirement :req="getJob('adeptMage').reqs[0]" :task="getSkill('manaControl')" />
                                <Requirement :req="getJob('adeptMage').reqs[1]" :task="getJob('apprenticeMage')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('adeptMage').unlocked == true" bg="listbg8" :job="getJob('adeptMage')" :gain="getTaskGain(getJob('adeptMage'))" :isActive="isJobActive('adeptMage')" @activate="setCurrentJob('adeptMage')" />
                            
                            <TaskLocked v-if="getJob('masterWizard').visible == true && getJob('masterWizard').unlocked == false" :task="getJob('masterWizard')">
                                <Requirement :req="getJob('masterWizard').reqs[0]" :task="getSkill('manaControl')" />
                                <Requirement :req="getJob('masterWizard').reqs[1]" :task="getJob('adeptMage')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('masterWizard').unlocked == true" bg="listbg8" :job="getJob('masterWizard')" :gain="getTaskGain(getJob('masterWizard'))" :isActive="isJobActive('masterWizard')" @activate="setCurrentJob('masterWizard')" />
                            
                            <TaskLocked v-if="getJob('archmage').visible == true && getJob('archmage').unlocked == false" :task="getJob('archmage')">
                                <Requirement :req="getJob('archmage').reqs[0]" :task="getSkill('manaControl')" />
                                <Requirement :req="getJob('archmage').reqs[1]" :task="getJob('masterWizard')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('archmage').unlocked == true" bg="listbg8" :job="getJob('archmage')" :gain="getTaskGain(getJob('archmage'))" :isActive="isJobActive('archmage')" @activate="setCurrentJob('archmage')" />
                            
                            <TaskLocked v-if="getJob('chronomancer').visible == true && getJob('chronomancer').unlocked == false" :task="getJob('chronomancer')">
                                <Requirement :req="getJob('chronomancer').reqs[0]" :task="getSkill('manaControl')" />
                                <Requirement :req="getJob('chronomancer').reqs[1]" :task="getSkill('meditation')" />
                                <Requirement :req="getJob('chronomancer').reqs[2]" :task="getJob('archmage')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('chronomancer').unlocked == true" bg="listbg8" :job="getJob('chronomancer')" :gain="getTaskGain(getJob('chronomancer'))" :isActive="isJobActive('chronomancer')" @activate="setCurrentJob('chronomancer')" />
                            
                            <TaskLocked v-if="getJob('chairman').visible == true && getJob('chairman').unlocked == false" :task="getJob('chairman')">
                                <Requirement :req="getJob('chairman').reqs[0]" :task="getSkill('manaControl')" />
                                <Requirement :req="getJob('chairman').reqs[1]" :task="getSkill('productivity')" />
                                <Requirement :req="getJob('chairman').reqs[2]" :task="getJob('chronomancer')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('chairman').unlocked == true" bg="listbg8" :job="getJob('chairman')" :gain="getTaskGain(getJob('chairman'))" :isActive="isJobActive('chairman')" @activate="setCurrentJob('chairman')" />
                            
                            <TaskLocked v-if="getJob('imperator').visible == true && getJob('imperator').unlocked == false" :task="getJob('imperator')">
                                <Requirement :req="getJob('imperator').reqs[0]" :task="getSkill('allSeeingEye')" />
                                <Requirement :req="getJob('imperator').reqs[1]" :task="getSkill('concentration')" />
                                <Requirement :req="getJob('imperator').reqs[2]" :task="getJob('chairman')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('imperator').unlocked == true" bg="listbg8" :job="getJob('imperator')" :gain="getTaskGain(getJob('imperator'))" :isActive="isJobActive('imperator')" @activate="setCurrentJob('imperator')" />
                            
                        </Title>
                        
                        <Title v-if="getJob('corrupted').unlocked == true" image="jobVoid">
                            
                            <JobUnlocked v-if="getJob('corrupted').unlocked == true" bg="listbg3" :job="getJob('corrupted')" :gain="getTaskGain(getJob('corrupted'))" :isActive="isJobActive('corrupted')" @activate="setCurrentJob('corrupted')" />
                            
                            <TaskLocked v-if="getJob('voidSlave').visible == true && getJob('voidSlave').unlocked == false" :task="getJob('voidSlave')">
                                <Requirement :req="getJob('voidSlave').reqs[0]" :task="getJob('corrupted')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('voidSlave').unlocked == true" bg="listbg3" :job="getJob('voidSlave')" :gain="getTaskGain(getJob('voidSlave'))" :isActive="isJobActive('voidSlave')" @activate="setCurrentJob('voidSlave')" />

                            <TaskLocked v-if="getJob('voidFiend').visible == true && getJob('voidFiend').unlocked == false" :task="getJob('voidFiend')">
                                <Requirement :req="getJob('voidFiend').reqs[0]" :task="getSkill('brainwashing')" />
                                <Requirement :req="getJob('voidFiend').reqs[1]" :task="getJob('voidSlave')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('voidFiend').unlocked == true" bg="listbg3" :job="getJob('voidFiend')" :gain="getTaskGain(getJob('voidFiend'))" :isActive="isJobActive('voidFiend')" @activate="setCurrentJob('voidFiend')" />

                            <TaskLocked v-if="getJob('abyssAnomaly').visible == true && getJob('abyssAnomaly').unlocked == false" :task="getJob('abyssAnomaly')">
                                <Requirement :req="getJob('abyssAnomaly').reqs[0]" :task="getSkill('mindSeize')" />
                                <Requirement :req="getJob('abyssAnomaly').reqs[1]" :task="getJob('voidFiend')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('abyssAnomaly').unlocked == true" bg="listbg3" :job="getJob('abyssAnomaly')" :gain="getTaskGain(getJob('abyssAnomaly'))" :isActive="isJobActive('abyssAnomaly')" @activate="setCurrentJob('abyssAnomaly')" />

                            <TaskLocked v-if="getJob('voidWraith').visible == true && getJob('voidWraith').unlocked == false" :task="getJob('voidWraith')">
                                <Requirement :req="getJob('voidWraith').reqs[0]" :task="getSkill('temporalDimension')" />
                                <Requirement :req="getJob('voidWraith').reqs[1]" :task="getJob('abyssAnomaly')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('voidWraith').unlocked == true" bg="listbg3" :job="getJob('voidWraith')" :gain="getTaskGain(getJob('voidWraith'))" :isActive="isJobActive('voidWraith')" @activate="setCurrentJob('voidWraith')" />

                            <TaskLocked v-if="getJob('voidReaver').visible == true && getJob('voidReaver').unlocked == false" :task="getJob('voidReaver')">
                                <Requirement :req="getJob('voidReaver').reqs[0]" :task="getSkill('voidAmplification')" />
                                <Requirement :req="getJob('voidReaver').reqs[1]" :task="getJob('voidWraith')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('voidReaver').unlocked == true" bg="listbg3" :job="getJob('voidReaver')" :gain="getTaskGain(getJob('voidReaver'))" :isActive="isJobActive('voidReaver')" @activate="setCurrentJob('voidReaver')" />

                            <TaskLocked v-if="getJob('voidLord').visible == true && getJob('voidLord').unlocked == false" :task="getJob('voidLord')">
                                <Requirement :req="getJob('voidLord').reqs[0]" :task="getSkill('voidSymbiosis')" />
                                <Requirement :req="getJob('voidLord').reqs[1]" :task="getJob('voidReaver')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('voidLord').unlocked == true" bg="listbg3" :job="getJob('voidLord')" :gain="getTaskGain(getJob('voidLord'))" :isActive="isJobActive('voidLord')" @activate="setCurrentJob('voidLord')" />

                            <TaskLocked v-if="getJob('abyssGod').visible == true && getJob('abyssGod').unlocked == false" :task="getJob('abyssGod')">
                                <Requirement :req="getJob('abyssGod').reqs[0]" :task="getSkill('voidEmbodiment')" />
                                <Requirement :req="getJob('abyssGod').reqs[1]" :task="getJob('voidLord')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('abyssGod').unlocked == true" bg="listbg3" :job="getJob('abyssGod')" :gain="getTaskGain(getJob('abyssGod'))" :isActive="isJobActive('abyssGod')" @activate="setCurrentJob('abyssGod')" />

                        </Title>
                        
                        <Title v-if="getJob('eternalWanderer').unlocked == true" image="jobCouncil">
                            
                            <JobUnlocked v-if="getJob('eternalWanderer').unlocked == true" bg="listbg4" :job="getJob('eternalWanderer')" :gain="getTaskGain(getJob('eternalWanderer'))" :isActive="isJobActive('eternalWanderer')" @activate="setCurrentJob('eternalWanderer')" />
                            
                            <TaskLocked v-if="getJob('nova').visible == true && getJob('nova').unlocked == false" :task="getJob('nova')">
                                <Requirement :req="getJob('nova').reqs[0]" :task="getJob('eternalWanderer')" />
                                <Requirement :req="getJob('nova').reqs[1]" :task="getSkill('cosmicLongevity')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('nova').unlocked == true" bg="listbg4" :job="getJob('nova')" :gain="getTaskGain(getJob('nova'))" :isActive="isJobActive('nova')" @activate="setCurrentJob('nova')" />
                            
                            <TaskLocked v-if="getJob('sigmaProioxis').visible == true && getJob('sigmaProioxis').unlocked == false" :task="getJob('sigmaProioxis')">
                                <Requirement :req="getJob('sigmaProioxis').reqs[0]" :task="getJob('nova')" />
                                <Requirement :req="getJob('sigmaProioxis').reqs[1]" :task="getSkill('cosmicRecollection')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('sigmaProioxis').unlocked == true" bg="listbg4" :job="getJob('sigmaProioxis')" :gain="getTaskGain(getJob('sigmaProioxis'))" :isActive="isJobActive('sigmaProioxis')" @activate="setCurrentJob('sigmaProioxis')" />
                            
                            <TaskLocked v-if="getJob('acallaris').visible == true && getJob('acallaris').unlocked == false" :task="getJob('acallaris')">
                                <Requirement :req="getJob('acallaris').reqs[0]" :task="getSkill('galacticCommand')" />
                                <Requirement :req="getJob('acallaris').reqs[1]" :task="getJob('sigmaProioxis')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('acallaris').unlocked == true" bg="listbg4" :job="getJob('acallaris')" :gain="getTaskGain(getJob('acallaris'))" :isActive="isJobActive('acallaris')" @activate="setCurrentJob('acallaris')" />
                            
                            <TaskLocked v-if="getJob('oneAboveAll').visible == true && getJob('oneAboveAll').unlocked == false" :task="getJob('oneAboveAll')">
                                <Requirement :req="getJob('oneAboveAll').reqs[0]" :task="getSkill('meditation')" />
                                <Requirement :req="getJob('oneAboveAll').reqs[1]" :task="getJob('acallaris')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('oneAboveAll').unlocked == true" bg="listbg4" :job="getJob('oneAboveAll')" :gain="getTaskGain(getJob('oneAboveAll'))" :isActive="isJobActive('oneAboveAll')" @activate="setCurrentJob('oneAboveAll')" />
                            
                            <TaskLocked v-if="getJob('oneBelowAll').visible == true && getJob('oneBelowAll').unlocked == false" :task="getJob('oneBelowAll')">
                                <Requirement :req="getJob('oneBelowAll').reqs[0]" :task="getSkill('evilIncarnate')" />
                                <Requirement :req="getJob('oneBelowAll').reqs[1]" :task="getJob('oneAboveAll')" />
                                <Requirement :req="getJob('oneBelowAll').reqs[2]" :task="getSkill('yinYang')" />
                            </TaskLocked>
                            <JobUnlocked v-if="getJob('oneBelowAll').unlocked == true" bg="listbg4" :job="getJob('oneBelowAll')" :gain="getTaskGain(getJob('oneBelowAll'))" :isActive="isJobActive('oneBelowAll')" @activate="setCurrentJob('oneBelowAll')" />
                            
                        </Title>
                        
                    </div>
                
                    <div v-if="currentPage == 'skills'" class="pt-4">
                        
                        <Title image="skillFundamentals">
                            
                            <SkillUnlocked v-if="getSkill('concentration').unlocked == true" bg="listbg6" :skill="getSkill('concentration')" :effectId="'skillSpeed'" :gain="getTaskGain(getSkill('concentration'))" :isActive="isSkillActive('concentration')" @activate="setCurrentSkill('concentration')" />

                            <TaskLocked v-if="getSkill('productivity').visible == true && getSkill('productivity').unlocked == false" :task="getSkill('productivity')">
                                <Requirement :req="getSkill('productivity').reqs[0]" :task="getSkill('concentration')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('productivity').unlocked == true" bg="listbg6" :skill="getSkill('productivity')" :effectId="'jobSpeed'" :gain="getTaskGain(getSkill('productivity'))" :isActive="isSkillActive('productivity')" @activate="setCurrentSkill('productivity')" />

                            <TaskLocked v-if="getSkill('bargaining').visible == true && getSkill('bargaining').unlocked == false" :task="getSkill('bargaining')">
                                <Requirement :req="getSkill('bargaining').reqs[0]" :task="getSkill('concentration')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('bargaining').unlocked == true" bg="listbg6" :skill="getSkill('bargaining')" :effectId="'allExpenses'" :gain="getTaskGain(getSkill('bargaining'))" :isActive="isSkillActive('bargaining')" @activate="setCurrentSkill('bargaining')" />
                            
                            <TaskLocked v-if="getSkill('meditation').visible == true && getSkill('meditation').unlocked == false" :task="getSkill('meditation')">
                                <Requirement :req="getSkill('meditation').reqs[0]" :task="getSkill('concentration')" />
                                <Requirement :req="getSkill('meditation').reqs[1]" :task="getSkill('productivity')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('meditation').unlocked == true" bg="listbg6" :skill="getSkill('meditation')" :effectId="'happiness'" :gain="getTaskGain(getSkill('meditation'))" :isActive="isSkillActive('meditation')" @activate="setCurrentSkill('meditation')" />
                            
                        </Title>
                        
                        <Title image="skillCombat">
                            
                            <SkillUnlocked v-if="getSkill('strength').unlocked == true" bg="listbg7" :skill="getSkill('strength')" :effectId="'militaryExpense'" :gain="getTaskGain(getSkill('strength'))" :isActive="isSkillActive('strength')" @activate="setCurrentSkill('strength')" />

                            <TaskLocked v-if="getSkill('battleTactics').visible == true && getSkill('battleTactics').unlocked == false" :task="getSkill('battleTactics')">
                                <Requirement :req="getSkill('battleTactics').reqs[0]" :task="getSkill('concentration')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('battleTactics').unlocked == true" bg="listbg7" :skill="getSkill('battleTactics')" :effectId="'militarySpeed'" :gain="getTaskGain(getSkill('battleTactics'))" :isActive="isSkillActive('battleTactics')" @activate="setCurrentSkill('battleTactics')" />

                            <TaskLocked v-if="getSkill('muscleMemory').visible == true && getSkill('muscleMemory').unlocked == false" :task="getSkill('muscleMemory')">
                                <Requirement :req="getSkill('muscleMemory').reqs[0]" :task="getSkill('concentration')" />
                                <Requirement :req="getSkill('muscleMemory').reqs[1]" :task="getSkill('strength')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('muscleMemory').unlocked == true" bg="listbg7" :skill="getSkill('muscleMemory')" :effectId="'strengthSpeed'" :gain="getTaskGain(getSkill('muscleMemory'))" :isActive="isSkillActive('muscleMemory')" @activate="setCurrentSkill('muscleMemory')" />
                            
                        </Title>
                        
                        <Title v-if="getSkill('manaControl').visible == true" image="skillMagic">
                            
                            <TaskLocked v-if="getSkill('manaControl').visible == true && getSkill('manaControl').unlocked == false" :task="getSkill('manaControl')">
                                <Requirement :req="getSkill('manaControl').reqs[0]" :task="getSkill('concentration')" />
                                <Requirement :req="getSkill('manaControl').reqs[1]" :task="getSkill('meditation')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('manaControl').unlocked == true" bg="listbg8" :skill="getSkill('manaControl')" :effectId="'arcaneSpeed'" :gain="getTaskGain(getSkill('manaControl'))" :isActive="isSkillActive('manaControl')" @activate="setCurrentSkill('manaControl')" />

                            <TaskLocked v-if="getSkill('lifeEssence').visible == true && getSkill('lifeEssence').unlocked == false" :task="getSkill('lifeEssence')">
                                <Requirement :req="getSkill('lifeEssence').reqs[0]" :task="getJob('apprenticeMage')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('lifeEssence').unlocked == true" bg="listbg8" :skill="getSkill('lifeEssence')" :effectId="'lifespan'" :gain="getTaskGain(getSkill('lifeEssence'))" :isActive="isSkillActive('lifeEssence')" @activate="setCurrentSkill('lifeEssence')" />

                            <TaskLocked v-if="getSkill('timeWarping').visible == true && getSkill('timeWarping').unlocked == false" :task="getSkill('timeWarping')">
                                <Requirement :req="getSkill('timeWarping').reqs[0]" :task="getJob('adeptMage')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('timeWarping').unlocked == true" bg="listbg8" :skill="getSkill('timeWarping')" :effectId="'gameSpeed'" :gain="getTaskGain(getSkill('timeWarping'))" :isActive="isSkillActive('timeWarping')" @activate="setCurrentSkill('timeWarping')" />
                            
                            <TaskLocked v-if="getSkill('astralBody').visible == true && getSkill('astralBody').unlocked == false" :task="getSkill('astralBody')">
                                <Requirement :req="getSkill('astralBody').reqs[0]" :task="getJob('archmage')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('astralBody').unlocked == true" bg="listbg8" :skill="getSkill('astralBody')" :effectId="'lifespan'" :gain="getTaskGain(getSkill('astralBody'))" :isActive="isSkillActive('astralBody')" @activate="setCurrentSkill('astralBody')" />
                            
                            <TaskLocked v-if="getSkill('temporalDimension').visible == true && getSkill('temporalDimension').unlocked == false" :task="getSkill('temporalDimension')">
                                <Requirement :req="getSkill('temporalDimension').reqs[0]" :task="getJob('chronomancer')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('temporalDimension').unlocked == true" bg="listbg8" :skill="getSkill('temporalDimension')" :effectId="'gameSpeed'" :gain="getTaskGain(getSkill('temporalDimension'))" :isActive="isSkillActive('temporalDimension')" @activate="setCurrentSkill('temporalDimension')" />
                            
                            <TaskLocked v-if="getSkill('allSeeingEye').visible == true && getSkill('allSeeingEye').unlocked == false" :task="getSkill('allSeeingEye')">
                                <Requirement :req="getSkill('allSeeingEye').reqs[0]" :task="getSkill('manaControl')" />
                                <Requirement :req="getSkill('allSeeingEye').reqs[1]" :task="getJob('chairman')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('allSeeingEye').unlocked == true" bg="listbg8" :skill="getSkill('allSeeingEye')" :effectId="'arcaneExpense'" :gain="getTaskGain(getSkill('allSeeingEye'))" :isActive="isSkillActive('allSeeingEye')" @activate="setCurrentSkill('allSeeingEye')" />
                            
                            <TaskLocked v-if="getSkill('brainwashing').visible == true && getSkill('brainwashing').unlocked == false" :task="getSkill('brainwashing')">
                                <Requirement :req="getSkill('brainwashing').reqs[0]" :task="getJob('imperator')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('brainwashing').unlocked == true" bg="listbg8" :skill="getSkill('brainwashing')" :effectId="'allExpenses'" :gain="getTaskGain(getSkill('brainwashing'))" :isActive="isSkillActive('brainwashing')" @activate="setCurrentSkill('brainwashing')" />	
                            
                        </Title>
                        
                        <Title v-if="getSkill('absoluteWish').visible == true" image="skillManipulation">
                            
                            <TaskLocked v-if="getSkill('absoluteWish').visible == true && getSkill('absoluteWish').unlocked == false" :task="getSkill('absoluteWish')">
                                <Requirement :req="getSkill('absoluteWish').reqs[0]" :task="getJob('voidSlave')" />
                                <Requirement :req="getSkill('absoluteWish').reqs[1]" :task="getJob('chairman')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('absoluteWish').unlocked == true" bg="listbg3" :skill="getSkill('absoluteWish')" :effectId="'evilGain'" :gain="getTaskGain(getSkill('absoluteWish'))" :isActive="isSkillActive('absoluteWish')" @activate="setCurrentSkill('absoluteWish')" />
                            
                            <TaskLocked v-if="getSkill('voidAmplification').visible == true && getSkill('voidAmplification').unlocked == false" :task="getSkill('voidAmplification')">
                                <Requirement :req="getSkill('voidAmplification').reqs[0]" :task="getJob('voidSlave')" />
                                <Requirement :req="getSkill('voidAmplification').reqs[1]" :task="getSkill('absoluteWish')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('voidAmplification').unlocked == true" bg="listbg3" :skill="getSkill('voidAmplification')" :effectId="'voidSpeed'" :gain="getTaskGain(getSkill('voidAmplification'))" :isActive="isSkillActive('voidAmplification')" @activate="setCurrentSkill('voidAmplification')" />

                            <TaskLocked v-if="getSkill('mindSeize').visible == true && getSkill('mindSeize').unlocked == false" :task="getSkill('mindSeize')">
                                <Requirement :req="getSkill('mindSeize').reqs[0]" :task="getSkill('voidAmplification')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('mindSeize').unlocked == true" bg="listbg3" :skill="getSkill('mindSeize')" :effectId="'happiness'" :gain="getTaskGain(getSkill('mindSeize'))" :isActive="isSkillActive('mindSeize')" @activate="setCurrentSkill('mindSeize')" />
                            
                            <TaskLocked v-if="getSkill('ceaselessAbyss').visible == true && getSkill('ceaselessAbyss').unlocked == false" :task="getSkill('ceaselessAbyss')">
                                <Requirement :req="getSkill('ceaselessAbyss').reqs[0]" :task="getSkill('voidInfluence')" />
                                <Requirement :req="getSkill('ceaselessAbyss').reqs[1]" :task="getJob('abyssAnomaly')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('ceaselessAbyss').unlocked == true" bg="listbg3" :skill="getSkill('ceaselessAbyss')" :effectId="'lifespan'" :gain="getTaskGain(getSkill('ceaselessAbyss'))" :isActive="isSkillActive('ceaselessAbyss')" @activate="setCurrentSkill('ceaselessAbyss')" />
                            
                            <TaskLocked v-if="getSkill('voidSymbiosis').visible == true && getSkill('voidSymbiosis').unlocked == false" :task="getSkill('voidSymbiosis')">
                                <Requirement :req="getSkill('voidSymbiosis').reqs[0]" :task="getSkill('ceaselessAbyss')" />
                                <Requirement :req="getSkill('voidSymbiosis').reqs[1]" :task="getJob('voidReaver')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('voidSymbiosis').unlocked == true" bg="listbg3" :skill="getSkill('voidSymbiosis')" :effectId="'jobSpeed'" :gain="getTaskGain(getSkill('voidSymbiosis'))" :isActive="isSkillActive('voidSymbiosis')" @activate="setCurrentSkill('voidSymbiosis')" />
                            
                            <TaskLocked v-if="getSkill('voidEmbodiment').visible == true && getSkill('voidEmbodiment').unlocked == false" :task="getSkill('voidEmbodiment')">
                                <Requirement :req="getSkill('voidEmbodiment').reqs[0]" :task="getSkill('darkInfluence')" />
                                <Requirement :req="getSkill('voidEmbodiment').reqs[1]" :task="getJob('voidLord')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('voidEmbodiment').unlocked == true" bg="listbg3" :skill="getSkill('voidEmbodiment')" :effectId="'evilGain'" :gain="getTaskGain(getSkill('voidEmbodiment'))" :isActive="isSkillActive('voidEmbodiment')" @activate="setCurrentSkill('voidEmbodiment')" />
                            
                            <TaskLocked v-if="getSkill('abyssManipulation').visible == true && getSkill('abyssManipulation').unlocked == false" :task="getSkill('abyssManipulation')">
                                <Requirement :req="getSkill('abyssManipulation').reqs[0]" :task="getJob('abyssGod')" />
                                <Requirement :req="getSkill('abyssManipulation').reqs[1]" :task="getSkill('darkInfluence')" />
                                <Requirement :req="getSkill('abyssManipulation').reqs[2]" :task="getSkill('voidInfluence')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('abyssManipulation').unlocked == true" bg="listbg3" :skill="getSkill('abyssManipulation')" :effectId="'allExpenses'" :gain="getTaskGain(getSkill('abyssManipulation'))" :isActive="isSkillActive('abyssManipulation')" @activate="setCurrentSkill('abyssManipulation')" />
	                        
                        </Title>
                        
                        <Title v-if="getSkill('cosmicLongevity').visible == true" image="skillPowers">
                            
                            <TaskLocked v-if="getSkill('cosmicLongevity').visible == true && getSkill('cosmicLongevity').unlocked == false" :task="getSkill('cosmicLongevity')">
                                <Requirement :req="getSkill('cosmicLongevity').reqs[0]" :task="getJob('eternalWanderer')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('cosmicLongevity').unlocked == true" bg="listbg4" :skill="getSkill('cosmicLongevity')" :effectId="'lifespan'" :gain="getTaskGain(getSkill('cosmicLongevity'))" :isActive="isSkillActive('cosmicLongevity')" @activate="setCurrentSkill('cosmicLongevity')" />

                            <TaskLocked v-if="getSkill('cosmicRecollection').visible == true && getSkill('cosmicRecollection').unlocked == false" :task="getSkill('cosmicRecollection')">
                                <Requirement :req="getSkill('cosmicRecollection').reqs[0]" :task="getJob('nova')" />
                                <Requirement :req="getSkill('cosmicRecollection').reqs[1]" :task="getSkill('meditation')" />
                                <Requirement :req="getSkill('cosmicRecollection').reqs[2]" :task="getSkill('mindSeize')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('cosmicRecollection').unlocked == true" bg="listbg4" :skill="getSkill('cosmicRecollection')" :effectId="'maxLevel'" :gain="getTaskGain(getSkill('cosmicRecollection'))" :isActive="isSkillActive('cosmicRecollection')" @activate="setCurrentSkill('cosmicRecollection')" />
                            
                            <TaskLocked v-if="getSkill('essenceCollector').visible == true && getSkill('essenceCollector').unlocked == false" :task="getSkill('essenceCollector')">
                                <Requirement :req="getSkill('essenceCollector').reqs[0]" :task="getJob('sigmaProioxis')" />
                                <Requirement :req="getSkill('essenceCollector').reqs[1]" :task="getSkill('absoluteWish')" />
                                <Requirement :req="getSkill('essenceCollector').reqs[2]" :task="getSkill('darkKnowledge')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('essenceCollector').unlocked == true" bg="listbg4" :skill="getSkill('essenceCollector')" :effectId="'essenceGain'" :gain="getTaskGain(getSkill('essenceCollector'))" :isActive="isSkillActive('essenceCollector')" @activate="setCurrentSkill('essenceCollector')" />
                            
                            <TaskLocked v-if="getSkill('galacticCommand').visible == true && getSkill('galacticCommand').unlocked == false" :task="getSkill('galacticCommand')">
                                <Requirement :req="getSkill('galacticCommand').reqs[0]" :task="getSkill('essenceCollector')" />
                                <Requirement :req="getSkill('galacticCommand').reqs[1]" :task="getSkill('bargaining')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('galacticCommand').unlocked == true" bg="listbg4" :skill="getSkill('galacticCommand')" :effectId="'allExpenses'" :gain="getTaskGain(getSkill('galacticCommand'))" :isActive="isSkillActive('galacticCommand')" @activate="setCurrentSkill('galacticCommand')" />
	                            
                            <TaskLocked v-if="getSkill('omnipotence').visible == true && getSkill('omnipotence').unlocked == false" :task="getSkill('omnipotence')">
                                <Requirement :req="getSkill('omnipotence').reqs[0]" :task="getJob('oneAboveAll')" />
                                <Requirement :req="getSkill('omnipotence').reqs[1]" :task="getSkill('higherDimensions')" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('omnipotence').unlocked == true" bg="listbg4" :skill="getSkill('omnipotence')" :effectId="'allSpeed'" :gain="getTaskGain(getSkill('omnipotence'))" :isActive="isSkillActive('omnipotence')" @activate="setCurrentSkill('omnipotence')" />
                            
                        </Title>
                        
                        <Title v-if="getSkill('darkInfluence').unlocked == true" image="skillDark">
                            
                            <SkillUnlocked v-if="getSkill('darkInfluence').unlocked == true" bg="listbg5" :skill="getSkill('darkInfluence')" :effectId="'allSpeed'" :gain="getTaskGain(getSkill('darkInfluence'))" :isActive="isSkillActive('darkInfluence')" @activate="setCurrentSkill('darkInfluence')" />

                            <SkillUnlocked v-if="getSkill('evilControl').unlocked == true" bg="listbg5" :skill="getSkill('evilControl')" :effectId="'evilGain'" :gain="getTaskGain(getSkill('evilControl'))" :isActive="isSkillActive('evilControl')" @activate="setCurrentSkill('evilControl')" />

                            <SkillUnlocked v-if="getSkill('intimidation').unlocked == true" bg="listbg5" :skill="getSkill('intimidation')" :effectId="'allExpenses'" :gain="getTaskGain(getSkill('intimidation'))" :isActive="isSkillActive('intimidation')" @activate="setCurrentSkill('intimidation')" />

                            <TaskLocked v-if="getSkill('demonTraining').visible == true && getSkill('demonTraining').unlocked == false" :task="getSkill('demonTraining')">
                                <EvilRequirement :req="20" :evils="evils" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('demonTraining').unlocked == true" bg="listbg5" :skill="getSkill('demonTraining')" :effectId="'allSpeed'" :gain="getTaskGain(getSkill('demonTraining'))" :isActive="isSkillActive('demonTraining')" @activate="setCurrentSkill('demonTraining')" />
                            
                            <TaskLocked v-if="getSkill('bloodMeditation').visible == true && getSkill('bloodMeditation').unlocked == false" :task="getSkill('bloodMeditation')">
                                <EvilRequirement :req="50" :evils="evils" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('bloodMeditation').unlocked == true" bg="listbg5" :skill="getSkill('bloodMeditation')" :effectId="'evilGain'" :gain="getTaskGain(getSkill('bloodMeditation'))" :isActive="isSkillActive('bloodMeditation')" @activate="setCurrentSkill('bloodMeditation')" />
                            
                            <TaskLocked v-if="getSkill('demonsWealth').visible == true && getSkill('demonsWealth').unlocked == false" :task="getSkill('demonsWealth')">
                                <EvilRequirement :req="500" :evils="evils" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('demonsWealth').unlocked == true" bg="listbg5" :skill="getSkill('demonsWealth')" :effectId="'jobGain'" :gain="getTaskGain(getSkill('demonsWealth'))" :isActive="isSkillActive('demonsWealth')" @activate="setCurrentSkill('demonsWealth')" />
                            
                            <TaskLocked v-if="getSkill('darkKnowledge').visible == true && getSkill('darkKnowledge').unlocked == false" :task="getSkill('darkKnowledge')">
                                <EvilRequirement :req="5e3" :evils="evils" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('darkKnowledge').unlocked == true" bg="listbg5" :skill="getSkill('darkKnowledge')" :effectId="'jobSpeed'" :gain="getTaskGain(getSkill('darkKnowledge'))" :isActive="isSkillActive('darkKnowledge')" @activate="setCurrentSkill('darkKnowledge')" />
                            
                            <TaskLocked v-if="getSkill('voidInfluence').visible == true && getSkill('voidInfluence').unlocked == false" :task="getSkill('voidInfluence')">
                                <EvilRequirement :req="50e3" :evils="evils" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('voidInfluence').unlocked == true" bg="listbg5" :skill="getSkill('voidInfluence')" :effectId="'allSpeed'" :gain="getTaskGain(getSkill('voidInfluence'))" :isActive="isSkillActive('voidInfluence')" @activate="setCurrentSkill('voidInfluence')" />
                            
                            <TaskLocked v-if="getSkill('timeLoop').visible == true && getSkill('timeLoop').unlocked == false" :task="getSkill('timeLoop')">
                                <EvilRequirement :req="250e3" :evils="evils" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('timeLoop').unlocked == true" bg="listbg5" :skill="getSkill('timeLoop')" :effectId="'gameSpeed'" :gain="getTaskGain(getSkill('timeLoop'))" :isActive="isSkillActive('timeLoop')" @activate="setCurrentSkill('timeLoop')" />
                            
                            <TaskLocked v-if="getSkill('evilIncarnate').visible == true && getSkill('evilIncarnate').unlocked == false" :task="getSkill('evilIncarnate')">
                                <EvilRequirement :req="1e9" :evils="evils" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('evilIncarnate').unlocked == true" bg="listbg5" :skill="getSkill('evilIncarnate')" :effectId="'jobSpeed'" :gain="getTaskGain(getSkill('evilIncarnate'))" :isActive="isSkillActive('evilIncarnate')" @activate="setCurrentSkill('evilIncarnate')" />
                            
                        </Title>
                        
                        <Title v-if="getSkill('yinYang').unlocked == true" image="skillAlmightiness">
                            
                            <SkillUnlocked v-if="getSkill('yinYang').unlocked == true" bg="listbg2" :skill="getSkill('yinYang')" :effectId="'evilEssenceGain'" :gain="getTaskGain(getSkill('yinYang'))" :isActive="isSkillActive('yinYang')" @activate="setCurrentSkill('yinYang')" />
                            
                            <SkillUnlocked v-if="getSkill('parallelUniverse').unlocked == true" bg="listbg2" :skill="getSkill('parallelUniverse')" :effectId="'allSpeed'" :gain="getTaskGain(getSkill('parallelUniverse'))" :isActive="isSkillActive('parallelUniverse')" @activate="setCurrentSkill('parallelUniverse')" />
                            
                            <TaskLocked v-if="getSkill('higherDimensions').visible == true && getSkill('higherDimensions').unlocked == false" :task="getSkill('higherDimensions')">
                                <EssenceRequirement :req="10e3" :essences="essences" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('higherDimensions').unlocked == true" bg="listbg2" :skill="getSkill('higherDimensions')" :effectId="'lifespan'" :gain="getTaskGain(getSkill('higherDimensions'))" :isActive="isSkillActive('higherDimensions')" @activate="setCurrentSkill('higherDimensions')" />
                            
                            <TaskLocked v-if="getSkill('epiphany').visible == true && getSkill('epiphany').unlocked == false" :task="getSkill('epiphany')">
                                <EssenceRequirement :req="30e3" :essences="essences" />
                            </TaskLocked>
                            <SkillUnlocked v-if="getSkill('epiphany').unlocked == true" bg="listbg2" :skill="getSkill('epiphany')" :effectId="'councilSpeed'" :gain="getTaskGain(getSkill('epiphany'))" :isActive="isSkillActive('epiphany')" @activate="setCurrentSkill('epiphany')" />
                            
                        </Title>
                        
                    </div>
                    
                    <div v-if="currentPage == 'shop'" class="pt-4">

                        <Title image="shopProperty">
                        
                            <ItemUnlocked v-if="getItem('homeless').unlocked == true" :item="getItem('homeless')" effectId="happiness" @activate="setCurrentProperty('homeless')" />

                            <ItemUnlocked v-if="getItem('tent').unlocked == true" :item="getItem('tent')" effectId="happiness" @activate="setCurrentProperty('tent')" />

                            <ItemLocked v-if="getItem('tent').unlocked == true && getItem('woodenHut').unlocked == false" :item="getItem('woodenHut')"  />
                            <ItemUnlocked v-if="getItem('woodenHut').unlocked == true" :item="getItem('woodenHut')" effectId="happiness" @activate="setCurrentProperty('woodenHut')" />

                            <ItemLocked v-if="getItem('woodenHut').unlocked == true && getItem('cottage').unlocked == false" :item="getItem('cottage')"  />
                            <ItemUnlocked v-if="getItem('cottage').unlocked == true" :item="getItem('cottage')" effectId="happiness" @activate="setCurrentProperty('cottage')" />

                            <ItemLocked v-if="getItem('cottage').unlocked == true && getItem('house').unlocked == false" :item="getItem('house')"  />
                            <ItemUnlocked v-if="getItem('house').unlocked == true" :item="getItem('house')" effectId="happiness" @activate="setCurrentProperty('house')" />

                            <ItemLocked v-if="getItem('house').unlocked == true && getItem('largeHouse').unlocked == false" :item="getItem('largeHouse')"  />
                            <ItemUnlocked v-if="getItem('largeHouse').unlocked == true" :item="getItem('largeHouse')" effectId="happiness" @activate="setCurrentProperty('largeHouse')" />

                            <ItemLocked v-if="getItem('largeHouse').unlocked == true && getItem('smallPalace').unlocked == false" :item="getItem('smallPalace')"  />
                            <ItemUnlocked v-if="getItem('smallPalace').unlocked == true" :item="getItem('smallPalace')" effectId="happiness" @activate="setCurrentProperty('smallPalace')" />

                            <ItemLocked v-if="getItem('smallPalace').unlocked == true && getItem('grandPalace').unlocked == false" :item="getItem('grandPalace')"  />
                            <ItemUnlocked v-if="getItem('grandPalace').unlocked == true" :item="getItem('grandPalace')" effectId="happiness" @activate="setCurrentProperty('grandPalace')" />

                            <ItemLocked v-if="getItem('grandPalace').unlocked == true && getItem('townRuler').unlocked == false" :item="getItem('townRuler')"  />
                            <ItemUnlocked v-if="getItem('townRuler').unlocked == true" :item="getItem('townRuler')" effectId="happiness" @activate="setCurrentProperty('townRuler')" />

                            <ItemLocked v-if="getItem('townRuler').unlocked == true && getItem('cityRuler').unlocked == false" :item="getItem('cityRuler')"  />
                            <ItemUnlocked v-if="getItem('cityRuler').unlocked == true" :item="getItem('cityRuler')" effectId="happiness" @activate="setCurrentProperty('cityRuler')" />

                            <ItemLocked v-if="getItem('cityRuler').unlocked == true && getItem('nationRuler').unlocked == false" :item="getItem('nationRuler')"  />
                            <ItemUnlocked v-if="getItem('nationRuler').unlocked == true" :item="getItem('nationRuler')" effectId="happiness" @activate="setCurrentProperty('nationRuler')" />

                            <ItemLocked v-if="getItem('nationRuler').unlocked == true && getItem('pocketDimension').unlocked == false" :item="getItem('pocketDimension')"  />
                            <ItemUnlocked v-if="getItem('pocketDimension').unlocked == true" :item="getItem('pocketDimension')" effectId="happiness" @activate="setCurrentProperty('pocketDimension')" />

                            <ItemLocked v-if="getItem('pocketDimension').unlocked == true && getItem('voidRealm').unlocked == false" :item="getItem('voidRealm')"  />
                            <ItemUnlocked v-if="getItem('voidRealm').unlocked == true" :item="getItem('voidRealm')" effectId="happiness" @activate="setCurrentProperty('voidRealm')" />

                            <ItemLocked v-if="getItem('voidRealm').unlocked == true && getItem('voidUniverse').unlocked == false" :item="getItem('voidUniverse')"  />
                            <ItemUnlocked v-if="getItem('voidUniverse').unlocked == true" :item="getItem('voidUniverse')" effectId="happiness" @activate="setCurrentProperty('voidUniverse')" />

                            <ItemLocked v-if="getItem('voidUniverse').unlocked == true && getItem('astralRealm').unlocked == false" :item="getItem('astralRealm')"  />
                            <ItemUnlocked v-if="getItem('astralRealm').unlocked == true" :item="getItem('astralRealm')" effectId="happiness" @activate="setCurrentProperty('astralRealm')" />

                            <ItemLocked v-if="getItem('astralRealm').unlocked == true && getItem('galacticThrone').unlocked == false" :item="getItem('galacticThrone')"  />
                            <ItemUnlocked v-if="getItem('galacticThrone').unlocked == true" :item="getItem('galacticThrone')" effectId="happiness" @activate="setCurrentProperty('galacticThrone')" />

                            <ItemLocked v-if="getItem('galacticThrone').unlocked == true && getItem('multiverseCreator').unlocked == false" :item="getItem('multiverseCreator')"  />
                            <ItemUnlocked v-if="getItem('multiverseCreator').unlocked == true" :item="getItem('multiverseCreator')" effectId="happiness" @activate="setCurrentProperty('multiverseCreator')" />
                            
                        </Title>
                        
                        <Title image="shopArtefact">
                        
                            <ItemUnlocked v-if="getItem('book').unlocked == true" :item="getItem('book')" effectId="skillSpeed" @activate="toggleArtefact('book')" />

                            <ItemLocked v-if="getItem('book').unlocked == true && getItem('dumbbells').unlocked == false" :item="getItem('dumbbells')"  />
                            <ItemUnlocked v-if="getItem('dumbbells').unlocked == true" :item="getItem('dumbbells')" effectId="strengthSpeed" @activate="toggleArtefact('dumbbells')" />

                            <ItemLocked v-if="getItem('dumbbells').unlocked == true && getItem('personalSquire').unlocked == false" :item="getItem('personalSquire')"  />
                            <ItemUnlocked v-if="getItem('personalSquire').unlocked == true" :item="getItem('personalSquire')" effectId="jobSpeed" @activate="toggleArtefact('personalSquire')" />

                            <ItemLocked v-if="getItem('personalSquire').unlocked == true && getItem('steelLongsword').unlocked == false" :item="getItem('steelLongsword')"  />
                            <ItemUnlocked v-if="getItem('steelLongsword').unlocked == true" :item="getItem('steelLongsword')" effectId="militarySpeed" @activate="toggleArtefact('steelLongsword')" />

                            <ItemLocked v-if="getItem('steelLongsword').unlocked == true && getItem('butler').unlocked == false" :item="getItem('butler')"  />
                            <ItemUnlocked v-if="getItem('butler').unlocked == true" :item="getItem('butler')" effectId="happiness" @activate="toggleArtefact('butler')" />

                            <ItemLocked v-if="getItem('butler').unlocked == true && getItem('sapphireCharm').unlocked == false" :item="getItem('sapphireCharm')"  />
                            <ItemUnlocked v-if="getItem('sapphireCharm').unlocked == true" :item="getItem('sapphireCharm')" effectId="magicSpeed" @activate="toggleArtefact('sapphireCharm')" />

                            <ItemLocked v-if="getItem('sapphireCharm').unlocked == true && getItem('studyDesk').unlocked == false" :item="getItem('studyDesk')"  />
                            <ItemUnlocked v-if="getItem('studyDesk').unlocked == true" :item="getItem('studyDesk')" effectId="skillSpeed" @activate="toggleArtefact('studyDesk')" />

                            <ItemLocked v-if="getItem('studyDesk').unlocked == true && getItem('library').unlocked == false" :item="getItem('library')"  />
                            <ItemUnlocked v-if="getItem('library').unlocked == true" :item="getItem('library')" effectId="skillSpeed" @activate="toggleArtefact('library')" />

                            <ItemLocked v-if="getItem('library').unlocked == true && getItem('observatory').unlocked == false" :item="getItem('observatory')"  />
                            <ItemUnlocked v-if="getItem('observatory').unlocked == true" :item="getItem('observatory')" effectId="magicSpeed" @activate="toggleArtefact('observatory')" />

                            <ItemLocked v-if="getItem('observatory').unlocked == true && getItem('mindsEye').unlocked == false" :item="getItem('mindsEye')"  />
                            <ItemUnlocked v-if="getItem('mindsEye').unlocked == true" :item="getItem('mindsEye')" effectId="fundamentalsSpeed" @activate="toggleArtefact('mindsEye')" />

                            <ItemLocked v-if="getItem('mindsEye').unlocked == true && getItem('voidNecklace').unlocked == false" :item="getItem('voidNecklace')"  />
                            <ItemUnlocked v-if="getItem('voidNecklace').unlocked == true" :item="getItem('voidNecklace')" effectId="manipulationSpeed" @activate="toggleArtefact('voidNecklace')" />

                            <ItemLocked v-if="getItem('voidNecklace').unlocked == true && getItem('voidArmor').unlocked == false" :item="getItem('voidArmor')"  />
                            <ItemUnlocked v-if="getItem('voidArmor').unlocked == true" :item="getItem('voidArmor')" effectId="voidSpeed" @activate="toggleArtefact('voidArmor')" />

                            <ItemLocked v-if="getItem('voidArmor').unlocked == true && getItem('voidBlade').unlocked == false" :item="getItem('voidBlade')"  />
                            <ItemUnlocked v-if="getItem('voidBlade').unlocked == true" :item="getItem('voidBlade')" effectId="skillSpeed" @activate="toggleArtefact('voidBlade')" />

                            <ItemLocked v-if="getItem('voidBlade').unlocked == true && getItem('voidOrb').unlocked == false" :item="getItem('voidOrb')"  />
                            <ItemUnlocked v-if="getItem('voidOrb').unlocked == true" :item="getItem('voidOrb')" effectId="manipulationSpeed" @activate="toggleArtefact('voidOrb')" />

                            <ItemLocked v-if="getItem('voidOrb').unlocked == true && getItem('voidDust').unlocked == false" :item="getItem('voidDust')"  />
                            <ItemUnlocked v-if="getItem('voidDust').unlocked == true" :item="getItem('voidDust')" effectId="voidSpeed" @activate="toggleArtefact('voidDust')" />

                            <ItemLocked v-if="getItem('voidDust').unlocked == true && getItem('celestialRobe').unlocked == false" :item="getItem('celestialRobe')"  />
                            <ItemUnlocked v-if="getItem('celestialRobe').unlocked == true" :item="getItem('celestialRobe')" effectId="galacticSpeed" @activate="toggleArtefact('celestialRobe')" />

                            <ItemLocked v-if="getItem('celestialRobe').unlocked == true && getItem('universeFragment').unlocked == false" :item="getItem('universeFragment')"  />
                            <ItemUnlocked v-if="getItem('universeFragment').unlocked == true" :item="getItem('universeFragment')" effectId="skillSpeed" @activate="toggleArtefact('universeFragment')" />

                            <ItemLocked v-if="getItem('universeFragment').unlocked == true && getItem('multiverseFragment').unlocked == false" :item="getItem('multiverseFragment')"  />
                            <ItemUnlocked v-if="getItem('multiverseFragment').unlocked == true" :item="getItem('multiverseFragment')" effectId="happiness" @activate="toggleArtefact('multiverseFragment')" />
                            
                        </Title>
                        
                    </div>
                    
                    <div v-if="currentPage == 'rebirth'" class="pt-4">
                        <div class="row g-2">
                        
                            <div v-if="years >= 25" class="col-9 mt-0">
                                <div class="bg-card px-3 py-2 text-white text-shadow small">
                                   {{ $t('content_rebirth_25') }}
                                </div>
                            </div>
                            
                            <div v-if="years >= 45" class="ms-auto col-9">
                                <div class="bg-card px-3 py-2 text-white text-shadow small">
                                    {{ $t('content_rebirth_45') }}
                                </div>
                            </div>
                        
                            <div v-if="years >= 65" class="col-9">
                                <div class="bg-card px-3 py-2 text-white text-shadow small">
                                    <div class="p-1">
                                       {{ $t('content_rebirth_65_1') }}
                                    </div>
                                    <div class="p-1">
										<i18n path="content_rebirth_65_2" tag="span">
											<b class="text-white">{{ $t('content_rebirth_65_2_1') }}</b>
											<b class="text-white">{{ $t('content_rebirth_65_2_2') }}</b>
										</i18n>
                                    </div>
                                    <div class="p-1 text-danger">
                                        <i18n path="content_rebirth_65_3" tag="span">
											<b>{{ $t('content_rebirth_65_3_1') }}</b>
											<b>{{ $t('content_rebirth_65_3_2') }}</b>
											<b>{{ $t('content_rebirth_65_3_3') }}</b>
										</i18n>
                                    </div>
                                    <div class="p-1">
                                        <button type="button" class="btn btn-normal" @click="rebirthOne()">{{ $t('name_rebirth1') }}</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div v-if="years >= 200" class="ms-auto col-9">
                                <div class="bg-card px-3 py-2 text-white text-shadow small">
                                    <div class="p-1">
                                       {{ $t('content_rebirth_200_1') }}
                                    </div>
                                    <div class="p-1">
										<i18n path="content_rebirth_200_2" tag="span">
											<span class="text-evil fw-bold">{{ $t('content_rebirth_200_2_1') }}</span>
											<b class="text-evil"><FormatNumber :value="evilGain" />{{ $t('content_rebirth_200_2_2') }}</b>
										</i18n>
                                    </div>
                                    <div class="p-1">
                                        <button type="button" class="btn btn-normal" @click="rebirthTwo()">{{ $t('name_rebirth2') }}</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div v-if="years >= 1000" class="col-9">
                                <div class="bg-card px-3 py-2 text-white text-shadow small">
                                    <div class="p-1">
										<i18n path="content_rebirth_1000_1" tag="span">
											<b class="text-void">{{ $t('content_rebirth_1000_1_1') }}</b>
										</i18n>
                                    </div>
                                    <div class="p-1">
										<i18n path="content_rebirth_1000_2" tag="span">
											<b class="text-void">{{ $t('content_rebirth_1000_2_1') }}</b>
											<b class="text-void">{{ $t('content_rebirth_1000_2_2') }}</b>
										</i18n>
                                    </div>
                                </div>
                            </div>
                        
                            <div v-if="years >= 10000" class="ms-auto col-9">
                                <div class="bg-card px-3 py-2 text-white text-shadow small">
                                    <div class="p-1">
										<i18n path="content_rebirth_10000_1" tag="span">
											<b class="text-white">{{ $t('content_rebirth_10000_1_1') }}</b>
										</i18n>
                                    </div>
                                    <div class="p-1">
                                        <i18n path="content_rebirth_10000_2" tag="span">
											<b class="text-void">{{ $t('content_rebirth_10000_2_1') }}</b>
											<b class="text-void">{{ $t('content_rebirth_10000_2_2') }}</b>
										</i18n>
                                    </div>
                                    <div class="p-1">
										<i18n path="content_rebirth_10000_3" tag="span">
											<b style="color:#18d2d9">{{ $t('content_rebirth_10000_3_1') }}</b>
											<b class="text-evil">{{ $t('content_rebirth_10000_3_2') }}</b>
											<b style="color:#d5c010">{{ $t('content_rebirth_10000_3_3') }}</b>
											<b class="text-essence"><FormatNumber :value="essenceGain" />{{ $t('content_rebirth_10000_3_4') }}</b>
										</i18n>
                                    </div>
                                    <div class="p-1 text-danger">
										<i18n path="content_rebirth_10000_4" tag="span">
											<b>{{ $t('content_rebirth_10000_4_1') }}</b>
										</i18n>
                                    </div>
                                    <div v-if="getSkill('cosmicRecollection').level >= 1" class="p-1">
                                        <button type="button" class="btn btn-normal" @click="rebirthThree()">{{ $t('name_rebirth3') }}</button>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    
                    <div v-if="currentPage == 'settings'" class="pt-4">
                    
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <span class="h5 text-light text-shadow">{{ $t('settings_saveTitle') }}</span>
                                </div>
                                <div class="col-12 p-0">
                                    <div class="row p-0 mt-1">
                                        <div class="col-auto">
                                            <button class="btn btn-normal" @click="importGameData()">{{ $t('settings_importBtn') }}</button>
                                        </div>
                                        <div class="col-auto">
                                            <button class="btn btn-normal" @click="exportGameData()">{{ $t('settings_exportBtn') }}</button>
                                        </div>
                                        <div class="ms-auto col-auto">
                                            <button class="btn btn-normal" @click="importPK2GameData()">{{ $t('settings_importPK2Btn') }}</button>
                                        </div>
                                    </div>                                    
                                    <div class="row p-0 mt-1">
                                        <div class="col-12">
                                            <textarea class="form-control" rows="5" v-model="importExportData" ></textarea>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="container">
                            <div class="row mt-2">
                                <div class="col-12">
                                    <span class="h5 text-light text-shadow">{{ $t('settings_language') }}</span>
                                </div>
                                <div class="col-12 p-0">
                                    <div class="row p-0 mt-1 align-items-center">
                                    	<select class="form-control" v-model="language">
											<option value="en">{{ $t('settings_language_en')}}</option>
											<option value="cn">{{ $t('settings_language_cn')}}</option>
										</select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <div class="row mt-2">
                                <div class="col-12">
									<button type="button" class="btn p-0 border-0" @click="toggleOfflineGain()">
										<img src="~/assets/ui/toggleOff.png" width="16px" :class="{ 'd-none':offlineGainEnabled == true }" />
										<img src="~/assets/ui/toggleOn.png" width="16px" :class="{ 'd-none':offlineGainEnabled == false }" />
									</button>
                                    <span class="h5 text-light text-shadow">{{ $t('settings_en_offline') }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="container">
                            <div class="row mt-2">
                                <div class="col-12">
                                    <span class="h5 text-light text-shadow">{{ $t('settings_resetTitle') }}</span>
                                </div>
                                <div class="col-12 p-0">
                                    <div class="row p-0 mt-1 align-items-center">
                                        <div class="col-auto">
                                            <button class="btn btn-normal" @click="resetGameData()">{{ $t('settings_resetBtn') }}</button>
                                        </div>
                                        <div class="col-auto">
                                            <span class="text-danger"><i class="fas fa-fw fa-exclamation-triangle"></i> {{ $t('settings_resetWarning') }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div v-if="currentPage == 'achievements'" class="pt-4">
                        <div class="container">
                            <div class="row">
                                <AchievementRow text="achRow_click">
                                    <Achievement :achievement="getAchievement('click1')" />
                                    <Achievement :achievement="getAchievement('click2')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_days">
                                    <Achievement :achievement="getAchievement('days1')" />
                                    <Achievement :achievement="getAchievement('days2')" />
                                    <Achievement :achievement="getAchievement('days3')" />
                                    <Achievement :achievement="getAchievement('days4')" />
                                    <Achievement :achievement="getAchievement('days5')" />
                                    <Achievement :achievement="getAchievement('days6')" />
                                    <Achievement :achievement="getAchievement('days7')" />
                                    <Achievement :achievement="getAchievement('days8')" />
                                    <Achievement :achievement="getAchievement('days9')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_ coins">
                                    <Achievement :achievement="getAchievement('coins1')" />
                                    <Achievement :achievement="getAchievement('coins2')" />
                                    <Achievement :achievement="getAchievement('coins3')" />
                                    <Achievement :achievement="getAchievement('coins4')" />
                                    <Achievement :achievement="getAchievement('coins5')" />
                                    <Achievement :achievement="getAchievement('coins6')" />
                                    <Achievement :achievement="getAchievement('coins7')" />
                                    <Achievement :achievement="getAchievement('coins8')" />
                                    <Achievement :achievement="getAchievement('coins9')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_happiness">
                                    <Achievement :achievement="getAchievement('happiness1')" />
                                    <Achievement :achievement="getAchievement('happiness2')" />
                                    <Achievement :achievement="getAchievement('happiness3')" />
                                    <Achievement :achievement="getAchievement('happiness4')" />
                                    <Achievement :achievement="getAchievement('happiness5')" />
                                    <Achievement :achievement="getAchievement('happiness6')" />
                                    <Achievement :achievement="getAchievement('happiness7')" />
                                    <Achievement :achievement="getAchievement('happiness8')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_evil">
                                    <Achievement :achievement="getAchievement('evil1')" />
                                    <Achievement :achievement="getAchievement('evil2')" />
                                    <Achievement :achievement="getAchievement('evil3')" />
                                    <Achievement :achievement="getAchievement('evil4')" />
                                    <Achievement :achievement="getAchievement('evil5')" />
                                    <Achievement :achievement="getAchievement('evil6')" />
                                    <Achievement :achievement="getAchievement('evil7')" />
                                    <Achievement :achievement="getAchievement('evil8')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_essence">
                                    <Achievement :achievement="getAchievement('essence1')" />
                                    <Achievement :achievement="getAchievement('essence2')" />
                                    <Achievement :achievement="getAchievement('essence3')" />
                                    <Achievement :achievement="getAchievement('essence4')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_timeWarping">
                                    <Achievement :achievement="getAchievement('timeWarping1')" />
                                    <Achievement :achievement="getAchievement('timeWarping2')" />
                                    <Achievement :achievement="getAchievement('timeWarping3')" />
                                    <Achievement :achievement="getAchievement('timeWarping4')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_features">
                                    <Achievement :achievement="getAchievement('autoJob')" />
                                    <Achievement :achievement="getAchievement('autoSkill')" />
                                    <Achievement :achievement="getAchievement('autoJobCat')" />
                                    <Achievement :achievement="getAchievement('autoShop')" />
                                    <Achievement :achievement="getAchievement('autoPause')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_properties">
                                    <Achievement :achievement="getAchievement('achTent')" />
                                    <Achievement :achievement="getAchievement('achHouse')" />
                                    <Achievement :achievement="getAchievement('achSmallPalace')" />
                                    <Achievement :achievement="getAchievement('achGrandPalace')" />
                                    <Achievement :achievement="getAchievement('achTownRuler')" />
                                    <Achievement :achievement="getAchievement('achNationRuler')" />
                                    <Achievement :achievement="getAchievement('achVoidUniverse')" />
                                    <Achievement :achievement="getAchievement('achGalacticThrone')" />
                                    <Achievement :achievement="getAchievement('achMultiverseCreator')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_artefacts">
                                    <Achievement :achievement="getAchievement('achBook')" />
                                    <Achievement :achievement="getAchievement('achButler')" />
                                    <Achievement :achievement="getAchievement('achObservatory')" />
                                    <Achievement :achievement="getAchievement('achVoidArmor')" />
                                    <Achievement :achievement="getAchievement('achCelestialRobe')" />
                                    <Achievement :achievement="getAchievement('achMultiverseFragment')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_hoarder">
                                    <Achievement :achievement="getAchievement('hoarder1')" />
                                    <Achievement :achievement="getAchievement('hoarder2')" />
                                    <Achievement :achievement="getAchievement('hoarder3')" />
                                    <Achievement :achievement="getAchievement('hoarder4')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_rebirth1">
                                    <Achievement :achievement="getAchievement('rebirth11')" />
                                    <Achievement :achievement="getAchievement('rebirth12')" />
                                    <Achievement :achievement="getAchievement('rebirth13')" />
                                    <Achievement :achievement="getAchievement('rebirth14')" />
                                    <Achievement :achievement="getAchievement('rebirth15')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_rebirth2">
                                    <Achievement :achievement="getAchievement('rebirth21')" />
                                    <Achievement :achievement="getAchievement('rebirth22')" />
                                    <Achievement :achievement="getAchievement('rebirth23')" />
                                    <Achievement :achievement="getAchievement('rebirth24')" />
                                    <Achievement :achievement="getAchievement('rebirth25')" />
                                </AchievementRow>
                                <AchievementRow text="achRow_rebirth3">
                                    <Achievement :achievement="getAchievement('rebirth31')" />
                                    <Achievement :achievement="getAchievement('rebirth32')" />
                                    <Achievement :achievement="getAchievement('rebirth33')" />
                                    <Achievement :achievement="getAchievement('rebirth34')" />
                                    <Achievement :achievement="getAchievement('rebirth35')" />
                                </AchievementRow>
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="currentPage == 'stats'" class="pt-4">
                        <div class="container">
                            <div class="row g-3">
                                <div class="col-12 mt-0">
                                    <div class="bg-card pb-2 pt-1">
                                        <div class="px-3 py-1 row align-items-center">
                                            <div class="col-auto text-muted text-shadow">{{ $t('stats_gameTime') }}</div>
                                            <div class="col text-light text-shadow"><FormatTime :value="(new Date().getTime() - stats.startedDate) / 1000" /></div>
                                        </div>                                        
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-2 h5 text-light text-shadow">{{ $t('stats_rebirth') }}</div>
                                    <div class="bg-card px-3 pb-3">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th class="text-muted text-shadow text-end" width="15%">{{ $t('word_count') }}</th>
                                                    <th class="text-muted text-shadow text-end" width="15%">{{ $t('word_longest') }}</th>
                                                    <th class="text-muted text-shadow text-end" width="15%">{{ $t('word_current') }}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-muted text-shadow">{{ $t('name_rebirth1') }}</td>
                                                    <td class="text-light text-shadow text-end">{{ rebirthOneCount.toLocaleString() }}</td>
                                                    <td class="text-light text-shadow text-end"><FormatTime :value="stats.rebirth1_longest" /></td>
                                                    <td class="text-light text-shadow text-end"><FormatTime :value="(new Date().getTime() - stats.rebirth1_lastTime) / 1000" /></td>
                                                </tr>
                                                <tr>
                                                    <td class="text-muted text-shadow">{{ $t('name_rebirth2') }}</td>
                                                    <td class="text-light text-shadow text-end">{{ rebirthTwoCount.toLocaleString() }}</td>
                                                    <td class="text-light text-shadow text-end"><FormatTime :value="stats.rebirth2_longest" /></td>
                                                    <td class="text-light text-shadow text-end"><FormatTime :value="(new Date().getTime() - stats.rebirth2_lastTime) / 1000" /></td>
                                                </tr>
                                                <tr>
                                                    <td class="text-muted text-shadow">{{ $t('name_rebirth3') }}</td>
                                                    <td class="text-light text-shadow text-end">{{ rebirthThreeCount.toLocaleString() }}</td>
                                                    <td class="text-light text-shadow text-end"><FormatTime :value="stats.rebirth3_longest" /></td>
                                                    <td class="text-light text-shadow text-end"><FormatTime :value="(new Date().getTime() - stats.rebirth3_lastTime) / 1000" /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </div>
</template>

<script>
import LZString from 'lz-string'

class Base {
    
    constructor(data) {
    
        this.id = data.id
        
        this.unlocked = false
    }
}

class Task extends Base {
    
    constructor(data) {
        super(data) 
        
        this.cat = data.cat
        this.reqs = data.reqs
        
        this.level = 0
        this.current = 0
        this.bonusLevel = 0
        
        this.visible = false
        this.gainMods = []

		this.excluded = false
		this._excludeLevel = -1;
    }

	get excludeLevel() {
		if (isNaN(this._excludeLevel) || this._excludeLevel < 0) {
			if (this instanceof Job) {
				return 'word_no_set';
			} else {
				return 'word_no_limit';
			}
		} else {
			return this._excludeLevel;
		}
	}
	set excludeLevel(val) {
		val = +val;
		if (isNaN(val) || val < 0) {
			this._excludeLevel = -1;

			this.excluded = false;
		} else {
			this._excludeLevel = val;
		}
	}
    
    getGain() {
    
        let mult = 1
        this.gainMods.forEach(mod => { mult *= mod.getEffect() })
        
        mult *= 1 + this.bonusLevel / 10
        
        let ret = Math.round(10 * mult)
        return ret
    }

	getIncomeMultiplier() {
		var levelMultiplier = 1 + Math.log10(this.level + 1)
		return levelMultiplier
    }
    
    getMax() {
    
        let ret = Math.round(this.max * (this.level + 1) * Math.pow(1.01, this.level))
        return ret
    }
    
    progress(gain) {
    
        this.current += gain
        
        if (this.current >= this.getMax()) {
        
            let excess = this.current - this.getMax()            
            while (excess >= 0) {
            
                this.level += 1
                excess -= this.getMax()
            }
            
            this.current = this.getMax() + excess
        }
    }
}

var jobData = [

    { id:'beggar',              cat:'common',          max:50,             income:5,       },
    { id:'farmer',              cat:'common',          max:100,            income:9,       reqs:[{ id:'beggar', level:10 }], },
    { id:'fisherman',           cat:'common',          max:200,            income:15,      reqs:[{ id:'farmer', level:10 }], },
    { id:'miner',               cat:'common',          max:400,            income:40,      reqs:[{ id:'fisherman', level:10 },{ id:'strength', level:10 }], },
    { id:'blacksmith',          cat:'common',          max:800,            income:80,      reqs:[{ id:'miner', level:10 },{ id:'strength', level:30 }], },
    { id:'merchant',            cat:'common',          max:1600,           income:150,     reqs:[{ id:'blacksmith', level:10 },{ id:'bargaining', level:50 }], },

    { id:'squire',              cat:'military',        max:100,            income:5,       reqs:[{ id:'strength', level:5 }], },
    { id:'footman',             cat:'military',        max:1e3,            income:50,      reqs:[{ id:'squire', level:10 },{ id:'strength', level:20 }], },
    { id:'veteranFootman',      cat:'military',        max:10e3,           income:120,     reqs:[{ id:'footman', level:10 },{ id:'battleTactics', level:40 }], },
    { id:'centenary',           cat:'military',        max:100e3,          income:300,     reqs:[{ id:'veteranFootman', level:10 },{ id:'strength', level:100  }], },
    { id:'knight',              cat:'military',        max:1e6,            income:1e3,     reqs:[{ id:'centenary', level:10 },{ id:'battleTactics', level:150 }], },
    { id:'veteranKnight',       cat:'military',        max:7.5e6,          income:3e3,     reqs:[{ id:'knight', level:10 },{ id:'strength', level:300 }], },
    { id:'holyKnight',          cat:'military',        max:40e6,           income:5e3,     reqs:[{ id:'veteranKnight', level:10 },{ id:'manaControl', level:500 }], },
    { id:'lieutenantGeneral',   cat:'military',        max:150e6,          income:50e3,    reqs:[{ id:'holyKnight', level:10 },{ id:'manaControl', level:1e3 },{ id:'battleTactics', level:1e3 }], },

    { id:'student',             cat:'arcane',          max:100e3,          income:100,     reqs:[{ id:'concentration', level:200 },{ id:'meditation', level:200 }], },
    { id:'apprenticeMage',      cat:'arcane',          max:1e6,            income:1e3,     reqs:[{ id:'manaControl', level:400 },{ id:'student', level:10 }], },
    { id:'adeptMage',           cat:'arcane',          max:10e6,           income:9.5e3,   reqs:[{ id:'manaControl', level:700 },{ id:'apprenticeMage', level:10 }], },
    { id:'masterWizard',        cat:'arcane',          max:100e6,          income:70e3,    reqs:[{ id:'manaControl', level:1e3 },{ id:'adeptMage', level:10 }], },
    { id:'archmage',            cat:'arcane',          max:10e9,           income:350e3,   reqs:[{ id:'manaControl', level:1.2e3 },{ id:'masterWizard', level:10 }], },
    { id:'chronomancer',        cat:'arcane',          max:2e12,           income:1e6,     reqs:[{ id:'manaControl', level:1.5e3 },{ id:'meditation', level:1.5e3 },{ id:'archmage', level:25 }], },
    { id:'chairman',            cat:'arcane',          max:20e12,          income:10e6,    reqs:[{ id:'manaControl', level:2e3 },{ id:'productivity', level:2e3 },{ id:'chronomancer', level:50 }], },
    { id:'imperator',           cat:'arcane',          max:9e15,           income:60e6,    reqs:[{ id:'allSeeingEye', level:3e3 },{ id:'concentration', level:3e3},  { id:'chairman', level:666 }], },
	
    { id:'corrupted',           cat:'void',            max:100e12,         income:25e6,    yearReq:1e3, },
    { id:'voidSlave',           cat:'void',            max:650e12,         income:200e6,   reqs:[{ id:'corrupted', level:50 }], }, 
    { id:'voidFiend',           cat:'void',            max:18e15,          income:600e6,   reqs:[{ id:'brainwashing', level:3e3 },{ id:'voidSlave', level:200 }], }, 
    { id:'abyssAnomaly',        cat:'void',            max:18e15,          income:1.2e9,   reqs:[{ id:'mindSeize', level:3e3 },{ id:'voidFiend', level:200 }], }, 
    { id:'voidWraith',          cat:'void',            max:180e15,         income:5e9,     reqs:[{ id:'temporalDimension', level:3.4e3 },{ id:'abyssAnomaly', level:300 }], }, 
    { id:'voidReaver',          cat:'void',            max:2.6e18,         income:25e9,    reqs:[{ id:'voidAmplification', level:3.4e3 },{ id:'voidWraith', level:250 }], }, 
    { id:'voidLord',            cat:'void',            max:28e18,          income:100e9,   reqs:[{ id:'voidSymbiosis', level:3.8e3 },{ id:'voidReaver', level:150 }], },
    { id:'abyssGod',            cat:'void',            max:400e18,         income:1e12,    reqs:[{ id:'voidEmbodiment', level:4.7e3 },{ id:'voidLord', level:750 }], },
    
    { id:'eternalWanderer',     cat:'galactic',        max:55e18,          income:1e12,    yearReq:10e3, },
    { id:'nova',                cat:'galactic',        max:51e18,          income:3e12,    reqs:[{ id:'eternalWanderer', level:15 },{ id:'cosmicLongevity', level:4e3 }], },
    { id:'sigmaProioxis',       cat:'galactic',        max:500e18,         income:25e12,   reqs:[{ id:'nova', level:200 },{ id:'cosmicRecollection', level:4.5e3 }], },
    { id:'acallaris',           cat:'galactic',        max:50e21,          income:215e12,  reqs:[{ id:'galacticCommand', level:5e3 },{ id:'sigmaProioxis', level:1e3 }], },
    { id:'oneAboveAll',         cat:'galactic',        max:5e27,           income:25e15,   reqs:[{ id:'meditation', level:6e3 },{ id:'acallaris', level:1.1e3 }], },
    { id:'oneBelowAll',         cat:'galactic',        max:5e30,           income:26.5e15, reqs:[{ id:'evilIncarnate', level:8.5e3 },{ id:'oneAboveAll', level:1 },{ id:'yinYang', level:7.5e3 }], },
]

class Job extends Task {
    
    constructor(data) {
        super(data) 
    
        this.max = data.max
        this.income = data.income
        this.yearReq = data.yearReq
        
        this.incomeMods = []
    }
    
    getIncome() {
    
        let mult = 1

		mult = this.getIncomeMultiplier();

        this.incomeMods.forEach(mod => { mult *= mod.getEffect() })
        
        let ret = Math.round(this.income * mult)
        return ret
    }
}

var skillData = [

    { id:'concentration',       cat:'fundamental',      effect:0.01,       },
    { id:'productivity',        cat:'fundamental',      effect:0.01,       reqs:[{ id:'concentration', level:5 }], },
    { id:'bargaining',          cat:'fundamental',      effect:-0.01,      reqs:[{ id:'concentration', level:20 }], },
    { id:'meditation',          cat:'fundamental',      effect:0.01,       reqs:[{ id:'concentration', level:30 },{ id:'productivity', level:20 }], },

    { id:'strength',            cat:'combat',           effect:0.01,       },
    { id:'battleTactics',       cat:'combat',           effect:0.01,       reqs:[{ id:'concentration', level:20 }], },
    { id:'muscleMemory',        cat:'combat',           effect:0.01,       reqs:[{ id:'concentration', level:30 },{ id:'strength', level:30 }], },

    { id:'manaControl',         cat:'magic',            effect:0.01,       reqs:[{ id:'concentration', level:200 },{ id:'meditation', level:200 }], },
    { id:'lifeEssence',         cat:'magic',            effect:0.01,       reqs:[{ id:'apprenticeMage', level:10 }], },
    { id:'timeWarping',         cat:'magic',            effect:0.01,       reqs:[{ id:'adeptMage', level:10 }], },
    { id:'astralBody',          cat:'magic',            effect:0.0035,     reqs:[{ id:'archmage', level:10 }], },
    { id:'temporalDimension',   cat:'magic',            effect:0.025,      reqs:[{ id:'chronomancer', level:25 }], },
    { id:'allSeeingEye',        cat:'magic',            effect:0.0027,     reqs:[{ id:'manaControl', level:2.5e3 },{ id:'chairman', level:100 }], },
    { id:'brainwashing',        cat:'magic',            effect:-0.01,      reqs:[{ id:'imperator', level:100 }], },
	
    { id:'absoluteWish',        cat:'manipulation',     effect:0.005,      reqs:[{ id:'voidSlave', level:50 },{ id:'chairman', level:300 }], },
    { id:'voidAmplification',   cat:'manipulation',     effect:0.01,       reqs:[{ id:'voidSlave', level:100 },{ id:'absoluteWish', level:3e3 }], },
    { id:'mindSeize',           cat:'manipulation',     effect:0.0006,     reqs:[{ id:'voidAmplification', level:3e3 }], },
    { id:'ceaselessAbyss',      cat:'manipulation',     effect:0.000585,   reqs:[{ id:'voidInfluence', level:4e3 },{ id:'abyssAnomaly', level:50 }], },
    { id:'voidSymbiosis',       cat:'manipulation',     effect:0.0015,     reqs:[{ id:'ceaselessAbyss', level:3.5e3 },{ id:'voidReaver', level:50 }], },
    { id:'voidEmbodiment',      cat:'manipulation',     effect:0.0025,     reqs:[{ id:'darkInfluence', level:4.6e3 },{ id:'voidLord', level:50 }], },
    { id:'abyssManipulation',   cat:'manipulation',     effect:-0.01,      reqs:[{ id:'abyssGod', level:350 },{ id:'darkInfluence', level:6e3 },{ id:'voidInfluence', level:6e3 }], },
	
    { id:'cosmicLongevity',     cat:'power',            effect:0.0015,     reqs:[{ id:'eternalWanderer', level:1 }], },
    { id:'cosmicRecollection',  cat:'power',            effect:0.00065,    reqs:[{ id:'nova', level:50 },{ id:'meditation', level:4.2e3 },{ id:'mindSeize', level:3e3 }], },
    { id:'essenceCollector',    cat:'power',            effect:0.01,       reqs:[{ id:'sigmaProioxis', level:500 },{ id:'absoluteWish', level:4.9e3 },{ id:'darkKnowledge', level:6.3e3 }], },
    { id:'galacticCommand',     cat:'power',            effect:-0.01,      reqs:[{ id:'essenceCollector', level:5e3 },{ id:'bargaining', level:5e3 }], },
    { id:'omnipotence',         cat:'power',            effect:0.0008,     reqs:[{ id:'oneAboveAll', level:1 },{ id:'higherDimensions', level:6.7e3 }], },
	
    { id:'darkInfluence',       cat:'dark',             effect:0.01,       evilReq:1,      },
    { id:'evilControl',         cat:'dark',             effect:0.01,       evilReq:1,      },
    { id:'intimidation',        cat:'dark',             effect:-0.01,      evilReq:1,      },
    { id:'demonTraining',       cat:'dark',             effect:0.01,       evilReq:20,     },
    { id:'bloodMeditation',     cat:'dark',             effect:0.01,       evilReq:50,     },
    { id:'demonsWealth',        cat:'dark',             effect:0.002,      evilReq:500,    },
    { id:'darkKnowledge',       cat:'dark',             effect:0.003,      evilReq:5e3,    },
    { id:'voidInfluence',       cat:'dark',             effect:0.0028,     evilReq:50e3,   },
    { id:'timeLoop',            cat:'dark',             effect:0.001,      evilReq:250e3,  },
    { id:'evilIncarnate',       cat:'dark',             effect:0.0004,     evilReq:1e9,    },
	
    { id:'yinYang',             cat:'almightiness',     effect:0.018,      essenceReq:1,       },
    { id:'parallelUniverse',    cat:'almightiness',     effect:0.02,       essenceReq:1,       },
    { id:'higherDimensions',    cat:'almightiness',     effect:0.001,      essenceReq:10e3,    },
    { id:'epiphany',            cat:'almightiness',     effect:0.01,       essenceReq:30e3,    },
]

class Skill extends Task {
    
    constructor(data) {
        super(data) 
        
        this.effect = data.effect
        this.evilReq = data.evilReq
        this.essenceReq = data.essenceReq
        
        this.max = 100
    }
    
    getEffect() {
    
        if (this.id == 'bargaining' || this.id == 'intimidation' || this.id == 'brainwashing' || this.id == 'abyssManipulation' || this.id == 'galacticCommand') {
        
            let ret = 1 - (Math.log(this.level + 1) / Math.log(7)) / 10
            return ret
            
        } else if (this.id == 'timeWarping') {
            
            let ret = 1 + Math.log(this.level + 1) / Math.log(13)
            return ret
            
        } else if (this.id == 'lifeEssence') {

            let ret = 1 + Math.log(this.level + 1) / Math.log(33)
            return ret
            
        } else if (this.id == 'cosmicRecollection') {
        
            let ret = this.effect * this.level
            return ret
        }
    
        let ret = 1 + this.effect * this.level
        return ret
    }
}

class Item extends Base {
    
    constructor(data) {
        super(data) 
        
        this.effect = data.effect
        this.expense = data.expense
        this.coinReq = data.coinReq
        
        this.activated = false
        this.expenseMods = []
    }
    
    getEffect() {
        
        if (this.activated == false) return 1
        return this.effect
    }
    
    getExpense() {
        
        let mult = 1
        this.expenseMods.forEach(mod => { mult *= mod.getEffect() })
        
        let ret = Math.round(this.expense * mult)
        return ret
    }
}

var propertyData = [

    { id:'homeless',            expense:0,          effect:1,         },
    { id:'tent',                expense:15,         effect:1.4,       },
    { id:'woodenHut',           expense:100,        effect:2,         coinReq:10e3,       },
    { id:'cottage',             expense:750,        effect:3.5,       coinReq:75e3,       },
    { id:'house',               expense:3e3,        effect:6,         coinReq:300e3,      },
    { id:'largeHouse',          expense:25e3,       effect:12,        coinReq:2.5e6,      },
    { id:'smallPalace',         expense:300e3,      effect:25,        coinReq:30e6,       },
    { id:'grandPalace',         expense:5e6,        effect:60,        coinReq:500e6,      },
    { id:'townRuler',           expense:35e6,       effect:120,       coinReq:3.5e9,      },
    { id:'cityRuler',           expense:1.1e9,      effect:500,       coinReq:100.1e9,    },
    { id:'nationRuler',         expense:13e9,       effect:1.2e3,     coinReq:1.3e12,     },
    { id:'pocketDimension',     expense:49e9,       effect:5e3,       coinReq:4.9e12,     },
    { id:'voidRealm',           expense:121e9,      effect:15e3,      coinReq:12.1e12,    },
    { id:'voidUniverse',        expense:2e12,       effect:30e3,      coinReq:200e12,     },
    { id:'astralRealm',         expense:160e12,     effect:150e3,     coinReq:1.6e15,     },
    { id:'galacticThrone',      expense:5e15,       effect:300e3,     coinReq:500e15,     },
    { id:'multiverseCreator',   expense:1110690e12, effect:1e6,       coinReq:111069e15,  },
]

class Property extends Item {
    
    constructor(data) {
        super(data) 
    }
}

var artefactData = [

    { id:'book',                expense:10,         effect:1.5,       },
    { id:'dumbbells',           expense:50,         effect:1.5,       coinReq:5e3,        },
    { id:'personalSquire',      expense:200,        effect:2,         coinReq:20e3,       },
    { id:'steelLongsword',      expense:1e3,        effect:2,         coinReq:100e3,      },
    { id:'butler',              expense:7.5e3,      effect:1.5,       coinReq:700.5e3,    },
    { id:'sapphireCharm',       expense:50e3,       effect:3,         coinReq:5e6,        },
    { id:'studyDesk',           expense:1e6,        effect:2,         coinReq:100e6,      },
    { id:'library',             expense:10e6,       effect:2,         coinReq:1e9,        },
    { id:'observatory',         expense:140e6,      effect:5,         coinReq:14e9,       },
    { id:'mindsEye',            expense:3.25e9,     effect:10,        coinReq:300.25e9,   },
    { id:'voidNecklace',        expense:28e9,       effect:3,         coinReq:2.8e12,     },
    { id:'voidArmor',           expense:197e9,      effect:3,         coinReq:19.7e12,    },
    { id:'voidBlade',           expense:502e9,      effect:3,         coinReq:50.2e12,    },
    { id:'voidOrb',             expense:1.2e12,     effect:3,         coinReq:100.2e12,   },
    { id:'voidDust',            expense:25e12,      effect:3,         coinReq:2.5e15,     },
    { id:'celestialRobe',       expense:300e12,     effect:5,         coinReq:30e15,      },
    { id:'universeFragment',    expense:18.5e15,    effect:3,         coinReq:1.85e18,    },
    { id:'multiverseFragment',  expense:200.5e15,   effect:5,         coinReq:20.5e18,    },
]

class Artefact extends Item {
    
    constructor(data) {
        super(data) 
    }
}

var achievementData = [

    { id:'click1', type:'click', level:1, check:function(state) { return state.clickCount >= 1 },     },
    { id:'click2', type:'click', level:2, check:function(state) { return state.clickCount >= 10000 }, },

    { id:'days1', type:'days', level:1, check:function(state) { return state.days >= 18 * 365 },      },
    { id:'days2', type:'days', level:2, check:function(state) { return state.days >= 30 * 365 },      },
    { id:'days3', type:'days', level:3, check:function(state) { return state.days >= 65 * 365 },      },
    { id:'days4', type:'days', level:4, check:function(state) { return state.days >= 100 * 365 },     },
    { id:'days5', type:'days', level:5, check:function(state) { return state.days >= 200 * 365 },     },
    { id:'days6', type:'days', level:6, check:function(state) { return state.days >= 1000 * 365 },    apply:function(state) { state.achGameSpeed += .1 }, },
    { id:'days7', type:'days', level:7, check:function(state) { return state.days >= 10000 * 365 },   apply:function(state) { state.achGameSpeed += .2 }, },
    { id:'days8', type:'days', level:8, check:function(state) { return state.days >= 100000 * 365 },  apply:function(state) { state.achGameSpeed += .3 }, },
    { id:'days9', type:'days', level:9, check:function(state) { return state.days >= 1000000 * 365 }, apply:function(state) { state.achGameSpeed += .4 }, },

    { id:'coins1', type:'coins', level:1, check:function(state) { return state.coins >= 100 },                      },
    { id:'coins2', type:'coins', level:2, check:function(state) { return state.coins >= 10000 },                    },
    { id:'coins3', type:'coins', level:3, check:function(state) { return state.coins >= 1000000 },                  },
    { id:'coins4', type:'coins', level:4, check:function(state) { return state.coins >= 10000000000 },              },
    { id:'coins5', type:'coins', level:5, check:function(state) { return state.coins >= 10000000000000 },           apply:function(state) { state.achExpense.value += -.05 }, },
    { id:'coins6', type:'coins', level:6, check:function(state) { return state.coins >= 1000000000000000 },         apply:function(state) { state.achExpense.value += -.05 }, },
    { id:'coins7', type:'coins', level:7, check:function(state) { return state.coins >= 100000000000000000 },       apply:function(state) { state.achExpense.value += -.05 }, },
    { id:'coins8', type:'coins', level:8, check:function(state) { return state.coins >= 100000000000000000000 },    apply:function(state) { state.achExpense.value += -.05 }, },
    { id:'coins9', type:'coins', level:9, check:function(state) { return state.coins >= 200000000000000000000000 }, apply:function(state) { state.achExpense.value += -.05 }, },

    { id:'happiness1', type:'happiness', level:1, check:function(state) { return state.happiness >= 10 },        },
    { id:'happiness2', type:'happiness', level:2, check:function(state) { return state.happiness >= 500 },       },
    { id:'happiness3', type:'happiness', level:3, check:function(state) { return state.happiness >= 10000 },     apply:function(state) { state.achHappiness += .05 }, },
    { id:'happiness4', type:'happiness', level:4, check:function(state) { return state.happiness >= 100000 },    apply:function(state) { state.achHappiness += .10 }, },
    { id:'happiness5', type:'happiness', level:5, check:function(state) { return state.happiness >= 1000000 },   apply:function(state) { state.achHappiness += .15 }, },
    { id:'happiness6', type:'happiness', level:6, check:function(state) { return state.happiness >= 10000000 },  apply:function(state) { state.achHappiness += .20 }, },
    { id:'happiness7', type:'happiness', level:7, check:function(state) { return state.happiness >= 100000000 }, apply:function(state) { state.achHappiness += .25 }, },
    { id:'happiness8', type:'happiness', level:8, check:function(state) { return state.happiness >= 300000000 }, apply:function(state) { state.achHappiness += .50 }, },

    { id:'evil1', type:'evil', level:1, check:function(state) { return state.evils >= 1 },           },
    { id:'evil2', type:'evil', level:2, check:function(state) { return state.evils >= 50 },          },
    { id:'evil3', type:'evil', level:3, check:function(state) { return state.evils >= 500 },         apply:function(state) { state.achEvilGain += .25 }, },
    { id:'evil4', type:'evil', level:4, check:function(state) { return state.evils >= 5000 },        apply:function(state) { state.achEvilGain += .25 }, },
    { id:'evil5', type:'evil', level:5, check:function(state) { return state.evils >= 50000 },       apply:function(state) { state.achEvilGain += .1  }, },
    { id:'evil6', type:'evil', level:6, check:function(state) { return state.evils >= 2500000 },     apply:function(state) { state.achEvilGain += .2  }, },
    { id:'evil7', type:'evil', level:7, check:function(state) { return state.evils >= 1000000000 },  apply:function(state) { state.achEvilGain += .2  }, },
    { id:'evil8', type:'evil', level:8, check:function(state) { return state.evils >= 10000000000 }, apply:function(state) { state.achEvilGain += 9   }, },

    { id:'essence1', type:'essence', level:1, check:function(state) { return state.essences >= 1 },      },
    { id:'essence2', type:'essence', level:2, check:function(state) { return state.essences >= 10000 },  apply:function(state) { state.achEssenceGain += .5 }, },
    { id:'essence3', type:'essence', level:3, check:function(state) { return state.essences >= 30000 },  apply:function(state) { state.achEssenceGain += .5 }, },
    { id:'essence4', type:'essence', level:4, check:function(state) { return state.essences >= 100000 }, apply:function(state) { state.achEssenceGain += 9  }, },

    { id:'timeWarping1', type:'timeWarping', level:1, check:function(state) { return state.timeWarping >= 10 },   },
    { id:'timeWarping2', type:'timeWarping', level:2, check:function(state) { return state.timeWarping >= 100 },  },
    { id:'timeWarping3', type:'timeWarping', level:3, check:function(state) { return state.timeWarping >= 500 },  apply:function(state) { state.achGameSpeed += .25 }, },
    { id:'timeWarping4', type:'timeWarping', level:4, check:function(state) { return state.timeWarping >= 1000 }, apply:function(state) { state.achGameSpeed += .25 }, },

    { id:'autoJob',   type:'features', level:1, check:function(state) { return state.years >= 20 || state.rebirthOneCount >= 1 }, },
    { id:'autoSkill', type:'features', level:2, check:function(state) { return state.years >= 20 || state.rebirthOneCount >= 1 }, },
    { id:'autoJobCat',type:'features', level:3, check:function(state) { return state.years >= 20 || state.rebirthOneCount >= 1 }, },
    { id:'autoShop',  type:'features', level:4, check:function(state) { return state.years >= 20 || state.rebirthOneCount >= 1 }, },
    { id:'autoPause', type:'features', level:5, check:function(state) { return state.getJob('corrupted').unlocked || state.rebirthThreeCount > 0 }, },

    { id:'achTent',              type:'properties', level:1, check:function(state) { return state.getItem('tent').unlocked },              },
    { id:'achHouse',             type:'properties', level:2, check:function(state) { return state.getItem('house').unlocked },             },
    { id:'achSmallPalace',       type:'properties', level:3, check:function(state) { return state.getItem('smallPalace').unlocked },       },
    { id:'achGrandPalace',       type:'properties', level:4, check:function(state) { return state.getItem('grandPalace').unlocked },       },
    { id:'achTownRuler',         type:'properties', level:5, check:function(state) { return state.getItem('townRuler').unlocked },         },
    { id:'achNationRuler',       type:'properties', level:6, check:function(state) { return state.getItem('nationRuler').unlocked },       apply:function(state) { state.achLifespan += .1 }, },
    { id:'achVoidUniverse',      type:'properties', level:7, check:function(state) { return state.getItem('voidUniverse').unlocked },      apply:function(state) { state.achLifespan += .1 }, },
    { id:'achGalacticThrone',    type:'properties', level:8, check:function(state) { return state.getItem('galacticThrone').unlocked },    apply:function(state) { state.achLifespan += .15 }, },
    { id:'achMultiverseCreator', type:'properties', level:9, check:function(state) { return state.getItem('multiverseCreator').unlocked }, apply:function(state) { state.achLifespan += .15 }, },

    { id:'achBook',               type:'artefacts', level:1, check:function(state) { return state.getItem('book').unlocked },               },
    { id:'achButler',             type:'artefacts', level:2, check:function(state) { return state.getItem('butler').unlocked },             },
    { id:'achObservatory',        type:'artefacts', level:3, check:function(state) { return state.getItem('observatory').unlocked },        },
    { id:'achVoidArmor',          type:'artefacts', level:4, check:function(state) { return state.getItem('voidArmor').unlocked },          },
    { id:'achCelestialRobe',      type:'artefacts', level:5, check:function(state) { return state.getItem('celestialRobe').unlocked },      },
    { id:'achMultiverseFragment', type:'artefacts', level:6, check:function(state) { return state.getItem('multiverseFragment').unlocked }, },

    { id:'hoarder1', type:'hoarder', level:1, check:function(state) { return state.activeArtefactCount >= 5 },  },
    { id:'hoarder2', type:'hoarder', level:2, check:function(state) { return state.activeArtefactCount >= 10 }, apply:function(state) { state.achHappiness += .1 }, },
    { id:'hoarder3', type:'hoarder', level:3, check:function(state) { return state.activeArtefactCount >= 14 }, apply:function(state) { state.achHappiness += .15 }, },
    { id:'hoarder4', type:'hoarder', level:4, check:function(state) { return state.activeArtefactCount >= 18 }, apply:function(state) { state.achHappiness += .25 }, },

    { id:'rebirth11', type:'rebirth1', level:1, check:function(state) { return state.rebirthOneCount >= 1  }, },
    { id:'rebirth12', type:'rebirth1', level:2, check:function(state) { return state.rebirthOneCount >= 5  }, },
    { id:'rebirth13', type:'rebirth1', level:3, check:function(state) { return state.rebirthOneCount >= 10 }, apply:function(state) { state.startingDays = 20 * 365 }, },
    { id:'rebirth14', type:'rebirth1', level:4, check:function(state) { return state.rebirthOneCount >= 25 }, apply:function(state) { state.startingDays = 30 * 365 }, },
    { id:'rebirth15', type:'rebirth1', level:5, check:function(state) { return state.rebirthOneCount >= 50 }, apply:function(state) { state.startingDays = 40 * 365 }, },

    { id:'rebirth21', type:'rebirth2', level:1, check:function(state) { return state.rebirthTwoCount >= 1  }, },
    { id:'rebirth22', type:'rebirth2', level:2, check:function(state) { return state.rebirthTwoCount >= 5  }, apply:function(state) { state.achEvilGain += .25 }, },
    { id:'rebirth23', type:'rebirth2', level:3, check:function(state) { return state.rebirthTwoCount >= 10 }, apply:function(state) { state.achEvilGain += .25 }, },
    { id:'rebirth24', type:'rebirth2', level:4, check:function(state) { return state.rebirthTwoCount >= 25 }, apply:function(state) { state.achEvilGain += .25 }, },
    { id:'rebirth25', type:'rebirth2', level:5, check:function(state) { return state.rebirthTwoCount >= 50 }, apply:function(state) { state.achEvilGain += .25 }, },

    { id:'rebirth31', type:'rebirth3', level:1, check:function(state) { return state.rebirthThreeCount >= 1  }, },
    { id:'rebirth32', type:'rebirth3', level:2, check:function(state) { return state.rebirthThreeCount >= 3  }, apply:function(state) { state.achEssenceGain += .25 }, },
    { id:'rebirth33', type:'rebirth3', level:3, check:function(state) { return state.rebirthThreeCount >= 5  }, apply:function(state) { state.achEssenceGain += .25 }, },
    { id:'rebirth34', type:'rebirth3', level:4, check:function(state) { return state.rebirthThreeCount >= 10 }, apply:function(state) { state.achEssenceGain += .25 }, },
    { id:'rebirth35', type:'rebirth3', level:5, check:function(state) { return state.rebirthThreeCount >= 15 }, apply:function(state) { state.achEssenceGain += .25 }, },
]

class Achievement {
    
    constructor(data) {
    
        this.id = data.id
        this.type = data.type
        this.check = data.check || function(state) { return false }
        this.level = data.level
        this.apply = data.apply
        
        this.done = false
    }
}

export default {

    data() {
        return {
            
            fps:20,
            locale:'en',
            started:false,
            autoSaveDelay:30000,
            lastFrameTimeMs:new Date().getTime(),
            lastUpdateTimeMs:new Date().getTime(),
            minLoadingTimerMS:1000,
                        
            importExportData:null,
            
            localStorageName:'fgpk',
            
            //-----
            
            currentPage:'jobs',
            
            toastAchievement:null,
            
            jobs:[],
            skills:[],
            artefacts:[],
            properties:[],
            achievements:[],
            
            days:0,
            coins:0,
            evils:0,
            essences:0,
            pauseDelay:1000,
            clickCount:0,
            startingDays:15 * 365,
            
            paused:false,
            autoJobEnabled:false,
            autoJobCatEnabled:false,
            autoSkillEnabled:false,
            autoPauseEnabled:false,
            autoShopEnabled:false,
            timeWarpingEnabled:false,
            offlineGainEnabled:true,
            
            currentJob:null,
            currentSkill:null,
            currentProperty:null,
            
            rebirthOneCount:0,
            rebirthTwoCount:0,
            rebirthThreeCount:0,
            
            achGameSpeed:1.0,
            achExpense:{ value:1, getEffect:function() { return this.value } },
            achHappiness:1.0,
            achEvilGain:1.0,
            achEssenceGain:1.0,
            achLifespan:1.0,
            
            stats:{
            
                startedDate:new Date().getTime(),
                
                rebirth1_longest:0,
                rebirth1_lastTime:new Date().getTime(),
                rebirth2_longest:0,
                rebirth2_lastTime:new Date().getTime(),
                rebirth3_longest:0,
                rebirth3_lastTime:new Date().getTime(),
            },
        }
    },
    
    computed: {
        
        years: function() { return Math.floor(this.days / 365) },
        
        daysProgress: function() { return Math.floor(100 * this.days / this.lifespan) },
        
        lifespan: function() {
        
            let astralBody = this.getSkill('astralBody')
            let lifeEssence = this.getSkill('lifeEssence')
            let ceaselessAbyss = this.getSkill('ceaselessAbyss')
            let cosmicLongevity = this.getSkill('cosmicLongevity')
            let higherDimensions = this.getSkill('higherDimensions')
            
            let ret = (365 * 70) * lifeEssence.getEffect() * astralBody.getEffect() * ceaselessAbyss.getEffect() * cosmicLongevity.getEffect() * higherDimensions.getEffect() * this.achLifespan
            return ret;
        },
        
        isAlive: function() {
        
            let ret = this.days < this.lifespan
            return ret
        },
        
        timeWarping: function() {
        
            let timeLoop = this.getSkill('timeLoop')
            let timeWarping = this.getSkill('timeWarping')
            let temporalDimension = this.getSkill('temporalDimension')
            
            let ret = timeWarping.getEffect() * temporalDimension.getEffect() * timeLoop.getEffect();
            return ret
        },
            
        gameSpeed: function() {
        
            let timeLoop = this.getSkill('timeLoop')
            let timeWarping = this.getSkill('timeWarping')
            let temporalDimension = this.getSkill('temporalDimension')
                        
            let timeWarpingSpeed = this.timeWarpingEnabled ? timeWarping.getEffect() * temporalDimension.getEffect() * timeLoop.getEffect() : 1
            
            let ret = 4 * +!this.paused * +this.isAlive * timeWarpingSpeed * this.achGameSpeed
            return ret
        },

        happiness: function() {
        
            let mindSeize = this.getSkill('mindSeize')
            let meditation = this.getSkill('meditation')

            let butler = this.getArtefact('butler')
            let multiverseFragment = this.getArtefact('multiverseFragment')
            
            let ret = meditation.getEffect() * butler.getEffect() / mindSeize.getEffect() * multiverseFragment.getEffect() * this.currentProperty.getEffect() * this.achHappiness
            return ret;
        },
        
        totalIncome: function() {
            
            let ret = this.currentJob.getIncome()
            return ret
        },
        
        totalExpense: function() {
            
            let ret = this.currentProperty.getExpense()
            this.artefacts.forEach(artefact => { if (artefact.activated == true) ret += artefact.getExpense() })
            return ret
        },
        
        net: function() {
        
            let ret = this.totalIncome - this.totalExpense
            return ret
        },
       
        evilGain: function() {
        
            let yinYang = this.getSkill('yinYang')
            let evilControl = this.getSkill('evilControl')
            let absoluteWish = this.getSkill('absoluteWish')
            let voidEmbodiment = this.getSkill('voidEmbodiment')
            let bloodMeditation = this.getSkill('bloodMeditation')
            
            let ret = evilControl.getEffect() * bloodMeditation.getEffect() * absoluteWish.getEffect() * voidEmbodiment.getEffect() * yinYang.getEffect() * this.achEvilGain
            return ret
        },
        
        essenceGain: function() {
        
            let yinYang = this.getSkill('yinYang')
            let essenceCollector = this.getSkill('essenceCollector')
            
            let ret = yinYang.getEffect() * essenceCollector.getEffect() * this.achEssenceGain
            return ret
        },
        
        activeArtefactCount() {
            
            let ret = 0
            this.artefacts.forEach(artefact => { if (artefact.activated == true) ret += 1 })
            return ret
        },

		language: {
			get: function() {
				return this.$i18n.locale;
			},
			set: function(val) {
				this.$i18n.locale = val;

				localStorage.setItem(this.localStorageName + "_language", this.language)
			},
		},
    },
    
    methods: {
    
        init() {

            jobData.forEach(data => {
                
                let job = new Job(data)
                this.jobs.push(job)
            })
            
            skillData.forEach(data => {
                
                let skill = new Skill(data)
                this.skills.push(skill)
            })
            
            propertyData.forEach(data => {
                
                let property = new Property(data)
                this.properties.push(property)
            })
            
            artefactData.forEach(data => {
                
                let artefact = new Artefact(data)
                this.artefacts.push(artefact)
            })
            
            achievementData.forEach(data => {
                
                let achievement = new Achievement(data)
                this.achievements.push(achievement)
            })
            
            this.jobs.forEach(job => {
            
                job.gainMods.push(this.getSkill('productivity'))
                job.gainMods.push(this.getSkill('darkInfluence'))
                job.gainMods.push(this.getSkill('demonTraining'))
                job.gainMods.push(this.getSkill('darkKnowledge'))
                job.gainMods.push(this.getSkill('voidInfluence'))
                job.gainMods.push(this.getSkill('parallelUniverse'))
                
                job.gainMods.push(this.getArtefact('personalSquire'))
                
                job.incomeMods.push(this.getSkill('demonsWealth'))
                
                if (job.cat == 'military') {

                    job.gainMods.push(this.getSkill('battleTactics'))
                    
                    job.gainMods.push(this.getArtefact('steelLongsword'))
                    
                    job.incomeMods.push(this.getSkill('strength'))
                    
                } else if (job.cat == 'arcane') {
                    
                    job.gainMods.push(this.getSkill('manaControl'))
                
                    job.incomeMods.push(this.getSkill('allSeeingEye'))	
                    
                } else if (job.cat == 'void') {
                
                    job.gainMods.push(this.getSkill('voidAmplification'))
                    
                    job.gainMods.push(this.getArtefact('voidArmor'))
                    job.gainMods.push(this.getArtefact('voidDust'))
                    
                } else if (job.cat == 'galactic') {
                
                    job.gainMods.push(this.getSkill('epiphany'))
                    
                    job.gainMods.push(this.getArtefact('celestialRobe'))
                }
            })

            this.skills.forEach(skill => {
            
                skill.gainMods.push(this.getSkill('concentration'))
                skill.gainMods.push(this.getSkill('voidSymbiosis'))
                skill.gainMods.push(this.getSkill('darkInfluence'))
                skill.gainMods.push(this.getSkill('demonTraining'))
                skill.gainMods.push(this.getSkill('voidInfluence'))
                skill.gainMods.push(this.getSkill('evilIncarnate'))
                skill.gainMods.push(this.getSkill('parallelUniverse'))
                
                skill.gainMods.push(this.getArtefact('book'))
                skill.gainMods.push(this.getArtefact('studyDesk'))
                skill.gainMods.push(this.getArtefact('library'))
                skill.gainMods.push(this.getArtefact('voidBlade'))
                skill.gainMods.push(this.getArtefact('universeFragment'))
                
                if (skill.id == 'strength') {
                
                    skill.gainMods.push(this.getSkill('muscleMemory'))
                    
                    skill.gainMods.push(this.getArtefact('dumbbells'))
                    
                } else if (skill.cat == 'fundamental') {
                
                    skill.gainMods.push(this.getArtefact('mindsEye'))
                    
                } else if (skill.cat == 'magic') {
                
                    skill.gainMods.push(this.getArtefact('sapphireCharm'))
                    skill.gainMods.push(this.getArtefact('observatory'))
                    
                } else if (skill.cat == 'manipulation') {
                
                    skill.gainMods.push(this.getArtefact('voidNecklace'))
                    skill.gainMods.push(this.getArtefact('voidOrb'))
                }
            })

            this.properties.forEach(property => {
            
                property.expenseMods.push(this.getSkill('bargaining'))
                property.expenseMods.push(this.getSkill('brainwashing'))
                property.expenseMods.push(this.getSkill('abyssManipulation'))
                property.expenseMods.push(this.getSkill('galacticCommand'))
                property.expenseMods.push(this.getSkill('intimidation'))
                
                property.expenseMods.push(this.achExpense)
            })

            this.artefacts.forEach(artefact => {
            
                artefact.expenseMods.push(this.getSkill('bargaining'))
                artefact.expenseMods.push(this.getSkill('brainwashing'))
                artefact.expenseMods.push(this.getSkill('abyssManipulation'))
                artefact.expenseMods.push(this.getSkill('galacticCommand'))
                artefact.expenseMods.push(this.getSkill('intimidation'))
                
                artefact.expenseMods.push(this.achExpense)
            })
            
            this.days = this.startingDays
            
            this.setCurrentJob('beggar')
            this.setCurrentSkill('concentration')            
            this.setCurrentProperty('homeless')
        },
        
        load() {
            
            let loadeddata = localStorage.getItem(this.localStorageName)
            if (loadeddata && loadeddata !== null && loadeddata.length % 4 == 0) {
                
                let text = LZString.decompressFromBase64(loadeddata)
                if (!text) return console.warn('Load failed')
                loadeddata = JSON.parse(text)
                
                // this.locale = loadeddata.locale || this.locale
                if (this.offlineGainEnabled) this.lastUpdateTimeMs = loadeddata.lastUpdateTimeMs || this.lastUpdateTimeMs
                
                this.currentPage = loadeddata.currentPage || this.currentPage
                
                this.days = loadeddata.days || this.days
                this.coins = loadeddata.coins || this.coins
                this.evils = loadeddata.evils || this.evils
                this.essences = loadeddata.essences || this.essences
                this.pauseDelay = loadeddata.pauseDelay || this.pauseDelay
                this.clickCount = loadeddata.clickCount || this.clickCount
                
                this.paused = loadeddata.paused || this.paused
                this.autoJobEnabled = loadeddata.autoJobEnabled || this.autoJobEnabled
                this.autoJobCatEnabled = loadeddata.autoJobCatEnabled || this.autoJobCatEnabled
                this.autoSkillEnabled = loadeddata.autoSkillEnabled || this.autoSkillEnabled
                this.autoPauseEnabled = loadeddata.autoPauseEnabled || this.autoPauseEnabled
                this.autoShopEnabled = loadeddata.autoShopEnabled || this.autoShopEnabled
                this.timeWarpingEnabled = loadeddata.timeWarpingEnabled || this.timeWarpingEnabled
                
                this.rebirthOneCount = loadeddata.rebirthOneCount || this.rebirthOneCount
                this.rebirthTwoCount = loadeddata.rebirthTwoCount || this.rebirthTwoCount
                this.rebirthThreeCount = loadeddata.rebirthThreeCount || this.rebirthThreeCount
                
                if (loadeddata.stats) {
                    
                    this.stats.startedDate = loadeddata.stats.startedDate || this.stats.startedDate
                    
                    this.stats.rebirth1_longest = loadeddata.stats.rebirth1_longest || this.stats.rebirth1_longest
                    this.stats.rebirth1_lastTime = loadeddata.stats.rebirth1_lastTime || this.stats.rebirth1_lastTime
                    this.stats.rebirth2_longest = loadeddata.stats.rebirth2_longest || this.stats.rebirth2_longest
                    this.stats.rebirth2_lastTime = loadeddata.stats.rebirth2_lastTime || this.stats.rebirth2_lastTime
                    this.stats.rebirth3_longest = loadeddata.stats.rebirth3_longest || this.stats.rebirth3_longest
                    this.stats.rebirth3_lastTime = loadeddata.stats.rebirth3_lastTime || this.stats.rebirth3_lastTime
                }
                
                loadeddata.jobs.forEach(data => {
                
                    let job = this.getJob(data.id)
                    if (job) {
                    
                        job.level = data.level || 0
                        job.current = data.current || 0
                        job.bonusLevel = data.bonusLevel || 0
						job.excludeLevel = data.excludeLevel === undefined ? -1 : data.excludeLevel
                    }
                })
                
                loadeddata.skills.forEach(data => {
                
                    let skill = this.getSkill(data.id)
                    if (skill) {
                    
                        skill.level = data.level || 0
                        skill.current = data.current || 0
                        skill.excluded = data.excluded || false
                        skill.excludeLevel = data.excludeLevel === undefined ? -1 : data.excludeLevel
                        skill.bonusLevel = data.bonusLevel || 0
                    }
                })
                
                loadeddata.properties.forEach(data => {
                
                    let property = this.getProperty(data.id)
                    if (property) {
                    
                        property.activated = data.activated || false
                    }
                })
                
                loadeddata.artefacts.forEach(data => {
                
                    let artefact = this.getArtefact(data.id)
                    if (artefact) {
                    
                        artefact.activated = data.activated || false
                    }
                })
                
                if (loadeddata.achievements) {
                    loadeddata.achievements.forEach(data => {
                    
                        let achievement = this.getAchievement(data.id)
                        if (achievement) {
                        
                            achievement.done = data.done || false
                            if (achievement.done == true && achievement.apply != null) achievement.apply(this)
                        }
                    })
                }

                let currentJobId = loadeddata.currentJobId || this.currentJob.id
                this.setCurrentJob(currentJobId)
                
                let currentSkillId = loadeddata.currentSkillId || this.currentSkill.id
                this.setCurrentSkill(currentSkillId)
                
                let currentPropertyId = loadeddata.currentPropertyId || this.currentProperty.id
                this.setCurrentProperty(currentPropertyId)
            }
        },
        
        save() {
            
            let saveddata = {
            
                locale:this.locale,
                lastUpdateTimeMs:this.lastUpdateTimeMs,
                
                currentPage:this.currentPage,
                
                days:this.days,
                coins:this.coins,
                evils:this.evils,
                essences:this.essences,
                pauseDelay:this.pauseDelay,
                clickCount:this.clickCount,
                
                paused:this.paused,
                autoJobEnabled:this.autoJobEnabled,
                autoJobCatEnabled:this.autoJobCatEnabled,
                autoSkillEnabled:this.autoSkillEnabled,
                autoPauseEnabled:this.autoPauseEnabled,
                autoShopEnabled:this.autoShopEnabled,
                timeWarpingEnabled:this.timeWarpingEnabled,
                
                rebirthOneCount:this.rebirthOneCount,
                rebirthTwoCount:this.rebirthTwoCount,
                rebirthThreeCount:this.rebirthThreeCount,
                
                stats:this.stats,
                
                jobs:[],
                skills:[],
                properties:[],
                artefacts:[],
                achievements:[],
                
                currentJobId:this.currentJob.id,
                currentSkillId:this.currentSkill.id,
                currentPropertyId:this.currentProperty.id,
            }
            
            this.jobs.forEach(job => {
            
                let temp = {
                    id:job.id,
                    level:job.level,
                    current:job.current,
                    bonusLevel:job.bonusLevel,
                    excludeLevel:job.excludeLevel,
                }
                
                saveddata.jobs.push(temp)
            })
            
            this.skills.forEach(skill => {
            
                let temp = {
                    id:skill.id,
                    level:skill.level,
                    current:skill.current,
                    excluded:skill.excluded,
                    excludeLevel:skill.excludeLevel,
                    bonusLevel:skill.bonusLevel,
                }
                
                saveddata.skills.push(temp)
            })
            
            this.properties.forEach(property => {
            
                let temp = {
                    id:property.id,
                    activated:property.activated,
                }
                
                saveddata.properties.push(temp)
            })
            
            this.artefacts.forEach(artefact => {
            
                let temp = {
                    id:artefact.id,
                    activated:artefact.activated,
                }
                
                saveddata.artefacts.push(temp)
            })
            
            this.achievements.forEach(achievement => {
            
                let temp = {
                    id:achievement.id,
                    done:achievement.done,
                }
                
                saveddata.achievements.push(temp)
            })
            
            let text = JSON.stringify(saveddata)
            let compressed = LZString.compressToBase64(text)
            localStorage.setItem(this.localStorageName, compressed)
        },
        
        start() {
            
            this.rafHandle = requestAnimationFrame(this.update)
            
            this.init()
            this.load()
            this.update()
            
            this.frameDeltaMs = 0
            
            this.saveInterval = setInterval(() => { this.save() }, this.autoSaveDelay)
            
            this.started = true
        },
        
        update() {
            
            this.rafHandle = requestAnimationFrame(this.update)
            
            let currentTime = new Date().getTime()
            this.frameDeltaMs += currentTime - this.lastFrameTimeMs
            this.lastFrameTimeMs = currentTime
                        
            if (this.frameDeltaMs < 1000 / this.fps) return
            this.frameDeltaMs = this.frameDeltaMs - (Math.floor(this.frameDeltaMs / (1000 / this.fps)) * (1000 / this.fps))
            
            let updateDeltaMs = currentTime - this.lastUpdateTimeMs
            this.lastUpdateTimeMs = currentTime
            
            let tickTimeMs = 1000 / this.fps
            let tickCount = Math.min(Math.floor(updateDeltaMs / tickTimeMs), this.fps * 1800)
            
			let tickCountMax = 100
			let tickMuti = 1;
			if (tickCount > tickCountMax) {
				tickMuti = Math.round(tickCount / tickCountMax);
				tickCount = tickCountMax;
			}
            for (let i = 0; i < tickCount; i++) {
                let gainDays = this.gameSpeed / this.fps * tickMuti;
                this.days += gainDays
                
                if ((this.days - gainDays) < (this.pauseDelay * 365) && this.days > (this.pauseDelay * 365) && this.autoPauseEnabled == true) this.paused = true

                if (this.autoJobEnabled) {
					let targetLeveljob = this.jobs.filter(job => job.unlocked == true && (this.autoJobCatEnabled || job.cat == this.currentJob.cat)).find(job => job._excludeLevel >= 0 && job.level < job._excludeLevel);
					if (targetLeveljob) {
						this.currentJob = targetLeveljob;
					} else {
						let jobs = this.jobs.filter(job => job.unlocked == true && (this.autoJobCatEnabled || job.cat == this.currentJob.cat)).reverse();
						if (jobs[0] && jobs[0].id != this.currentJob.id) this.currentJob = jobs[0];

						// let index = this.jobs.findIndex(job => job.id == this.currentJob.id)                    
						// let tempItem = this.jobs[index + 1]
						// if (tempItem && tempItem.cat == this.currentJob.cat && tempItem.unlocked == true) this.currentJob = tempItem;
					}
                }
                
                if (this.autoSkillEnabled) {
					this.skills.forEach(skill => {
						if (skill._excludeLevel >= 0) {
							if (skill.level >= skill._excludeLevel) {
								skill.excluded = true;
							} else {
								skill.excluded = false;
							}
						}
					});
                
                    let skills = this.skills.filter(skill => skill.unlocked == true && skill.excluded == false)
                    skills.sort((sk1, sk2) => { return (sk1.getMax() / this.getTaskGain(sk1)) - (sk2.getMax() / this.getTaskGain(sk2)) })
                    if (skills[0] && skills[0].id != this.currentSkill.id) this.currentSkill = skills[0]
                }

                if (this.autoShopEnabled) {
					let realNet = this.totalIncome;
					let properties = this.properties.filter(property => property.unlocked && this.totalIncome - property.getExpense() >= 0).reverse();
					if (properties[0] && properties[0].id != this.currentProperty.id) this.setCurrentProperty(properties[0].id);
					if (properties[0]) {
						realNet -= properties[0].getExpense();
					}

					this.artefacts.forEach(artefact => {
						if (artefact.unlocked && realNet - artefact.getExpense() >= 0) {
							if (!artefact.activated) {
								artefact.activated = true;
							}
							realNet -= artefact.getExpense();
						} else {
							if (artefact.activated) {
								artefact.activated = false;
							}
						}
					})
                }

                let gainJob = this.getTaskGain(this.currentJob) * tickMuti;
                this.currentJob.progress(gainJob * this.gameSpeed / this.fps)
                
                let gainCoins = this.net * gainDays
                this.coins += gainCoins
                
                if (this.coins <= 0) {
                
                    this.coins = 0
                    this.setCurrentProperty('homeless')
                    
                    this.artefacts.forEach(artefact => { artefact.activated = false })
                }
                
                let gainSkill = this.getTaskGain(this.currentSkill) * tickMuti;
                this.currentSkill.progress(gainSkill * this.gameSpeed / this.fps)
                
                this.jobs.forEach(job => { if (job.unlocked == false) job.unlocked = this.isUnlocked(job) })
                this.jobs.forEach(job => { if (job.visible == false) job.visible = this.isVisible(job) })

                this.skills.forEach(skill => { if (skill.unlocked == false) skill.unlocked = this.isUnlocked(skill) })
                this.skills.forEach(skill => { if (skill.visible == false) skill.visible = this.isVisible(skill) })

                this.properties.forEach(property => { if (property.unlocked == false) property.unlocked = this.isUnlocked(property) })

                this.artefacts.forEach(artefact => { if (artefact.unlocked == false) artefact.unlocked = this.isUnlocked(artefact) })
                
                this.achievements.forEach(achievement => {
                    if (achievement.done == false) {
                        if (achievement.check(this) == true) {
                            achievement.done = true
                            if (achievement.apply != null) achievement.apply(this)
                            this.showToastAchievement(achievement)
                        }
                    }
                })
            }
        },
        
        //-----
        
        getTask(taskId) {
        
            let ret = this.jobs.find(job => job.id == taskId)
            if (ret == null) ret = this.skills.find(skill => skill.id == taskId)
            if (ret == null) console.error(taskId)
            return ret
        },
        
        getJob(jobId) {
        
            let ret = this.jobs.find(job => job.id == jobId)
            if (ret == null) console.error(jobId)
            return ret
        },

        getSkill(skillId) {
        
            let ret = this.skills.find(skill => skill.id == skillId)
            if (ret == null) console.error(skillId)
            return ret
        },
        
        getItem(itemId) {
        
            let ret = this.properties.find(property => property.id == itemId)
            if (ret == null) ret = this.artefacts.find(artefact => artefact.id == itemId)
            if (ret == null) console.error(itemId)
            return ret
        },

        getProperty(propertyId) {
        
            let ret = this.properties.find(property => property.id == propertyId)
            if (ret == null) console.error(propertyId)
            return ret
        },

        getArtefact(artefactId) {
        
            let ret = this.artefacts.find(artefact => artefact.id == artefactId)
            if (ret == null) console.error(artefactId)
            return ret
        },

        getAchievement(achievementId) {
        
            let ret = this.achievements.find(achievement => achievement.id == achievementId)
            if (ret == null) console.error(achievementId)
            return ret
        },
        
        getTaskGain(task) {
            
            let ret = task.getGain()
            ret *= this.happiness
            
            if (task.cat == 'dark') ret *= 1 + this.evils
            else if (task.cat == 'almightiness') ret *= 1 + this.essences
            
            return ret
        },
        
        isJobActive(jobId) { return jobId == this.currentJob.id },

        isSkillActive(skillId) { return skillId == this.currentSkill.id },
        
        isUnlocked(item) {
            if (item.coinReq > 0) return item.coinReq > this.coins ? false : true
            if (item.evilReq > 0) return item.evilReq > this.evils ? false : true
            if (item.yearReq > 0) return item.yearReq > this.years ? false : true
            if (item.essenceReq > 0) return item.essenceReq > this.essences ? false : true
            
            let ret = true
            if (item.reqs) {
                item.reqs.forEach(req => {
                    
                    let reqItem = this.getTask(req.id)
                    if (reqItem.level < req.level) ret = false
                })
            }
            
            return ret
        },
        
        isVisible(item) {
            
            // if (item.coinReq > 0) return item.coinReq > this.coins ? false : true
            // if (item.evilReq > 0) return item.evilReq > this.evils ? false : true
            // if (item.yearReq > 0) return item.yearReq > this.years ? false : true
            // if (item.essenceReq > 0) return item.essenceReq > this.essences ? false : true
            
            let ret = true
            if (item.reqs) {
                item.reqs.forEach(req => {
                    
                    let reqItem = this.getTask(req.id)                    
                    if (reqItem.unlocked == false) ret = false
                })
            }

			if (item.evilReq > 0 || item.essenceReq > 0) {
				if (item instanceof Job) {
					let firstLocked = this.jobs.find(job => job.cat === item.cat && job.unlocked === false);
					if (firstLocked !== item) {
						ret = false
					}
				} else if (item instanceof Skill) {
					let firstLocked = this.skills.find(skill => skill.cat === item.cat && skill.unlocked === false);
					if (firstLocked !== item) {
						ret = false
					}
				}
			}
            
            return ret
        },
        
        //-----
        
        showToastAchievement(achievement) {
        
            this.toastAchievement = achievement
            setTimeout(() => { this.toastAchievement = null }, 3000)
        },
        
        setCurrentPage(pageId) { this.currentPage = pageId },
        
        togglePause() { this.paused = !this.paused },
        
        setCurrentJob(jobId) { this.currentJob = this.getJob(jobId) },
        
        setCurrentSkill(skillId) { this.currentSkill = this.getSkill(skillId) },
        
        setCurrentProperty(propertyId) {
        
            if (this.currentProperty != null) this.currentProperty.activated = false
            
            this.currentProperty = this.getProperty(propertyId)
            this.currentProperty.activated = true
        },
        
        toggleArtefact(artefactId) {
        
            let artefact = this.getArtefact(artefactId)
            artefact.activated = !artefact.activated
        },
        
        toggleTimeWarping() { this.timeWarpingEnabled = !this.timeWarpingEnabled },
        
        toggleAutoJob() { this.autoJobEnabled = !this.autoJobEnabled },

        toggleAutoJobCat() { this.autoJobCatEnabled = !this.autoJobCatEnabled },

        toggleAutoSkill() { this.autoSkillEnabled = !this.autoSkillEnabled },

        toggleAutoPause() { this.autoPauseEnabled = !this.autoPauseEnabled },

        toggleAutoShop() { this.autoShopEnabled = !this.autoShopEnabled },

        toggleOfflineGain() { this.offlineGainEnabled = !this.offlineGainEnabled; localStorage.setItem(this.localStorageName + "_offlineGainEnabled", this.offlineGainEnabled) },

        //-----
        
        rebirthOne() {
            
            this.rebirthOneCount += 1
            
            let temp = (new Date().getTime() - this.stats.rebirth1_lastTime) / 1000
            if (temp > this.stats.rebirth1_longest) this.stats.rebirth1_longest = temp
            
            this.stats.rebirth1_lastTime = new Date().getTime()
             
            this.reset()
        },
        
        rebirthTwo() {
            
            this.evils += this.evilGain
            
            this.rebirthTwoCount += 1
            
            let temp = (new Date().getTime() - this.stats.rebirth2_lastTime) / 1000
            if (temp > this.stats.rebirth2_longest) this.stats.rebirth2_longest = temp
            
            this.stats.rebirth2_lastTime = new Date().getTime()
            
            this.reset()
            
            this.jobs.forEach(job => { job.bonusLevel = 0 })
            this.skills.forEach(skill => { skill.bonusLevel = 0 })
        },
        
        rebirthThree() {
            
            this.evils = 0
            this.essences += this.essenceGain
            
            let cosmicRecollection = this.getSkill('cosmicRecollection')
            let recallEffect = cosmicRecollection.getEffect()
            
            this.rebirthThreeCount += 1
            
            let temp = (new Date().getTime() - this.stats.rebirth3_lastTime) / 1000
            if (temp > this.stats.rebirth3_longest) this.stats.rebirth3_longest = temp
            
            this.stats.rebirth3_lastTime = new Date().getTime()
            
            this.reset()
            
            this.jobs.forEach(job => { job.bonusLevel = Math.floor(recallEffect * job.bonusLevel) })
            this.skills.forEach(skill => { skill.bonusLevel = Math.floor(recallEffect * skill.bonusLevel) })
        },
        
        reset() {
        
            this.currentPage = 'jobs'
            
            this.days = this.startingDays
            this.coins = 0
            
            this.jobs.forEach(job => {
                
                if (job.level > job.bonusLevel) job.bonusLevel = job.level
                
                job.level = 0
                job.current = 0
                job.visible = false
                job.unlocked = false
            })
            
            this.skills.forEach(skill => {
                
                if (skill.level > skill.bonusLevel) skill.bonusLevel = skill.level
                
                skill.level = 0
                skill.current = 0
                skill.visible = false
                skill.unlocked = false
                skill.excluded = false
            })
            
            this.properties.forEach(property => {
                
                property.unlocked = false
                property.activated = false
            })
            
            this.artefacts.forEach(artefact => {
                
                artefact.unlocked = false
                artefact.activated = false
            })
            
            this.setCurrentJob('beggar')
            this.setCurrentSkill('concentration')            
            this.setCurrentProperty('homeless')
        },
        
        //-----
                
        convertPK2Name(name) {
        
            let ret = name.replace(/\s/g,'')
            ret = ret.replace(/'/g,'')
            ret = ret.charAt(0).toLowerCase() + ret.slice(1)
            if (ret == 'veteranfootman') ret = 'veteranFootman'
            return ret
        },
        
        importPK2GameData() {
        
            if (!this.importExportData || !this.importExportData.trim()) return console.warn('No data to import')
            
            let data = JSON.parse(window.atob(this.importExportData))
            console.log(data)
            
            this.days = data.days
            this.coins = data.coins
            this.evils = data.evil
            this.essences = data.essence
            
            this.paused = data.paused
            
            for (let key in data.taskData) {
                let task = data.taskData[key]
            
                let item = this.getTask(this.convertPK2Name(task.name))
                if (item) {
                
                    item.level = task.level || 0
                    item.current = task.xp || 0
                    item.bonusLevel = task.maxLevel || 0
                    item.unlocked = false
                    
                    if ('cat' in item) item.visible = false
                    if ('excluded' in item) item.excluded = false
                }
            }
            
            this.properties.forEach(property => {
                
                property.unlocked = false
                property.activated = false
            })
            
            this.artefacts.forEach(artefact => {
                
                artefact.unlocked = false
                artefact.activated = false
            })
                        
            this.setCurrentJob(this.convertPK2Name(data.currentJob.name))
            this.setCurrentSkill(this.convertPK2Name(data.currentSkill.name))
            this.setCurrentProperty(this.convertPK2Name(data.currentProperty.name))
            
            data.currentMisc.forEach(misc => this.getArtefact(this.convertPK2Name(misc.name)).activated = true)
            
            this.rebirthOneCount = data.rebirthOneCount
            this.rebirthTwoCount = data.rebirthTwoCount
            this.rebirthThreeCount = data.rebirthThreeCount
            
            this.jobs.forEach(job => { if (job.unlocked == false) job.unlocked = this.isUnlocked(job) })
            this.jobs.forEach(job => { if (job.visible == false) job.visible = this.isVisible(job) })

            this.skills.forEach(skill => { if (skill.unlocked == false) skill.unlocked = this.isUnlocked(skill) })
            this.skills.forEach(skill => { if (skill.visible == false) skill.visible = this.isVisible(skill) })

            this.properties.forEach(property => { if (property.unlocked == false) property.unlocked = this.isUnlocked(property) })

            this.artefacts.forEach(artefact => { if (artefact.unlocked == false) artefact.unlocked = this.isUnlocked(artefact) })
            
            this.save()
            
            window.location.reload()
        },
        
        importGameData() {
        
            if (!this.importExportData || !this.importExportData.trim()) return console.warn('No data to import')
            if (this.importExportData.length % 4 !== 0) return console.warn('Data corrupted')
            
            localStorage.setItem(this.localStorageName, this.importExportData)

            window.location.reload()
        },
        
        exportGameData() {
        
            let text = localStorage.getItem(this.localStorageName)
            this.importExportData = text
        },
        
        resetGameData() {
        
            localStorage.removeItem(this.localStorageName)
            
            window.location.reload()
        },
    },
    
    created() {
    
        window.addEventListener('click', (e) => {
        
            this.clickCount += 1
        })
        
        window.addEventListener('keypress', (e) => {
            
            if (e.code == 'Space') this.togglePause()
            else if (e.code == 'KeyP') this.toggleAutoJob()
            else if (e.code == 'KeyS') this.toggleAutoSkill()
            else if (e.code == 'KeyW') this.toggleTimeWarping()
        }) 
        
		this.language = localStorage.getItem(this.localStorageName + "_language") || "cn";
		this.offlineGainEnabled = (localStorage.getItem(this.localStorageName + "_offlineGainEnabled") || "true") !== "false";
        setTimeout(() => {
			this.start();
		}, this.minLoadingTimerMS)
    },
    
    mounted() {
        window.game = this;
    },
    beforeUnmount() {
        
        this.save()
        
        clearInterval(this.saveInterval)
        cancelAnimationFrame(this.rafHandle)
    },
}
</script>
