<template>
    <div class="d-flex lh-1 font-monospace">
        <div v-if="value < 0">
            <small>-</small>
        </div>
        <div v-if="ruby != 0" class="ps-1 col-auto d-flex align-items-center">
            <FormatNumber :value="ruby" />
            <img src="~/assets/ui/ruby.png" width="12px" height="12px" style="margin-top:1px; margin-left:3px;" />
        </div>
        <div v-if="ruby != 0 || platinum != 0" class="ps-1 col-auto d-flex align-items-center">
            <span v-if="ruby == 0">{{ platinum.toLocaleString() }}</span>
            <span v-if="ruby != 0">{{ String(platinum).padStart(4, '0') }}</span>
            <img src="~/assets/ui/platinum.png" width="12px" height="12px" style="margin-top:1px; margin-left:3px;" />
        </div>
        <div v-if="ruby != 0 || platinum != 0 || gold != 0" class="ps-1 col-auto d-flex align-items-center">
            <span v-if="ruby == 0 && platinum == 0">{{ gold.toLocaleString() }}</span>
            <span v-if="ruby != 0 || platinum != 0">{{ String(gold).padStart(2, '0') }}</span>
            <img src="~/assets/ui/gold.png" width="12px" height="12px" style="margin-top:1px; margin-left:3px;" />
        </div>
        <div v-if="ruby == 0 && platinum == 0 && silver != 0" class="ps-1 col-auto d-flex align-items-center">
            {{ silver.toLocaleString() }}
            <img src="~/assets/ui/silver.png" width="12px" height="12px" style="margin-top:1px; margin-left:3px;" />
        </div>
        <div v-if="ruby == 0 && platinum == 0" class="ps-1 col-auto d-flex align-items-center">
            {{ coin.toLocaleString() }}
            <img src="~/assets/ui/bronze.png" width="12px" height="12px" style="margin-top:2px; margin-left:3px;" />
        </div>
    </div>
</template>

<script>
export default {

    props: [ 'value' ],
    
    computed: {
        
        ruby: function() { return Math.floor(Math.abs(this.value) / 10000000000) },

        platinum: function() { return Math.floor((Math.abs(this.value) / 1000000) % 10000) },

        gold: function() { return Math.floor((Math.abs(this.value) / 10000) % 100) },

        silver: function() { return Math.floor((Math.abs(this.value) / 100) % 100) },
        
        coin: function() { return Math.floor(Math.abs(this.value) % 100) },
    },
}
</script>