<template>
  <div class="div">
    <pokemons-gallery></pokemons-gallery>
  </div>
</template>

<script>
//import * as P from "pokeapi-js-wrapper";
//import ApiIterator from "./api/apiIterator";
export default {
  data: () => ({
    iterator: null,
    results: [],
  }),
  components: {
    //modal: () => import("./components/modals/empty"),
    //	"common-card": () => import("./components/cards/common"),
    "pokemons-gallery": () => import("./components/galleries/pokemons"),
  },
  async mounted() {
    // this.iterator = new ApiIterator("pokemons", 1, 0);
    // await this.iterator.init();
    // console.log(this.iterator);
    // this.results = await this.iterator.getResults();
  },
  computed: {},

  methods: {
    async iter() {
      await this.iterator.next();
      this.results.push(this.iterator.getResults());
    },
  },
};
</script>

<style lang="scss" scoped></style>
