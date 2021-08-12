<template>
    <div class="commands">
        <h1>COMMANDS</h1>
        <p>List of commands available in your bot (use with prefix defined in config)</p>

        <CommandsCreate />
        <CommandsList />
    </div>
</template>

<script>
    import CommandsCreate from '@/components/pages/commands/components/CommandsCreate'
    import CommandsList from '@/components/pages/commands/components/CommandsList'
    export default {
        name: "Commands",
        components: {
            CommandsCreate,
            CommandsList
        },
        data(){
            return{
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '../assets/sass/views/commands.sass'
</style>
