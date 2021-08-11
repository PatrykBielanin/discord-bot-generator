<template>
    <div>
        <label>
            {{label}}
        </label>

        <input :type="type" :placeholder="placeholder" v-model="value" required>
    </div>
</template>

<script>
    export default {
        name: "ConfigItem",
        props: {
            type:{
                type: String,
                required: true
            },
            label:{
                type: String,
                required: true
            },
            placeholder:{
                type: String,
                required: true
            },
        },
        data(){
            return{
                value: ''
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '@/assets/sass/pages/configItem.sass'
</style>
