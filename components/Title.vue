<template>
    <div>
        <div class="text-center">
            <img :src="require(`~/assets/ui_${language}/${image}.png`)" width="200px" />
        </div>
        <div class="container pt-0 pb-3">
            <div class="row g-2">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'image' ],    
	computed: {
		language() {
			return this.$i18n.locale;
		},
	}
}
</script>