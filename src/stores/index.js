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
        count: 0
      },

      getters: {},

      actions: {},

      mutations: {
        increment(state) {
          state.count++
        },

        decrement(state) {
          state.count--
        }
      },

  plugins:[toLocal.plugin],

  modules: {},

})


export default vuexStore
