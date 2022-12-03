<template>
  <div class="w-full">
    <div class="flex">
      <span class="block pt-5">Add new event</span>
      <svg
        @click="toggleForm()"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
        :class="[isHovered ? 'text-[#884AC6]' : 'text-[#002738]']"
        class="mt-4 ml-3 w-6 h-8 transition duration-300"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="19.5" class="stroke-current" />
        <rect x="13" y="19" width="14" height="2" class="fill-current" />
        <rect
          x="21"
          y="13"
          width="14"
          height="2"
          transform="rotate(90 21 13)"
          class="fill-current"
        />
      </svg>
    </div>
    <form
      v-if="collapsed"
      ref="eventForm"
      method="post"
      @submit.prevent="addEvent"
      class="flex flex-col w-full"
    >
      <div class="formText">
        <input
          class="textInput"
          type="text"
          id="title"
          name="title"
          placeholder=" "
        />
        <span> Title </span>
      </div>
      <div class="formText">
        <textarea
          class="min-h-[60px] max-h-[500px] textInput"
          name="description"
          id="description"
          placeholder=" "
        ></textarea>
        <span> Description </span>
      </div>
      <div class="pt-5">
        <span class="block">Select event type:</span>
        <div class="inline-block mr-5">
          <input
            type="radio"
            id="typeChoice1"
            name="type"
            value="work"
            class="peer appearance-none"
          />
          <label
            for="typeChoice1"
            class="block px-5 py-2 min-w-[96px] text-center peer-checked:bg-pink-main/40 border border-pink-main opacity-100 rounded-full transition duration-200 peer-checked:text-white"
            >Work</label
          >
        </div>
        <div class="inline-block mr-5">
          <input
            type="radio"
            id="typeChoice2"
            name="type"
            value="life"
            class="peer appearance-none"
          />
          <label
            for="typeChoice2"
            class="block px-5 py-2 min-w-[96px] text-center peer-checked:bg-blue-light/40 border border-blue-light rounded-full transition duration-200 peer-checked:text-white"
            >Life</label
          >
        </div>
        <div class="formText">
          <input
            class="block mt-5 border border-solid border-gray-300 rounded-[5px] px-5 py-[15px] text-base md:text-lg transition duration-200 focus-visible:border-purple-main focus-visible:outline-none"
            type="datetime-local"
            id="meeting-time"
            name="meeting-time"
            min="2018-06-07T00:00"
          />
        </div>
        <button @click="submit()" class="button-default">save</button>
        <p>Position set on map: lat:{{ lat }} lang:{{ lng }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import { dataStore } from "~/store/data";

export default {
  data() {
    return {
      isHovered: false,
      collapsed: false,
    };
  },
  computed: {
    lat() {
      return dataStore().getTempPos.lat;
    },
    lng() {
      return dataStore().getTempPos.lng;
    },
  },
  methods: {
    submit() {
      const formData = new FormData(this.$refs["eventForm"]);
      let object = {};
      formData.forEach((value, key) => (object[key] = value));
      const stringify = JSON.stringify(object);
      const json = JSON.parse(stringify);

      const request = {
        eventType: json["type"],
        eventTitle: json["title"],
        eventDescription: json["description"],
        eventTime: json["meeting-time"],
        longitude: this.lng,
        latitude: this.lat,
      };
      jwtFetch("http://localhost:8080/users/events", "POST", request).then(
        () => {
          jwtFetch("http://localhost:8080/events", "GET").then((res) => {
            dataStore().setUserEvents(res);
          });
        }
      );
    },
    toggleForm() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped>
.formText {
  @apply relative pt-5 max-w-[700px];
}
.formText .textInput {
  @apply w-full border border-solid border-gray-300 rounded-[5px] px-5 py-[15px] text-base md:text-lg transition duration-200  focus-visible:border-purple-main focus-visible:outline-none;
}
.formText span {
  @apply absolute left-5 top-[6px] leading-3 text-[10px] text-black/50 italic pointer-events-none transition-all duration-200;
}
.formText .textInput:placeholder-shown ~ span {
  @apply top-[35px] text-base md:text-lg;
}
.formText .textInput:focus ~ span {
  @apply top-[6px] text-[10px] leading-3 text-purple-main font-semibold;
}
.formText.invalid span {
  @apply text-red-500 font-semibold;
}
.formText.invalid input {
  @apply border-red-500;
}
</style>
