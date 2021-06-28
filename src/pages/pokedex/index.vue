<template>
  <div class="container">
    <div class="title"><h1>POKEDEX</h1></div>
    <div class="inner-container">
      <div class="left-content-container">
        <pokemon-gallery
          :pokemonsArray="pokemonsArray"
          v-on:on-common-card-click="setInfoCardData"
        ></pokemon-gallery>
        <loader-button
          class="loader-button"
          @click="loadMore()"
          ref="loaderButton"
          >Load More</loader-button
        >
      </div>
      <div class="right-content-container">
        <info-card
          id="infoCard"
          v-if="infoCardData"
          :pokemonData="infoCardData"
        ></info-card>
      </div>
    </div>
  </div>
</template>

<script>
import * as Pokedex from "pokeapi-js-wrapper";
import M from "materialize-css";
import ApiIterator from "../../api/apiIterator";

const api = new Pokedex.Pokedex();
export default {
  apiIterator: null, //non reactive data
  name: "app-pokedex",
  data: () => ({
    pokemonsArray: [],
    infoCardData: null,
  }),
  async beforeMount() {
    this.$options.apiIterator = new ApiIterator("pokemons", 12, 0);
    try {
      await this.$options.apiIterator.init();
    } catch (e) {
      M.toast({ html: "Smth went wrong" });
    }

    const results = this.$options.apiIterator.getResults();

    this.loadNextChunk(results);
  },
  methods: {
    async loadNextChunk(pokemonNamesList) {
      const tempArray = [];

      try {
        //fetching pokemon data for each pokemon
        await Promise.all(
          pokemonNamesList.map(async (_) => {
            const pokemonData = await api.getPokemonByName(_.name);

            pokemonData.imgUrl = this.imgUrl(pokemonData.id);

            tempArray.push(pokemonData);
          })
        );
      } catch (e) {
        M.toast({ html: "Smth went wrong" });
      }

      tempArray.sort((a, b) => a.id - b.id);

      this.pokemonsArray = this.pokemonsArray.concat(tempArray);
    },

    async loadMore() {
      if (!this.$options.apiIterator.hasNext()) {
        return M.toast({ html: "You did load all the pokemons" });
      }
      this.$refs.loaderButton.startLoading();
      try {
        await this.$options.apiIterator.next();

        await this.loadNextChunk(this.$options.apiIterator.getResults());
      } catch (e) {
        M.toast({ html: "Smth went wrong" });
      }

      this.$refs.loaderButton.stopLoading();
    },

    imgUrl(pokemonId) {
      return (
        "https://pokeres.bastionbot.org/images/pokemon/" + pokemonId + ".png"
      );
    },

    setInfoCardData(pokemonData) {
      this.infoCardData = pokemonData;
    },
  },
  components: {
    "pokemon-gallery": () => import("../../components/galleries/pokemons"),
    "loader-button": () => import("../../components/buttons/loader"),
    "info-card": () => import("../../components/cards/info"),
  },
};
</script>

<style lang="scss" scoped>
.container {
  .title {
    width: 100%;
    h1 {
      width: 50%;
      margin: 20px auto;
      border: 1px solid black;
      text-align: center;
    }
  }
  .inner-container {
    display: flex;
    justify-content: space-between;

    .left-content-container {
      flex-basis: 70%;
      .loader-button {
        margin: 20px auto;
      }
    }

    .right-content-container {
      flex-basis: 25%;

      #infoCard {
        position: sticky;
        top: 10px;
      }
    }
  }
}
</style>
