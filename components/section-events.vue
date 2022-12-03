<template>
  <div class="w-full md:border-0">
    <h2>My Events</h2>
    <event-new></event-new>
    <ul v-if="events">
      <li></li>
    </ul>
    <p v-else class="p-5 text-center text-base font-light">You have no incoming events</p>
  </div>
</template>

<script>
import eventNew from "./event-new.vue";
export default {
  components: { eventNew },
  data() {
    return {
      events: null,
    };
  },
};
</script>

<style></style>
