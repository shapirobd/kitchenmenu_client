import $ from "jquery";

/**
 * This function is called in KitchenPage once results are
 * found and scrolls down to the top of the results
 */
export const scrollToResults = (mobile) => {
	let container;
	mobile
		? (container = $("#kitchenContainer"))
		: (container = $("#switchContainer"));
	container.animate({ scrollTop: $("#kitchenContainer").height() }, 1000);
};
