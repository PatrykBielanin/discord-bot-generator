<template>
    <div>
        <p
            v-for="i in typeOfCommands"
            :key="i.name"
            @click="$modal.show(i.modal)"
        >
            >{{i.name}}
            <span>preview</span>
        </p>
    </div>
</template>

<script>
    import simpleCommandModal from '../modals/simpleCommandModal'
    export default {
        name: "CommandCreate",
        data(){
            return{
                typeOfCommands: [
                    {
                        name: "Simple text bot response",
                        modal: simpleCommandModal,
                        preview: ""
                    },
                    {
                        name: "Embed message",
                        modal: "embedCommandModal",
                        preview: ""
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '@/assets/sass/pages/commandsList.sass'
</style>
