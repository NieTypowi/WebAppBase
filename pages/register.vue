<template>
  <div class="flex flex-col justify-center items-center min-h-screen p-5">
    <h1 class="text-4xl mb-5 text-white">Register</h1>
    <form method="post" @submit.prevent="register" class="w-full max-w-md">
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
        class="input-field !mb-2"
        :class="{ 'border-red-500': !validatePass(password) && !password == '' }"
      />
      <input
        v-model="confirmedPassword"
        type="password"
        name="confirmedPassword"
        id="confirmedPassword"
        placeholder="Confirm password"
        class="input-field"
        :class="{ 'border-red-500': password != confirmedPassword }"
      />
      <button
        class="ml-auto block button-default text-white mb-5"
        :class="{ 'opacity-60 pointer-events-none': !validatePass(password) || !validateMail(username) || this.password != this.confirmedPassword }"
      >
        Register
      </button>
    </form>
    <p class="text-sm text-white">
      Already have an account?
      <nuxt-link class="font-semibold underline text-white" :to="'/login'">Sign in!</nuxt-link>
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
      confirmedPassword: "",
    };
  },
  computed: {
    message() {
      return authStore().getRegisterRes;
    },
  },
  methods: {
    register() {
      if (validatePass(this.password) && validateMail(this.username) && this.password == this.confirmedPassword) {
        console.log({ username: this.username, password: this.password, confirmedPassword: this.confirmedPassword });
        authStore().register({ username: this.username, password: this.password, confirmedPassword: this.confirmedPassword });
        this.$router.replace("/login");
      }
    },
  },
};
</script>

<style scoped></style>
