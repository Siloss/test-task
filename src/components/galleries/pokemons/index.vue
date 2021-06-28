<template>
	<div class="pokemons-gallery-container">
		<common-card
			class="common-card"
			v-for="pokemon in pokemonsArray"
			:key="pokemon.id"
			:pokemonData="pokemon"
			v-on:on-common-card-click="reEmit"
		></common-card>
	</div>
</template>

<script>
export default {
	name: "pokemons-gallary",
	props: {
		pokemonsArray: Array,
		default: () => [],
	},
	methods: {
		reEmit(data) {
			this.$emit("on-common-card-click", data);
		},
	},
	components: {
		"common-card": () => import("../../cards/common"),
	},
};
</script>

<style lang="scss" scoped>
.pokemons-gallery-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 100%;

	&:after {
		display: none;
	}

	.common-card {
		width: 32%;
		min-width: 120px;
		margin-bottom: 10px;
		cursor: pointer;
	}
}
</style>
