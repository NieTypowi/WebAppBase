<template>
  <div class="flex flex-col justify-center items-center h-full p-5">
    <h1 class="text-4xl mb-5 text-white">Hello</h1>
    <form method="post" @submit.prevent="login" class="w-full max-w-md">
      <input
        v-model="username"
        type="mail"
        name="username"
        id="username"
        placeholder="Email"
        class="input-field"
        :class="{ 'border-red-500': !validateMail(username) && !username == '' }"
      />
      <input
        v-model="password"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        class="input-field"
        :class="{ 'border-red-500': !validatePass(password) && !password == '' }"
      />
      <button
        class="ml-auto block button-default text-white mb-5"
        :class="{ 'opacity-60 pointer-events-none': !validatePass(password) || !validateMail(username) }"
      >
        Login
      </button>
    </form>
    <p class="text-sm text-white">
      Dont have an account?
      <nuxt-link class="font-semibold underline" :to="'/register'">Sign up here</nuxt-link>
    </p>
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
      if (validatePass(this.password) && validateMail(this.username)) {
        console.log({ username: this.username, password: this.password });
        authStore()
          .login({ username: this.username, password: this.password })
          .then(() => this.$router.replace("/"));
      }
    },
    test() {
      jwtFetch("http://localhost:8080/events", "GET", {}, {}).then((r) => console.log(r));
    },
  },
};
</script>

<style scoped></style>
