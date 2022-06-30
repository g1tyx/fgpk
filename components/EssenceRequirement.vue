<template>
    <div class="row">
        <div class="col-auto ps-2">
            <img v-if="req > essences" src="~/assets/ui/notReached.png" width="12px" />
            <img v-if="req <= essences" src="~/assets/ui/reached.png" width="12px" />
        </div>
        <div class="col-auto">
            <span class="text-shadow" :class="{ 'text-light':req > essences, 'text-success':req <= essences }">{{ $t('left_essence') }}</span>
			<span class="text-shadow" :class="{ 'text-light':req > essences, 'text-success':req <= essences }"><FormatNumber :value="req" /></span>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'req', 'essences' ],    
}
</script>