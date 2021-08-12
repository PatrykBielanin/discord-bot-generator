<template>
    <div>
        <a class="close" @click.prevent="$emit('close')" href="#">X</a>
        <p>Edit {{name}}</p>

        <form @submit.prevent>
            <label>Command name</label>
            <input type="text" :placeholder="name" v-model="newName" required>

            <label>Bot response</label>
            <input type="text" :placeholder="response" v-model="newResponse" required>

            <button>CREATE</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "editsimpleCommandModal",
    props: ['name', 'response'],
    data(){
        return{
            newName: '',
            newResponse: ''
        }
    }
}
</script>
