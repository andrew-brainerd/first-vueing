import Vue from 'vue';
import Vuex from 'vuex';
import { client } from "@/api/tools";
import { LOAD_POKEMON } from './actions';
import { LOADING_POKEMON, POKEMON_LOADED } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemon: {}
  },
  mutations: {
    [LOADING_POKEMON](state) {
      state.pokemon = {};
    },
    [POKEMON_LOADED](state, pokemon) {
      state.pokemon = pokemon;
    }
  },
  actions: {
    async [LOAD_POKEMON]({ commit }, name) {
      commit(LOADING_POKEMON);
      const lowerName = name.toLowerCase();

      try {
        const response = await client.get(`/pokemon/${lowerName}`);
        commit(POKEMON_LOADED, response.data);
      } catch (err) {
        console.error(err);
      }
    }
  },
  modules: {
  }
});
