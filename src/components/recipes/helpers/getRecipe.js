import axios from "axios";

/**
 * Retrieves information from Spoonacular API on a given recipe and updates
 * currentRecipe state in Recipe component to include information on
 * the recipe & its instructions
 * @param {Number} recipeId
 * @param {Function} setCurrentRecipe
 */
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
