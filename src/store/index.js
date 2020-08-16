import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: (/Mobi|Android/i.test(navigator.userAgent)),
    isLoaded: false,
    isPortrait:false
  },
  mutations: {
    SET_LOADED: (state, value) => {
      state.isLoaded = value;
    },
    SET_PORTRAIT: (state, value) => {
      state.isPortrait = value;
    },
    SET_MOBILE: (state, value) => {
      state.isMobile = value;
    }
  },
  actions: {
    setLoaded: (state, value) => {
      state.commit('SET_LOADED', value);
    },
    setPortrait: (state, value) => {
      state.commit('SET_PORTRAIT', value);
    },
    setMobile: (state, value) => {
      state.commit('SET_MOBILE', value);
    },
  },
  modules: {
  },
  getters:{
    isMobile: state => {
      return state.isMobile;
    },
    isLoaded: state => {
      return state.isLoaded;
    },
    isPortrait: state => {
      return state.isPortrait;
    },
  }
})
