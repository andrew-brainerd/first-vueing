export const LOADING_POKEMON = 'loadingPokemon';
export const POKEMON_LOADED = 'pokemonLoaded';

const mutations = {
  [LOADING_POKEMON](state) {
    state.pokemon = {};
  },
  [POKEMON_LOADED](state, pokemon) {
    state.pokemon = pokemon;
  }
};

export default mutations;
