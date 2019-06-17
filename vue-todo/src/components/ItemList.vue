<template>
  <v-flex xs12 >
    <v-list>

      <v-list-tile v-for="item in todoItems" :key="item.key" v-on:click="removeTodo(item)" >
        <v-list-tile-avatar>
          <v-icon>inbox</v-icon>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-flex>
</template>

<script>
  export default {
    name: "ItemList",
    computed: {
      todoItems() {
        return this.$store.state.todos
      }
    },
    methods: {
      removeTodo(todoItem) {
        this.$store.dispatch('removeTodoAction', todoItem);
      }
    }
  }
</script>

<style scoped>

</style>