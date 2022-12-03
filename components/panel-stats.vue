<template>
  <div class="md:py-5 pointer-events-none">
    <div class="h-full flex pointer-events-none">
      <div
        class="relative p-5 md:pl-[84px] w-full backdrop-blur-md bg-white/70 rounded-l-2xl overflow-hidden transition duration-300 pointer-events-auto"
        :class="[collapsed ? 'md:translate-x-[calc(100%_-_56px)]' : '']"
      >
        <div
          class="absolute hidden md:block top-0 left-0 z-10 w-14 h-full transition-all duration-300"
          :class="[collapsed ? ' md:bg-purple-main/20' : 'md:bg-white/70 backdrop-blur-md']"
        >
          <div class="icons-list">
            <ul>
              <li @click="openSection(1)" :class="{ active: !collapsed && currSectionId == 1 }">
                <svg width="30px" height="30px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 36h-2V26h-4v10h-2V24h8z" />
                  <path d="M28 36h-2V20h-4v16h-2V18h8z" />
                  <path d="M38 36h-2V14h-4v22h-2V12h8z" />
                  <path d="M8 36h32v2H8z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div class="absolute hidden md:block top-0 right-0" @click="toggleCollapse()">
          <div class="back-button w-5 h-5 mr-3 mt-5 rotate-180 scale-75">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                style="fill: #010002"
                stroke="none"
                d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </div>
        </div>
        <div class="w-full md:w-[300px] lg:w-[500px] xl:w-[800px]">
          <section-stats />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
      currSectionId: 1,
    };
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },

    openSection(id) {
      if (this.collapsed || (!this.collapsed && this.currSectionId == id)) {
        this.toggleCollapse();
      }
      this.currSectionId = id;
    },
  },
};
</script>

<style></style>
