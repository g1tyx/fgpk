<template>
    <div class="row">
        <div class="col-auto ps-2">
            <img v-if="req > evils" src="~/assets/ui/notReached.png" width="12px" />
            <img v-if="req <= evils" src="~/assets/ui/reached.png" width="12px" />
        </div>
        <div class="col-auto">
            <span class="text-shadow" :class="{ 'text-light':req > evils, 'text-success':req <= evils }">{{ $t('left_evil') }}</span>
			<span class="text-shadow" :class="{ 'text-light':req > evils, 'text-success':req <= evils }"><FormatNumber :value="req" /></span>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'req', 'evils' ],    
}
</script>