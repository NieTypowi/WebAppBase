<template>
  <div class="py-5 pointer-events-none">
    <div class="h-full flex pointer-events-auto">
      <div
        class="relative p-5 backdrop-xl bg-white/80 rounded-l-2xl border border-r-0 border-blue-main overflow-hidden transition duration-300"
        :class="[collapsed ? 'translate-x-[calc(100%_-_56px)]' : '']"
      >
        <div
          class="absolute top-0 left-0 z-10 w-14 backdrop-xl h-full border-0 border-r border-blue-main transition-all duration-300"
          :class="[collapsed ? ' bg-purple-main/20' : 'bg-white/80 ']"
          @click="toggleCollapse()"
        >
          Icons
        </div>
        <div class="absolute top-0 right-0" @click="toggleCollapse()">bck</div>
        <!-- <slot /> -->
        <!-- <div v-for="item in items">
              <slot name="item" v-bind="item"></slot>
            </div> -->
        <div class="w-[800px]"></div>
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
