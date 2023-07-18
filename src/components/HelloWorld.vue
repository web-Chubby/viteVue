<script setup>
import { storeToRefs } from "pinia";
import { authStore } from "../store/index";
import { ref } from "vue";
defineProps({
  msg: String,
});
const emit = defineEmits(["inFocus"]);
const store = authStore();
const { num } = storeToRefs(store);

const count = ref(0);
const dmeoFn = () => {
  store.increment();
};
const emitsFn = () => {
  emit("inFocus", 666);
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ num }}</h2>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="dmeoFn">count is {{ num }}</button>
    <el-button type="primary" @click="emitsFn">emits</el-button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
