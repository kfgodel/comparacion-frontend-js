<template>
  <div id="app">
    <h1>{{title}}:</h1>

    <input type="text" class="nes-input" placeholder="Add todo…" v-model="currentItem.text">
    <button type="button" v-on:click="addTodo">Agregar</button>

    <ul>
      <li v-for="todo in items" v-bind:key="todo.key" class="flex">
        {{todo.text}}
        <div class="space"></div>
        <button class="nes-btn is-error padding" v-on:click="removeTodo(todo.key)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },

  data() {
    return {
      title: 'TODOS',
      currentItem: {text: ''},
      items: []
    }
  },
  methods: {
    addTodo() {
      this.currentItem.key = Date.now()
      this.items.push(this.currentItem)
      this.currentItem = {text: ''}
    },
    removeTodo(key) {
      this.items = this.items.filter(todo => todo.key !== key)
    }
  }
}
</script>

<style ref="https://fonts.googleapis.com/css?family=Press+Start+2P" />
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
