import { defineStore } from 'pinia'

export const dataStore = defineStore({
  id: 'data-store',
  state: () => {
    return{
      userEvents : null,
      tempPos : {}
    }
  },

  
  getters: {
    getTempPos(state) {
      return state.tempPos
    },
  },
    
  actions: {
    setTempPos(res) {
      this.tempPos = res;
    },

  

}
})