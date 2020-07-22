<template>
  <div class="selectedChampion">
    <div class="name" @click="logChampion">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "Champion",
  props: {
    name: {
      type: String,
      default: null,
      required: true
    }
  },
  methods: {
    logChampion() {
      this.$emit("log", this.name);
    }
  }
};
</script>

<style scoped>
.selectedChampion {
  color: rgb(65, 184, 131);
  font-size: 1.5em;
  user-select: none;
}
</style>
