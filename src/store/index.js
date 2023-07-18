import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 方式一
export const stores = defineStore("stores", {
  state: () => ({
    num: 0,
  }),
  getters: {
    double: (state) => state.num * 2,
  },
  actions: {
    increment() {
      this.num++;
    },
  },
});

// 方式二
export const authStore = defineStore("authStore", () => {
  const num = ref(0);
  const double = computed(() => num.value * 2);
  function increment() {
    num.value += 1;
  }
  return {
    num,
    double,
    increment,
  };
});
