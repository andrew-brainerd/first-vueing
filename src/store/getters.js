import { path, prop } from 'ramda';

const getters = {
  getPokemon: prop('pokemon'),
  getPokemonDefaultSprite: path(['pokemon', 'sprites', 'front_default'])
};

export default getters;
