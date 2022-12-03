<template>
  <div class="relative h-full">
    <div class="relative z-10 h-full flex flex-col pointer-events-none">
      <top-bar class="pointer-events-auto" />
      <div class="flex-grow max-w-full overflow-hidden pointer-events-none">
        <div
          ref="panels"
          class="relative h-full bg-white md:bg-transparent rounded-t-3xl md:rounded-none pt-[60px] md:pt-0 flex flex-col md:flex-row justify-between w-full overflow-hidden pointer-events-auto md:pointer-events-none md:!translate-y-0 transition-all duration-100"
          @touchmove="panelTouchMove($event)"
          @touchend="panelTouchEnd()"
          style="transform: translateY(calc(100% - 40px))"
        >
          <span
            class="inline-block absolute top-3 left-0 right-0 w-3/4 max-w-[100px] mx-auto h-0.5 rounded-full bg-gray-400"
            :class="{ 'opacity-50': mobilePanelPos == 100 || mobilePanelPos == 0 }"
          ></span>
          <panel-main />
          <panel-stats />
        </div>
      </div>
    </div>
    <map-component />
  </div>
</template>

<script>
import { authStore } from "~/store/auth";

export default {
  setup() {
    definePageMeta({
      title: "My home page",
    });
  },
  data() {
    return {
      mobilePanelPos: 100,
    };
  },
  computed: {
    userData() {
      return authStore().getUser;
    },
  },
  methods: {
    panelTouchMove(e) {
      const element = this.$refs["panels"];
      const touchY = e.touches[0].clientY;
      const offset = (touchY / window.innerHeight) * 100;
      if (offset < 100 && offset > 0) {
        element.style.transform = `translateY(calc(${offset}% - 40px))`;
        element.style.transitionDuration = "25ms";
        this.mobilePanelPos = offset;
      }
    },

    panelTouchEnd() {
      const element = this.$refs["panels"];
      element.style.transitionDuration = "150ms";
      if (this.mobilePanelPos < 75) {
        element.style.transform = `translateY(0)`;
        element.classList.remove("rounded-t-3xl");
        this.mobilePanelPos = 0;
      } else {
        element.style.transform = `translateY(calc(100% - 40px))`;
        element.classList.add("rounded-t-3xl");
        this.mobilePanelPos = 100;
      }
    },
  },
};
</script>
