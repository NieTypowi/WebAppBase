<template>
  <div class="relative h-full">
    <div class="relative z-10 h-full flex flex-col pointer-events-none">
      <top-bar class="pointer-events-auto" />
      <div class="flex-grow flex justify-between max-w-full overflow-hidden pointer-events-none">
        <panel-main />
        <panel-stats />
      </div>
    </div>
    <map-component />
  </div>
</template>

<script>
import { authStore } from "~/store/auth";

export default {
  setup() {
    definePageMeta({
      title: "My home page",
    });
  },
  computed: {
    userData() {
      return authStore().getUser;
    },
  },
};
</script>
