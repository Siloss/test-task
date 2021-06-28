import PokemonsIterator from "./pokemonsIterator";

export default class ApiIteratorFactory {
	/**
	 * ApiIterator Factory
	 *
	 * @param {"pokemons"} type
	 * @param {Number} limit
	 * @param {Number} offset
	 * @returns
	 */
	constructor(type, limit, offset) {
		let iterator;

		switch (type) {
			case "pokemons":
				iterator = new PokemonsIterator(limit, offset);
				break;

			default:
				throw new Error("Such type doesn't exist.");
		}

		return iterator;
	}
}
