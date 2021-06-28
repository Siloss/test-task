import infoCard from "../../src/components/cards/info";
import { shallowMount } from "@vue/test-utils";

describe("info-card.vue", () => {
  it("render", () => {
    const fakePokemonData = {
      imgUrl: "https://via.placeholder.com/150",
      name: "fakeName",
      id: "1",
      moves: [{}, {}, {}],
      stats: [
        {
          base_stat: 45,
          stat: { name: "hp" },
        },
        {
          base_stat: 49,
          stat: { name: "attack" },
        },
        {
          base_stat: 49,
          stat: { name: "defense" },
        },
        {
          base_stat: 65,
          stat: {
            name: "special-attack",
          },
        },
        {
          base_stat: 65,
          stat: {
            name: "special-defense",
          },
        },
        {
          base_stat: 45,
          stat: {
            name: "speed",
          },
        },
      ],
      types: [
        {
          type: {
            name: "Type1",
          },
        },
        {
          type: {
            name: "Type2",
          },
        },
      ],
      weight: 100,
    };

    const wrapper = shallowMount(infoCard, {
      propsData: {
        pokemonData: fakePokemonData,
      },
    });

    expect(wrapper.find(".pokemon-name").text()).toBe(
      fakePokemonData.name + " #00" + fakePokemonData.id
    );

    expect(wrapper.find(".pokemon-image").attributes("src")).toBe(
      fakePokemonData.imgUrl
    );

    expect(wrapper.find(".attack-stat").text()).toBe(
      fakePokemonData.stats[1].base_stat + ""
    );

    expect(wrapper.find(".defense-stat").text()).toBe(
      fakePokemonData.stats[2].base_stat + ""
    );

    expect(wrapper.find(".hp-stat").text()).toBe(
      fakePokemonData.stats[0].base_stat + ""
    );

    expect(wrapper.find(".special-attack-stat").text()).toBe(
      fakePokemonData.stats[3].base_stat + ""
    );

    expect(wrapper.find(".special-defense-stat").text()).toBe(
      fakePokemonData.stats[4].base_stat + ""
    );

    expect(wrapper.find(".speed-stat").text()).toBe(
      fakePokemonData.stats[5].base_stat + ""
    );

    expect(wrapper.find(".weight").text()).toBe(fakePokemonData.weight + "");

    expect(wrapper.find(".moves-count").text()).toBe(
      fakePokemonData.moves.length + ""
    );
  });

  it("render-default", () => {
    const wrapper = shallowMount(infoCard);

    expect(wrapper.find(".pokemon-name").text()).toBe("Undefined #undefined");

    expect(wrapper.find(".pokemon-image").attributes("src")).toBe(
      "https://via.placeholder.com/170"
    );

    expect(wrapper.find(".attack-stat").text()).toBe("Undefined");

    expect(wrapper.find(".defense-stat").text()).toBe("Undefined");

    expect(wrapper.find(".hp-stat").text()).toBe("Undefined");

    expect(wrapper.find(".special-attack-stat").text()).toBe("Undefined");

    expect(wrapper.find(".special-defense-stat").text()).toBe("Undefined");

    expect(wrapper.find(".speed-stat").text()).toBe("Undefined");

    expect(wrapper.find(".weight").text()).toBe("Undefined");

    expect(wrapper.find(".moves-count").text()).toBe("Undefined");
  });
});
