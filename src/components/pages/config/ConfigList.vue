<template>
    <div>
        <p>Current configuration of bot</p>
        <ul>
            <ConfigListItem option="Bot name:" value="Test"/>
        </ul>
    </div>
</template>

<script>
    import ConfigListItem from './ConfigListItem.vue'
    export default {
        name: "ConfigList",
        components:{
            ConfigListItem
        }
    }
</script>

<style lang="sass" scoped>
    @import '@/assets/sass/pages/configList.sass'
</style>
