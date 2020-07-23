<template>
  <div class="pokemonDetails">
    <div class="pokemonName">{{ name.toUpperCase() }}</div>
    <div class="pokemonSprite" v-if="getPokemonDefaultSprite">
      <img :src="getPokemonDefaultSprite" alt="Pokémon Sprite" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { LOAD_POKEMON } from '@/store/actions';

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: mapGetters(['getPokemonDefaultSprite']),
  methods: mapActions([LOAD_POKEMON]),
  created() {
    this[LOAD_POKEMON](this.name);
  }
};
</script>

<style>
.pokemonName {
  color: #42b983;
}

.pokemonSprite > img {
  width: 250px;
}
</style>