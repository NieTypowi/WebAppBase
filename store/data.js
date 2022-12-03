import { defineStore } from "pinia";

export const dataStore = defineStore({
  id: "data-store",
  state: () => {
    return {
      userEvents: null,
      tempPos: {},
      workFilter: true,
      lifeFilter: true,
    };
  },

  getters: {
    getTempPos(state) {
      return state.tempPos;
    },
    getUserEvents(state) {
      return state.userEvents;
    },
  },

  actions: {
    setTempPos(res) {
      this.tempPos = res;
    },

    setUserEvents(res) {
      this.userEvents = res;
    },

    setWorkFilter(res) {
      this.workFilter = res;
    },
    setLifeFilter(res) {
      this.lifeFilter = res;
    },
  },
});
