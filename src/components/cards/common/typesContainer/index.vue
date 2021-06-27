<template>
  <div class="pokemon-types-container">
    <!-- eslint-disable-next-line-->
		<div
      class="type-label"
      v-for="type in pokemonTypes"
      :style="{ background: $options.config[type.type.name].color }"
    >
      {{ type.type.name }}
    </div>
  </div>
</template>

<script>
import Config from "./color-config";
export default {
  config: Config, // non reactive data
  name: "types-container",
  props: {
    pokemonTypes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-types-container {
  .type-label {
    display: inline-block;
    margin: 2px;
    padding: 2% 7%;
    border: 2px solid rgba(34, 60, 80, 0.25);
    border-radius: 7px;

    -webkit-box-shadow: -3px 8px 10px 0px rgba(34, 60, 80, 0.25);
    -moz-box-shadow: -3px 8px 10px 0px rgba(34, 60, 80, 0.25);
    box-shadow: -3px 8px 10px 0px rgba(34, 60, 80, 0.25);

    @media screen and (max-width: 420px) {
      font-size: 50%;
    }
  }
}
</style>
