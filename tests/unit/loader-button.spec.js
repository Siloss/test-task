import loaderButton from "../../src/components/buttons/loader";
import { mount, shallowMount } from "@vue/test-utils";
import Vue from "vue";

describe("loaderButton.vue", () => {
	it("renders slot when passed", () => {
		const msg = "fake message";
		const wrapper = shallowMount(loaderButton, {
			slots: { default: msg },
		});
		expect(wrapper.text()).toMatch(msg);
	});

	it("does click emit", () => {
		const wrapper = shallowMount(loaderButton);

		wrapper.find("button").trigger("click");

		expect(wrapper.emitted().click).toBeTruthy();
	});

	it("renders progress-bar", async () => {
		const wrapper = mount(loaderButton);

		expect(wrapper.find(".progress").isVisible()).toBe(false);

		wrapper.vm.startLoading();

		await Vue.nextTick();

		expect(wrapper.find(".progress").isVisible()).toBe(true);

		wrapper.vm.stopLoading();

		await Vue.nextTick();

		expect(wrapper.find(".progress").isVisible()).toBe(false);
	});
});
