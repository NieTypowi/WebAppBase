<template>
  <div class="flex gap-2 items-center justify-center text-white">
    <div>
      <input v-model="work" class="peer appearance-none hidden" type="checkbox" name="work" id="work" checked />
      <label
        for="work"
        class="block px-5 py-2 min-w-[96px] text-center peer-checked:bg-pink-main/40 border border-pink-main opacity-100 rounded-full transition duration-200 checked:text-white"
        >Work</label
      >
    </div>
    <div>
      <input v-model="life" class="peer appearance-none hidden" type="checkbox" name="life" id="life" checked />
      <label
        for="life"
        class="block px-5 py-2 min-w-[96px] text-center peer-checked:bg-blue-light/40 border border-blue-light rounded-full transition duration-200 checked:text-white"
        >Life</label
      >
    </div>
  </div>
</template>

<script>
import { dataStore } from "~/store/data";

export default {
  computed: {
    work: {
      set(value) {
        dataStore().setWorkFilter(value);
      },
    },
    life: {
      set(value) {
        dataStore().setLifeFilter(value);
      },
    },
  },
};
</script>
