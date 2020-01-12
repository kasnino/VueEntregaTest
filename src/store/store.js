import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    estadoMundo: false,
  },

  getters: {

  },
  
  mutations: {
    iniciarMundo: (state, event) => state.estadoMundo = event
  }
})
