<template>
  <div class="w-full">
    <form method="post" @submit.prevent="addEvent" class="flex flex-col w-full">
      <div class="formText">
        <input class="textInput" type="text" id="title" name="title" placeholder=" " />
        <span> Title </span>
      </div>
      <div class="formText">
        <textarea class="min-h-[60px] max-h-[500px] textInput" name="description" id="description" placeholder=" "></textarea>
        <span> Description </span>
      </div>
      <div>
        <span class="block">Select event type:</span>
        <div class="inline-block mr-5">
          <input type="radio" id="typeChoice1" name="type" value="work" class="peer appearance-none" />
          <label
            for="typeChoice1"
            class="block px-5 py-2 min-w-[96px] text-center peer-checked:bg-pink-main/40 border border-pink-main opacity-100 rounded-full transition duration-200 peer-checked:text-white"
            >Work</label
          >
        </div>
        <div class="inline-block mr-5">
          <input type="radio" id="typeChoice2" name="type" value="life" class="peer appearance-none" />
          <label
            for="typeChoice2"
            class="block px-5 py-2 min-w-[96px] text-center peer-checked:bg-blue-light/40 border border-blue-light rounded-full transition duration-200 peer-checked:text-white"
            >Life</label
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    addEvent() {},
  },
};
</script>

<style scoped>
.formText {
  @apply relative pt-5 max-w-[700px];
}
.formText .textInput {
  @apply w-full border border-solid border-gray-300 rounded-[5px] px-5 py-[15px] text-base md:text-lg transition duration-200  focus-visible:border-purple-main focus-visible:outline-none;
}
.formText span {
  @apply absolute left-5 top-[6px] leading-3 text-[10px] text-black/50 italic pointer-events-none transition-all duration-200;
}
.formText .textInput:placeholder-shown ~ span {
  @apply top-[35px] text-base md:text-lg;
}
.formText .textInput:focus ~ span {
  @apply top-[6px] text-[10px] leading-3 text-purple-main font-semibold;
}
.formText.invalid span {
  @apply text-red-500 font-semibold;
}
.formText.invalid input {
  @apply border-red-500;
}
</style>
