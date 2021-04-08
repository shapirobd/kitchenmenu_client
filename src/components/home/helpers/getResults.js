import axios from "axios";

/**
 * Updates the results state in KitchenPage to include a list of recipes
 * that contain the ingredients found in the ingredients array
 * @param {Array} ingredients
 * @param {Function} setResults
 */
export const getResults = async (ingredients, setResults) => {
	try {
		const ingredientsParams = ingredients.join(",");
		const recipes = await axios.get(
			"https://api.spoonacular.com/recipes/findByIngredients",
			{
				params: {
					apiKey: process.env.REACT_APP_SPOON_API_KEY,
					offset: 0,
					number: 900,
					ingredients: ingredientsParams,
				},
			}
		);
		setResults(recipes.data);
	} catch (e) {
		console.error(e);
	}
};
