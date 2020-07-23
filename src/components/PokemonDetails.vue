<template>
  <div class="pokemonDetails">
    <div class="pokemonName">{{ name.toUpperCase() }}</div>
    <div class="pokemonSprite" v-if="pokemon.sprites.front_default">
      <img :src="pokemon.sprites.front_default" alt="Pokémon Sprite" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { LOAD_POKEMON } from '@/store/actions';

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({ pokemon: 'pokemon' })
  },
  methods: {
    ...mapActions([LOAD_POKEMON])
  },
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