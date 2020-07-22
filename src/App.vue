<template>
  <div id="app" :style="{ background: darkMode ? 'black' : '#666666' }">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
    <Champions />
    <button @click="toggleDarkMode">{{ darkMode ? 'Light' : 'Dark'}} Mode</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Champions from "./components/Champions.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Champions
  },
  data() {
    return {
      darkMode: true
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
