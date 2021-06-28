import commonCard from "../../src/components/cards/common";
import { shallowMount } from "@vue/test-utils";

describe("common-card.vue", () => {
	it("render", () => {
		const fakePokemonData = {
			imgUrl: "https://via.placeholder.com/150",
			name: "fakeName",
		};

		const wrapper = shallowMount(commonCard, {
			propsData: {
				pokemonData: fakePokemonData,
			},
		});

		expect(wrapper.find(".pokemon-name").text()).toBe(fakePokemonData.name);

		expect(wrapper.find(".pokemon-image").attributes("src")).toBe(
			fakePokemonData.imgUrl
		);
	});

	it("render-default", () => {
		const fakePokemonData = {
			imgUrl: "https://via.placeholder.com/150",
			name: "fakeName",
		};

		const wrapper = shallowMount(commonCard);

		expect(wrapper.find(".pokemon-name").text()).toBe("Undefined");

		expect(wrapper.find(".pokemon-image").attributes("src")).toBe(
			"https://via.placeholder.com/170"
		);
	});
});
