<template>
    <div>
        <label>
            {{label[0].toUpperCase() + label.slice(1)}}
        </label>

        <input :type="type" :placeholder="placeholder" v-model="value" @change="save(label)" required>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name: "ConfigItem",
        data(){
            return{
                value: ''
            }
        },
        methods: {
            ...mapActions({
                saveOption: 'config/saveOption'
            }),

            save(label){
                this.saveOption({
                    payload: {
                        label,
                        value: this.value
                    }
                })
            }
        },
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
        }
    }
</script>

<style lang="sass" scoped>
    @import '@/assets/sass/pages/configItem.sass'
</style>
