<template>
    <div class="config">
        <h1>CONFIGURE BOT</h1>
        <p>Add required basic configuration to your bot | <small>it will be saved in package.json</small> </p>

        <form @submit.prevent>
            <ConfigItem
                v-for="config in configuration"
                :key="config.label"
                :type="config.type"
                :label="config.label"
                :placeholder="config.placeholder"
            />

            <button>SAVE</button>
        </form>

        <ConfigList />



    </div>
</template>

<script>
    import ConfigItem from '@/components/pages/config/components/ConfigItem'
    import ConfigList from '@/components/pages/config/components/ConfigList'

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
                        label: 'name',
                        placeholder: 'First bot'
                    },
                    {
                        type: 'text',
                        label: 'description',
                        placeholder: 'Pointless bot for discord'
                    },
                    {
                        type: 'text',
                        label: 'author',
                        placeholder: 'bielak'
                    },
                    {
                        type: 'text',
                        label: 'version',
                        placeholder: '1.0.0'
                    },
                    {
                        type: 'text',
                        label: 'token',
                        placeholder: 'ZXCVBN14AX5234ZXCV1'
                    },
                    {
                        type: 'text',
                        label: 'prefix',
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
