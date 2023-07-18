<script setup>
import { ref } from "vue";

let mathArr = ref([]);
const mathFn = (n) => {
  console.log(666)
  let arr = [];
  while (arr.length < n) {
    let num = Math.floor(Math.random() * 80) + 1;
    if (arr.indexOf(num) === -1) {
      arr.push(num);
    }
  }
  arr.sort((a, b) => {
    return a - b;
  });
  mathArr.value.push(arr.toString())
};
</script>

<template>
  <h1>首页</h1>
  <!-- {{ mathArr.toString() }} -->
  <div v-for="item,index in mathArr" :key="index">
    <p>{{ item }}</p>
  </div>
  <el-button type="primary" @click="mathFn(10)">随机</el-button>
</template>

<style scoped></style>

<route>
  {
    name: 'home',
    meta: {
      demoactive: '123'
    }
  }
</route>
