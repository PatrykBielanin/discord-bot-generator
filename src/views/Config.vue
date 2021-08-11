<template>
    <div class="config">
        <h1>CONFIGURE BOT</h1>
        <p>Add required basic configuration to your bot | <small>it will be saved in package.json</small> </p>

        <ConfigItem
            v-for="config in configuration"
            :key="config.label"
            :type="config.type"
            :label="config.label"
            :placeholder="config.placeholder"
        />

        <ConfigList />


        <button @submit.prevent>SAVE</button>
    </div>
</template>

<script>
    import ConfigItem from '@/components/pages/config/ConfigItem'
    import ConfigList from '@/components/pages/config/ConfigList'

    export default {
        name: "Config",
        components: {
            ConfigItem,
            ConfigList
        },
        data(){
            return{
                configuration: [
                    {
                        type: 'text',
                        label: 'Bot name',
                        placeholder: 'First bot'
                    },
                    {
                        type: 'text',
                        label: 'Description',
                        placeholder: 'Pointless bot for discord'
                    },
                    {
                        type: 'text',
                        label: 'Author',
                        placeholder: 'bielak'
                    },
                    {
                        type: 'text',
                        label: 'Version',
                        placeholder: '1.0.0'
                    },
                    {
                        type: 'text',
                        label: 'Token',
                        placeholder: 'ZXCVBN14AX5234ZXCV1'
                    },
                    {
                        type: 'text',
                        label: 'Prefix',
                        placeholder: '?'
                    },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '../assets/sass/views/config.sass'
</style>
