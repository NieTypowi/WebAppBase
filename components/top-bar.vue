<template>
  <div class="w-full flex justify-start p-3 bg-purple-main/20 backdrop-blur-md">
    <logo />
    <div class="w-full flex justify-center items-center">
      <modes />
    </div>
    <div class="hidden w-[139px] h-[32px] md:block"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.router-link-exact-active {
  @apply text-teal-900;
}
</style>
