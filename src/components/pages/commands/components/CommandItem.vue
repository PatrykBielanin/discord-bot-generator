<template>
    <li>
        {{name}}

        <i @click="$modal.show(editsimpleCommandModal, {name, response})">edit </i>
        <i @click="del(name)">trash</i>
    </li>
</template>

<script>
    import editsimpleCommandModal from '../modals/editsimpleCommandModal'
    import { mapActions } from 'vuex';

    export default {
        name: "CommandsItem",
        props: ['name', 'type', 'response', 'index'],
        data(){
            return{
                editsimpleCommandModal
            }
        },
         methods:{
            ...mapActions({
                deleteCommand: 'commands/deleteCommand'
            }),
            del(name){
                this.deleteCommand({payload:{ name }})
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import '@/assets/sass/pages/commandItem.sass'
</style>
