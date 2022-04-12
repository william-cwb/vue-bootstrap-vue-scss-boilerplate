<template>
  <blank-layout>
    <h1>LOGIN</h1>
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <b-button variant="primary">Primary</b-button>
  </blank-layout>
</template>
<script>
import BlankLayout from "@/layouts/BlankLayout.vue";

export default {
  name: "LoginView",
  components: { BlankLayout },
  data: () => ({}),
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>