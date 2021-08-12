<template>
  <div class="home">
    <HomeIntro msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HomeIntro from "@/components/pages/home/components/HomeIntro.vue";

export default {
  name: "Home",
  components: {
    HomeIntro,
  },
};
</script>
