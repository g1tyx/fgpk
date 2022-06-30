<template>
    <div class="row">
        <div class="col-auto ps-2">
            <img v-if="req.level > task.level" src="~/assets/ui/notReached.png" width="12px" />
            <img v-if="req.level <= task.level" src="~/assets/ui/reached.png" width="12px" />
        </div>
        <div class="col-auto">
            <span class="text-shadow" :class="{ 'text-light':req.level > task.level, 'text-success':req.level <= task.level }">{{ $t('name_' + task.id) }}</span>
			<i18n path="req_level" tag="small" :class="{ 'text-light':req.level > task.level, 'text-success':req.level <= task.level }" class="text-muted text-shadow">
				<span class="text-shadow" :class="{ 'text-light':req.level > task.level, 'text-success':req.level <= task.level }"><FormatNumber :value="req.level" /></span>
			</i18n>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'req', 'task' ],    
}
</script>