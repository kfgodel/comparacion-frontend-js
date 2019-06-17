<template>
  <v-app>
    <v-layout >
      <v-flex xs12 sm6 offset-sm3>

        <ItemEditor></ItemEditor>

        <ItemList></ItemList>

      </v-flex>
    </v-layout>

  </v-app>
</template>

<script>

  import ItemEditor from "./components/ItemEditor";
  import ItemList from "./components/ItemList";

  export default {
  name: 'app',
  components: {
    ItemList,
    ItemEditor
  }
}
</script>
