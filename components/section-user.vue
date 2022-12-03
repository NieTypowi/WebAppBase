<template>
  <div class="w-full md:border-0">
    <h2>My Account</h2>
  </div>
  <button class="button-default mt-10" @click="logout()">logout</button>
</template>

<script>
import { authStore } from "~/store/auth";
export default {
  methods: {
    logout() {
      authStore().logout();
      this.$router.replace("/login");
    },
  },
};
</script>

<style></style>
