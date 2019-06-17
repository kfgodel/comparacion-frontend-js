<template>

  <v-layout row>
    <v-text-field label="Descripcion" placeholder="Add todo…" v-model="editedText" ></v-text-field>
    <v-btn color="info" v-on:click="completeItem">Agregar</v-btn>
  </v-layout>

</template>

<script>
  export default {
    name: "ItemEditor",

    data() {
      return {
        editedText: ''
      }
    },
    methods: {
      completeItem() {
        let createdItem = {text: this.editedText, key: Date.now()};
        this.$store.dispatch('addTodoAction', createdItem);
        this.editedText = '';
      },
    }
  }
</script>

<style scoped>

</style>