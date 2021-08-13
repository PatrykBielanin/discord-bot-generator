<template>
    <div>
        <p>Commands: </p>
        <ul>
            <CommandItem
                v-for="(command, index) in commands"
                :key="command.name"
                :name="command.name"
                :type="command.type"
                :response="command.response"
                :index="index"
            />
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import CommandItem from './CommandItem'
    export default {
        name: "CommandsList",
        components:{
            CommandItem
        },
        computed: {
            ...mapGetters({
                commands: 'commands/getCommands',
            })
        }
    }
</script>

<style lang="sass" scoped>
    // @import '@/assets/sass/pages/configList.sass'
</style>
