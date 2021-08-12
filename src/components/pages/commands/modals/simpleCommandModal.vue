<template>
    <div>
        <a class="close" @click.prevent="$emit('close')" href="#">X</a>
        <p>Create simple command that will display bot response</p>

        <form @submit.prevent="save(); $emit('close')">
            <label>Command name</label>
            <input type="text" placeholder="ping" v-model="name" required>

            <label>Bot response</label>
            <input type="text" placeholder="pong" v-model="response" required>

            <button>CREATE</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "simpleCommandModal",
    data(){
        return{
            name: '',
            response: ''
        }
    },
    methods:{
        ...mapActions({
            saveSimpleCommand: 'commands/saveSimpleCommand'
        }),

        save(){
            this.saveSimpleCommand({
                payload: {
                    type: 'simple',
                    name: this.name,
                    response: this.response
                }
            })
        }
    }
}
</script>
