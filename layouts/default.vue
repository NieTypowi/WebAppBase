<template>
  <div class="bg-mesh min-h-screen h-full">
    <slot />
  </div>
</template>
<script>
export default {};
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.bg-mesh {
  background-color: hsla(240, 100%, 89%, 1);
  background-image: radial-gradient(at 86% 33%, hsla(310, 71%, 63%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 97%, hsla(246, 92%, 62%, 1) 0px, transparent 50%), radial-gradient(at 43% 80%, hsla(273, 76%, 79%, 1) 0px, transparent 50%),
    radial-gradient(at 81% 11%, hsla(332, 100%, 67%, 1) 0px, transparent 50%),
    radial-gradient(at 23% 87%, hsla(229, 100%, 67%, 1) 0px, transparent 50%);
}
</style>
