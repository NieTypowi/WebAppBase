<template>
  <div class="w-full md:border-0">
    <h2>My Events</h2>
    <ul v-if="events">
      <li></li>
    </ul>
    <p v-else class="p-5 text-center text-base font-light">You have no incoming events</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
    };
  },
};
</script>

<style></style>
