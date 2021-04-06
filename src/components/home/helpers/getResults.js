import axios from "axios";

export const getResults = async (ingredients, setResults) => {
	try {
		const ingredientsParams = ingredients.join(",");
		const recipes = await axios.get(
			"https://api.spoonacular.com/recipes/findByIngredients",
			{
				params: {
					apiKey: "73baf9bb95a14f5fb4d71e2f12ab8479",
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
