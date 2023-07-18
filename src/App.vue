<script setup>
import HelloWorld from "./components/HelloWorld.vue";

const inFocusfN = (e) => {
  console.log(e);
};
</script>

<template>
  <router-view></router-view>
  <HelloWorld msg="Vite + Vue" @inFocus="inFocusfN" />
</template>

<style scoped></style>
