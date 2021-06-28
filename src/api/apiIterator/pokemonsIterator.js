import * as P from "pokeapi-js-wrapper";
import BaseIterator from "./base";

const api = new P.Pokedex();

export default /**
 * Iterate through the pokemons list.
 * Should be initialized.
 * Count of pokemons per iteration is defined by "limit" param.
 *
 * @class PokemonsIterator
 * @extends BaseIterator
 */
class PokemonsIterator extends BaseIterator {
  /**
   *
   * @param {Number} limit
   * @param {Number} offset
   */
  constructor(limit, offset) {
    super();
    this.__response = {};
    this.__limit = limit;
    this.__offset = offset;
  }

  /**
   *
   * @returns {Promise} - API request to get list of pokemons
   */
  async __request() {
    const res = await api.getPokemonsList({
      limit: this.__limit,
      offset: this.__offset,
    });

    return res;
  }

  /**
   * Initializes iterator
   */
  async init() {
    this.__response = await this.__request();
  }

  /**
   * Iterate to next
   *
   * @returns {Array} - results("value" of "iterable")
   */
  async next() {
    if (!this.hasNext()) {
      throw new Error("ApiIterator out of range");
    }
    this.__offset += this.__limit;

    this.__response = await this.__request();

    return this.__response.results;
  }

  /**
   * Iterate to previous
   *
   * @returns {Array} - results("value" of "iterable")
   */
  async prev() {
    if (!this.hasPrev()) {
      throw new Error("ApiIterator out of range");
    }
    if (this.__offset < this.__limit) {
      this.__response = await api.getPokemonsList({
        limit: this.__offset,
        offset: 0,
      });
    } else {
      this.__offset -= this.__limit;

      this.__response = await this.__request();
    }

    return this.__response.results;
  }

  /**
   * @returns {Array} - results("value" of iterable)
   */
  getResults() {
    return this.__response.results;
  }

  /**
   * @returns {bool}
   */
  hasNext() {
    return !!this.__response.next;
  }

  /**
   * @returns {bool}
   */
  hasPrev() {
    return !!this.__response.previous;
  }
}
