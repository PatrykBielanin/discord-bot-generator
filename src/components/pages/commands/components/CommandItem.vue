<template>
    <li>
        {{name}}

        <i @click="$modal.show(editsimpleCommandModal, {name, response})">edit </i>
        <i>trash</i>
    </li>
</template>

<script>
    import editsimpleCommandModal from '../modals/editsimpleCommandModal'
    export default {
        name: "CommandsItem",
        props: ['name', 'type', 'response'],
        data(){
            return{
                editsimpleCommandModal
            }
        }
    }
</script>

<style lang="sass" scoped>
    // @import '@/assets/sass/pages/configList.sass'
</style>
