<template>
  <div class="w-full md:border-0">
    <h2>My Events</h2>
    <event-new></event-new>
    <ul v-for="(userEvent, index) in userEvents" :key="index">
      <li>{{ userEvent }}</li>
    </ul>
    <p v-if="!userEvents" class="p-5 text-center text-base font-light">You have no incoming events</p>
  </div>
</template>

<script>
import { dataStore } from "~/store/data";
import eventNew from "./event-new.vue";
export default {
  computed: {
    userEvents() {
      return dataStore().$state.userEvents;
    },
  },
  components: { eventNew },
};
</script>

<style></style>
