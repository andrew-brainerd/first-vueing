import { client } from "@/api/tools";
import { LOADING_POKEMON, POKEMON_LOADED } from './mutations';

export const LOAD_POKEMON = 'loadPokemon';

const actions = {
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
};

export default actions;
