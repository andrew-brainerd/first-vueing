import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const initialState = {
  pokemon: {}
};

export default new Vuex.Store({
  state: initialState,
  mutations,
  actions,
  modules: {
  },
  getters
});
