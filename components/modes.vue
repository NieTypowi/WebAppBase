<template>
  <div class="flex gap-2 items-center justify-center text-white">
    <input class="peer appearance-none" type="checkbox" name="work" id="work" />
    <label
      for="work"
      class="block px-5 py-2 min-w-[96px] text-center checked:bg-pink-main/40 border border-pink-main opacity-100 rounded-full transition duration-200 checked:text-white"
      >Work</label
    >
    <input class="appearance-none" type="checkbox" name="life" id="life" />
    <label
      for="life"
      class="block px-5 py-2 min-w-[96px] text-center checked:bg-blue-light/40 border border-blue-light rounded-full transition duration-200 checked:text-white"
      >Life</label
    >
  </div>
</template>
