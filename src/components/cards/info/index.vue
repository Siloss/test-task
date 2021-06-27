<template>
  <div class="info-card-container">
    <img class="pokemon-image" :src="pokemonData.imgUrl" />
    <div class="pokemon-name">{{ pokemonData.name || "Undefined" }}</div>
    <div class="pokemon-stats">
      <table>
        <thead>
          <tr>
            <th class="stat-name"></th>
            <th class="stat-value"></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Type</td>
            <td id="types">
              <p v-for="type in pokemonData.types" :key="type.type.name">
                {{ type.type.name }}
              </p>
            </td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{{ getStat("attack") || "Undefined" }}</td>
          </tr>
          <tr>
            <td>Defennce</td>
            <td>{{ getStat("defense") || "Undefined" }}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>{{ getStat("hp") || "Undefined" }}</td>
          </tr>
          <tr>
            <td>SP Attack</td>
            <td>{{ getStat("special-attack") || "Undefined" }}</td>
          </tr>
          <tr>
            <td>SP Defense</td>
            <td>{{ getStat("special-defense") || "Undefined" }}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{{ getStat("speed") || "Undefined" }}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{{ pokemonData.weight || "Undefined" }}</td>
          </tr>
          <tr>
            <td>Total moves</td>
            <td>{{ pokemonData.moves.length || "Undefined" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "info-card",
  methods: {
    getStat(statName) {
      const stat = this.pokemonData.stats.filter((_) => {
        return _.stat.name === statName;
      })[0];

      return stat.base_stat;
    },
  },
  props: {
    pokemonData: { type: Object, default: () => ({}) },
  },
};
</script>

<style lang="scss" scoped>
.info-card-container {
  width: 100%;
  padding: 5px 10px 25px 10px;
  border: 1px solid black;

  img.pokemon-image {
    width: 100%;
    max-height: 210px;
  }

  .pokemon-name {
    padding: 20px 5px;
    text-align: center;
    font-weight: bold;
    word-wrap: break-word;
  }

  .pokemon-stats {
    table {
      max-width: 100%;
      thead {
        display: none;
      }
      tbody {
        tr {
          td {
            padding: 3px 0px;
            border: 2px solid black !important;
            text-align: center;
            overflow: wrap;
            font-size: 65%;
          }
        }
        #types {
          font-size: 55%;
          p {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
