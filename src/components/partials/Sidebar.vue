<template>
    <div class="sidebar">
        <ul>
           <li class="page"><router-link to="/#">Home</router-link></li>
           <li class="page"><router-link to="/#">How to setup</router-link></li>
           <li class="page"><router-link to="/#">How to host</router-link></li>
           <li class="page"><router-link to="/config">Config</router-link></li>
           <li class="page"><router-link to="/commands">Commands</router-link></li>
           <li class="page"><router-link to="/#">Generate</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style lang="sass" scoped>
    @import '../../assets/sass/partials/sidebar.sass'
</style>
