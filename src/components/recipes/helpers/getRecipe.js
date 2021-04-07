import axios from "axios";

export const getRecipe = async (recipeId, setCurrentRecipe) => {
	try {
		const recipe = await axios.get(
			`https://api.spoonacular.com/recipes/${recipeId}/information`,
			{
				params: {
					apiKey: process.env.REACT_APP_SPOON_API_KEY,
					includeNutrition: true,
				},
			}
		);
		const instructions = await axios.get(
			`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions`,
			{
				params: {
					apiKey: process.env.REACT_APP_SPOON_API_KEY,
					stepBreakdown: true,
				},
			}
		);
		setCurrentRecipe({
			recipe: recipe.data,
			instructions: instructions.data,
		});
	} catch (e) {
		console.error(e);
	}
};
