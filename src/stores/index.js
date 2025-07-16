import { createStore } from "vuex"
import persistState from 'vuex-persist'




const toLocal = new persistState({
  key: 'id',
  storage: window.localStorage
})

const vuexStore = createStore
(
  {
      state: {
          user: {
            data:{},
            token: sessionStorage.getItem('TOKEN') || '',
            otpConfirmStatus: '',
            registerStatus: '',
          },
      },

      getters: {},

      actions: {},

      mutations: {
        setUser: (state, userData)=>{
          state.user.token = userData.token;
          state.user.data = userData.user;
          sessionStorage.setItem('TOKEN', userData.token);
        },
      },

  plugins:[toLocal.plugin],

  modules: {},

})


export default vuexStore
