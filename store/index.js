import { defineStore } from 'pinia'
//TODO: rename mainStore to authState 
export const mainStore = defineStore({
  id: 'main-store',
  state: () => {
    return{
      user: {},
      registerRes: '',
    }
  },

  getters: {
    getUser(state) {
      return state.user
    },

    getRegisterRes(state) {
      return state.registerRes
    }
  },
    
  actions: {
    setUser(user) {
      this.user = user;
    },

    setRegisterRes(res) {
      this.registerRes = res;
    },

    async register( data ) {
        const res = await $fetch( 'http://localhost:8080/authentication/register', {
            method: 'POST',
            body: data
        })
        if (res) {
          this.setRegisterRes(res)
        }
    },
  }
})