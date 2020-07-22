<template>
  <div class="pokemonContainer">
    <router-link
      class="pokemon"
      v-for="(pokemon, index) in pokemonList"
      :key="index"
      :to="{ name: 'PokemonDetails', params: { name: pokemon.toLowerCase() } }"
    >{{ pokemon }}</router-link>
  </div>
</template>

<script>
export default {
  name: "Pokemon",
  data() {
    return {
      pokemonList: ["Squirtle", "Charmander", "Bulbasaur"]
    };
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
</style>