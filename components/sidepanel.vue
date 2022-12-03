<template>
  <div class="p-5 pointer-events-none" :class="[onRight ? 'pr-0' : 'pl-0']">
    <div class="h-full flex pointer-events-auto transition duration-300" :class="{ 'translate-x-[calc(100%_-_56px)]': collapsed && onRight }">
      <div
        class="relative z-10 w-14 backdrop-xl border border-blue-main transition-all duration-300"
        :class="[
          [collapsed ? (onRight ? 'border-r-0 bg-[#ad77e376]' : 'border-l-0 rounded-r-2xl bg-purple-main/20') : 'bg-white/80 '],
          [onRight ? 'border-r-0 rounded-l-2xl' : 'border-l-0'],
        ]"
        @click="toggleCollapse()"
      >
        Icons
      </div>
      <div
        class="relative p-5 backdrop-xl bg-white/80 border border-blue-main transition duration-300"
        :class="[
          [collapsed ? (onRight ? '' : '-translate-x-full  opacity-50') : onRight ? '' : 'translate-x-[-56px]'],
          [onRight ? '' : 'border-l-0 rounded-r-2xl'],
        ]"
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
  props: {
    onRight: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style></style>
