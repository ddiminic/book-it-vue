import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "1234",
    arrivalDate: new Date(),
    departureDate: new Date()
  },
  mutations: {
    setToken(state, payload) {
      return (state.token = payload);
    },
    setArrivalDate(state, payload) {
      return (state.arrivalDate = payload);
    },
    setDepartureDate(state, payload) {
      return (state.departureDate = payload);
    }
  },
  actions: {
    setToken(context, payload) {
      context.commit("setToken", payload);
    },
    setArrivalDate(context, payload) {
      context.commit("setArrivalDate", payload);
    },
    setDepartureDate(context, payload) {
      context.commit("setDepartureDate", payload);
    }
  },
  getters: {
    token: state => {
      return state.token;
    }
  }
});
