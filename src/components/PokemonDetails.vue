<template>
  <div class="pokemonDetails">
    <div class="pokemonName">{{ name.toUpperCase() }}</div>
    <div class="pokemonSprite" v-if="pokemonSprite">
      <img :src="pokemonSprite" alt="Pokémon Sprite" />
    </div>
  </div>
</template>

<script>
import { client } from "@/api/tools";

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pokemonSprite: null
    };
  },
  methods: {
    async loadSelectedPokemon(name) {
      const lowerName = name.toLowerCase();

      try {
        const response = await client.get(`/pokemon/${lowerName}`);
        const sprite = response.data.sprites.front_default;

        this.pokemonSprite = sprite;
      } catch (err) {
        console.error(err);
      }
    }
  },
  created() {
    this.loadSelectedPokemon(this.name);
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