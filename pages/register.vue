<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <h1 class="text-4xl mb-5">Register</h1>
    <form method="post" @submit.prevent="register" class="w-full max-w-md">
      <input v-model="username" type="text" name="username" id="username" placeholder="User name" class="input-field" />
      <input v-model="password" type="text" name="password" id="password" placeholder="Password" class="input-field" />
      <button class="button-default">Register</button>
    </form>
    <p v-if="result">{{ result }}</p>
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
    result() {
      return authStore().getRegisterRes;
    },
  },
  methods: {
    register() {
      if (this.username && this.password) {
        console.log({ username: this.username, password: this.password, confirmedPassword: this.password });
        authStore().register({ username: this.username, password: this.password, confirmedPassword: this.password });
        this.$router.replace("/login")
      }
    },
  },
};
</script>

<style scoped>
.input-field {
  @apply w-full mb-5 text-2xl px-4 py-2 rounded-xl bg-white border border-teal-400 focus:border-teal-600 transition outline-none focus:outline-none;
}
</style>
