<template>
    <div>
        <p
            v-for="i in typeOfCommands"
            :key="i.name"
            @click="$modal.show(i.modal)"
        >
            <span
                v-if="i.disabled"
                v-tooltip="'Not available'"
                style="color: lightgray"
            >
                {{i.name}}
                <span> preview</span>
            </span>

            <span
                v-else
                v-tooltip="'Click to create'"
            >
                {{i.name}}
                <span> preview</span>
            </span>

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
                        preview: "",
                        disabled: false
                    },
                    {
                        name: "Embed message",
                        modal: "embedCommandModal",
                        preview: "",
                        disabled: true
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '@/assets/sass/pages/commandsList.sass'
</style>
