/**
 * Takes an array of objects (each with data on a specific nutrient for a specific meal)
 * and uses the information for fat, carbs and protein to create an object with a
 * breakdown of amounts of each macronutrient and their subnutrients
 * @param {Object} nutrients contains number representing the amount of that nutrient in the recipe
 * @returns object containing the name and amount for each macronutrient, as well as each of their subnutrients
 */
export const generateMacros = (nutrients) => {
	return {
		calories: {
			name: "Calories",
			amount: nutrients[0].amount,
			subNutrients: {},
		},
		fat: {
			name: "Fat",
			amount: nutrients[1].amount,
			subNutrients: {
				saturatedFat: {
					name: "Saturated Fat",
					amount: nutrients[2].amount,
				},
			},
		},
		carbohydrates: {
			name: "Carbohydrates",
			amount: nutrients[3].amount,
			subNutrients: {
				fiber: {
					name: "Fiber",
					amount: nutrients[13].amount,
				},
				netCarbohydrates: {
					name: "Net Carbohydrates",
					amount: nutrients[4].amount,
				},
				sugar: {
					name: "Sugar",
					amount: nutrients[5].amount,
				},
			},
		},
		protein: {
			name: "Protein",
			amount: nutrients[8].amount,
			subNutrients: {},
		},
	};
};
