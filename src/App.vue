<template>
  <div id="app">
    <div id="nav">
        <Navbar />
        <Sidebar />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/partials/Navbar'
  import Sidebar from './components/partials/Sidebar'
  export default {
      components:{
          Navbar,
          Sidebar
      }
  }
</script>

<style lang="scss">
  @import '@/assets/sass/global/vtooltip.sass';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
