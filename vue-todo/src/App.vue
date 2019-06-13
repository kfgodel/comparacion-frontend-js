<template>
  <div id="app">
    <h1>{{title}}:</h1>

    <input type="text" class="nes-input" placeholder="Add todo…" v-on:keyup.enter="addTodo">

    <ul>
      <li v-for="todo in todos" v-bind:key="todo.key" class="flex">
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
      todos: [
        {text: 'todo 1', done: false, key: Date.now()},
        {text: 'todo 2', done: false, key: Date.now() + 1}
      ]
    }
  },
  methods: {
    addTodo(event) {
      const text = event.target.value
      this.todos.push({text, done: false, key: Date.now()})
      event.target.value = ''
    },
    removeTodo(key) {
      this.todos = this.todos.filter(todo => todo.key !== key)
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
