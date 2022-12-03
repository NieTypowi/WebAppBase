<template>
  <div class="flex flex-col justify-center items-center h-full">
    <h1 class="text-4xl mb-5">Login</h1>
    <form method="post" @submit.prevent="login" class="w-full max-w-md">
      <input v-model="username" type="text" name="username" id="username" placeholder="User name" class="input-field" />
      <input v-model="password" type="text" name="password" id="password" placeholder="Password" class="input-field" />
      <button class="button-default">Login</button>
      <p v-if="message">{{ message }}</p>
    </form>
    <button class="button-default" @click="goToRegister()">register here</button>
   
  </div>
</template>

<script>
import { authStore } from "~/store/auth";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    message() {
      return authStore().getLoginRes;
    },
  },
  methods: {
    login() {
      if (this.username && this.password) {
        console.log({ username: this.username, password: this.password });
        authStore().login({ username: this.username, password: this.password })
        .then(() => this.$router.replace("/"));
      }
    },
    test(){
      jwtFetch("http://localhost:8080/events",'GET',{},{}).then(r => console.log(r))
    },
    goToRegister(){
      this.$router.replace("/register")
    }
  },
};
</script>

<style scoped>
.input-field {
  @apply w-full mb-5 text-2xl px-4 py-2 rounded-xl bg-white border border-teal-400 focus:border-teal-600 transition outline-none focus:outline-none;
}
</style>
