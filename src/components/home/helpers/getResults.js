import axios from "axios";

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
