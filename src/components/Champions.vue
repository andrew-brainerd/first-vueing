<template>
  <div class="champions">
    <div class="championsHeader">Champions</div>
    <ul>
      <li
        class="champion"
        @click="setSelectedChampion(champion)"
        v-for="(champion, index) in champList"
        :key="index"
      >{{ champion }}</li>
    </ul>
    <div class="selectedChampion" v-if="selectedChampion">{{ selectedChampion }}</div>
  </div>
</template>

<script>
export default {
  name: "Champions",
  data() {
    return {
      champList: ["Lucian", "Senna", "Caitlyn", "Ezreal", "Ashe"],
      selectedChampion: null
    };
  },
  methods: {
    setSelectedChampion(champion) {
      this.selectedChampion = champion;
    }
  }
};
</script>

<style scoped>
.champions {
  border: 2px solid white;
  margin: 10px 0;
  padding: 10px;
  width: 250px;
}

.champion {
  border: 2px solid transparent;
  cursor: pointer;
  margin: 5px auto;
  padding: 3px;
  width: 90%;
}

.champion:hover {
  border: 2px solid white;
}

.championsHeader {
  font-size: 1.5em;
}

.selectedChampion {
  margin: 10px 0;
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
