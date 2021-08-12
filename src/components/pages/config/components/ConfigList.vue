<template>
    <div>
        <p>Current configuration of bot</p>
        <ul>
            <ConfigListItem
                v-for="(con, index) in config"
                :key="index"
                :option="index"
                :value="con"
            />
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ConfigListItem from './ConfigListItem.vue'
    export default {
        name: "ConfigList",
        components:{
            ConfigListItem
        },
        computed: {
            ...mapGetters({
                config: 'config/getConfig',
            })
        }
    }
</script>

<style lang="sass" scoped>
    @import '@/assets/sass/pages/configList.sass'
</style>
