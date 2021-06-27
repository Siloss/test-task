<template>
  <div id="app">
    <app-pokedex></app-pokedex>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {
    "app-pokedex": () => import("./pages/pokedex"),
  },
};
</script>
