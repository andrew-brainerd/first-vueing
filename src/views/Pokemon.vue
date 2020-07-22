<template>
  <div class="pokemonContainer">
    <ul>
      <li
        class="pokemon"
        @click="setSelectedPokemon(pokemon)"
        v-for="pokemon in pokemonList"
        :key="pokemon.key"
      >{{ pokemon.name }}</li>
    </ul>
    <div class="pokemonSprite" v-if="pokemonSprite">
      <img :src="pokemonSprite" alt="Pokémon Sprite" />
    </div>
  </div>
</template>

<script>
import { client } from "@/api/tools";

export default {
  data() {
    return {
      pokemonList: [
        {
          name: "Squirtle",
          key: "squirtle"
        },
        {
          name: "Charmander",
          key: "charmander"
        },
        {
          name: "Bulbasaur",
          key: "bulbasaur"
        }
      ],
      pokemonSprite: null
    };
  },
  methods: {
    setSelectedPokemon(pokemon) {
      this.loadSelectedPokemon(pokemon.key);
    },
    async loadSelectedPokemon(key) {
      try {
        const response = await client.get(`/pokemon/${key}`);
        const sprite = response.data.sprites.front_default;

        this.pokemonSprite = sprite;
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
.pokemonContainer {
  margin: 10px 0;
  padding: 10px;
  width: 250px;
}

.pokemon {
  border: 2px solid transparent;
  cursor: pointer;
  margin: 0 auto;
  padding: 5px;
  width: 50%;
}

.pokemon:hover {
  border: 2px solid white;
}

.pokemonSprite > img {
  width: 200px;
}

ul {
  color: white;
  list-style: none;
  margin: 20px 0;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>