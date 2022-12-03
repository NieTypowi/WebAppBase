<template>
  <div class="w-full md:border-0">
    <h2>My Account</h2>
    <p class="p-5 text-center text-base font-light">User data here</p>
  </div>
  <button class="button-default" @click="logout()">logout</button>
</template>

<script>
import { authStore } from "~/store/auth";
export default {
  methods: {
    logout(){
      authStore().logout();
      this.$router.replace("/login")
    }
  }
};
</script>

<style></style>
