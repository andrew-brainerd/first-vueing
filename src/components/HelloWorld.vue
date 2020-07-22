<template>
  <div class="hello">
    <input type="text" v-model="name" @keyup.enter="sayHello" />
    <button @click="sayHello">Say Hello</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      name: 'Andrew'
    };
  },
  methods: {
    sayHello() {
      alert(`Hello ${this.name}`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  margin: 10px 0;
}
</style>
