/**
 * Takes a string in the format of "one_two_three" and returns in the
 * format of "One Two Three" (removes underscores and capitalizes first letters of words)
 * @param {String} text
 * @returns newly formatted string
 */
export const capitalize = (text) => {
	return text
		.replace("_", " ")
		.split(" ")
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(" ");
};
