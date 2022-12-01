<template>
  <div class="w-full flex justify-center gap-5">
    <nuxt-link :to="'/'">Home</nuxt-link>
    <nuxt-link :to="'/login'">Login</nuxt-link>
    <nuxt-link :to="'/register'">Register</nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.router-link-exact-active{
    @apply text-teal-900
}
</style>