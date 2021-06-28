<template>
  <div
    class="common-card-container"
    @click="$emit('on-common-card-click', pokemonData)"
  >
    <img
      class="pokemon-image"
      :src="pokemonData.imgUrl || 'https://via.placeholder.com/170'"
    />

    <div class="pokemon-name">{{ pokemonData.name || "Undefined" }}</div>

    <types-container
      class="pokemon-types"
      :pokemonTypes="pokemonData.types"
    ></types-container>
  </div>
</template>

<script>
export default {
  name: "common-card",
  props: {
    pokemonData: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    "types-container": () => import("./typesContainer"),
  },
};
</script>

<style lang="scss" scoped>
.common-card-container {
  padding: 5px 10px 25px 10px;
  border: 1px solid black;

  img.pokemon-image {
    width: 100%;
  }

  .pokemon-name {
    padding: 20px 5px;
    text-align: center;
    font-weight: bold;
    word-wrap: break-word;

    @media screen and (max-width: 420px) {
      font-size: 50%;
    }
  }
}
</style>
