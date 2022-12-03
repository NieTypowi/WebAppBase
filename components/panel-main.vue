<template>
  <div class="p-5 pl-0 pointer-events-none">
    <div class="h-full flex pointer-events-auto transition duration-300">
      <div
        class="relative z-10 w-14 backdrop-xl border border-l-0 border-blue-main transition-all duration-300"
        :class="[collapsed ? 'border-l-0 rounded-r-2xl bg-purple-main/20' : 'bg-white/80 ']"
        @click="toggleCollapse()"
      >
        Icons
      </div>
      <div
        class="relative p-5 backdrop-xl bg-white/80 border border-blue-main transition duration-300 rounded-r-2xl"
        :class="[collapsed ? '-translate-x-full' : 'translate-x-[-56px]']"
      >
        <div class="absolute top-0 right-0" @click="toggleCollapse()">bck</div>
        <!-- <slot /> -->
        <!-- <div v-for="item in items">
            <slot name="item" v-bind="item"></slot>
          </div> -->
        <div class="w-[300px]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
    };
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style></style>
