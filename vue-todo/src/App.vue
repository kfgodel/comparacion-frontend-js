<template>
  <v-app>
    <v-layout >
      <v-flex xs12 sm6 offset-sm3>

        <v-layout row>
          <v-text-field label="Descripcion" placeholder="Add todo…" v-model="currentItem.text" ></v-text-field>
          <v-btn color="info" v-on:click="addTodo">Agregar</v-btn>
        </v-layout>

        <v-flex xs12 >
          <v-list>

            <v-list-tile v-for="item in items" :key="item.key" v-on:click="removeTodo(item.key)" >
              <v-list-tile-avatar>
                <v-icon>inbox</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>


      </v-flex>
    </v-layout>

  </v-app>
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
