<template>
  <div
    class="flex flex-col mb-5 p-2 bg-purple-main/20 hover:bg-purple-main/10 transition duration-200 rounded-2xl"
  >
    <h3>{{ data.eventTitle }}</h3>
    <p class="border-b border-0 border-solid pb-2 mb-2">
      {{ data.eventDescription }}
    </p>
    <p
      v-if="data.eventType == 'WORK'"
      class="block max-w-min px-2 text-center bg-white border border-pink-main opacity-100 rounded-full transition duration-200 peer-checked:text-white"
    >
      WORK
    </p>
    <p
      v-if="data.eventType == 'LIFE'"
      class="block max-w-min px-4 text-center bg-white border border-blue-light opacity-100 rounded-full transition duration-200 peer-checked:text-white"
    >
      LIFE
    </p>
    <p>⏰{{ this.formatDate(data.eventTime) }}</p>
    <button @click="removeEvent(data.eventId)">delete</button>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    formatDate(rawDate) {
      return rawDate.toString().slice(0, 16).replace("T", " ");
    },
    removeEvent(id) {
      console.log(id);
      jwtFetch("http:/localhost:8080/users/events", "DELETE", id).then(() =>
        console.log("remove event with id : " + id)
      );
    },
  },
};
</script>
