import { defineStore } from 'pinia'

export const authStore = defineStore({
  id: 'auth-store',
  state: () => {
    return{
      user: null,
      registerRes: '',
      loginRes: '',
    }
  },

  getters: {
    getRegisterRes(state) {
      return state.registerRes
    },

    getLoginRes(state) {
      return state.loginRes
    },

    getUser(state) {
      return state.user;
    },
  },
    
  actions: {
    setRegisterRes(res) {
      this.registerRes = res;
    },

    setLoginRes(res) {
      this.loginRes = res;
    },

    setUser(data) {
      this.user = data;
    },


    register( data ) {
        $fetch( 'http://localhost:8080/authentication/register', {
            method: 'POST',
            body: data
        })
        .then(res => this.setRegisterRes(res.success))
        .catch(err => {
          this.setRegisterRes(res.failReason)
          console.log(err);
          
        })
    },

    login( data ) {
      $fetch( 'http://localhost:8080/authentication/login', {
          method: 'POST',
          body: data
      })
      .then(res => {
          this.setUser({
            username: data.username,
            token: res.token,
          })
      })
      .catch(err => {
        // this.setLoginRes(res.failReason)
        console.log(err);
        
      })
    },
  }
})