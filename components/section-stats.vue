<template>
  <div class="w-full md:border-0">
    <h2>Statistics</h2>
    <div class="flex flex-wrap">
      <div v-if="events">Dane</div>
      <p v-else class="p-5 mx-auto font-light">No data to work with. Add some events!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: null,
    };
  },
};
</script>

<style></style>
