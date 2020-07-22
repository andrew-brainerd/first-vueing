<template>
  <div class="champions">
    <div class="championsHeader">{{ isLoadingChampions ? 'Loading...' : 'Champions' }}</div>
    <ul>
      <li
        class="champion"
        @click="setSelectedChampion(champion)"
        v-for="(champion, index) in champList"
        :key="index"
      >{{ champion }}</li>
    </ul>
    <Champion :name="selectedChampion" v-if="selectedChampion" @log="logChampion" />
  </div>
</template>

<script>
import Champion from "./Champion";
import { logComponentName } from '../mixins/logComponentName';

export default {
  name: "Champions",
  components: {
    Champion
  },
  data() {
    return {
      champList: [],
      isLoadingChampions: false,
      selectedChampion: null
    };
  },
  methods: {
    setSelectedChampion(champion) {
      this.selectedChampion = champion;
    },
    async getChampions() {
      this.isLoadingChampions = true;
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.champList = [
        "Lucian",
        "Caitlyn",
        "Ezreal",
        "Ashe",
        "Malphite",
        "Orianna"
      ];
      this.isLoadingChampions = false;
    },
    logChampion(name) {
      console.log("Champion: ", name);
    }
  },
  mixins: [logComponentName],
  created() {
    this.getChampions();
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
  margin: 0 auto;
  padding: 5px;
  width: 50%;
}

.champion:hover {
  border: 2px solid white;
}

.championsHeader {
  font-size: 2em;
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
