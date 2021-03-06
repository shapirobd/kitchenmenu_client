// all diets in the correct format for Spoonacular API queries
export const ALL_DIETS = [
	"glutenFree",
	"ketogenic",
	"vegetarian",
	"lactoVegetarian",
	"ovoVegetarian",
	"lactoOvoVegetarian",
	"vegan",
	"pescetarian",
	"paleo",
	"primal",
	"whole30",
];

export const ALL_MACROS = ["Fat", "Protein", "Carbohydrates"];

// used for FilterPanel form
export const INITIAL_FILTER_DATA = {
	diets: [],
	macros: {
		Fat: {
			operator: null,
			amount: null,
		},
		Protein: {
			operator: null,
			amount: null,
		},
		Carbohydrates: {
			operator: null,
			amount: null,
		},
	},
};

export const WEEKDAYS = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

// the colors associated with each day of the week for a given macronutrient
export const WEEKLY_COLORS = {
	carbs: [
		"#f44336",
		"#f44336",
		"#f44336",
		"#f44336",
		"#f44336",
		"#f44336",
		"#f44336",
	],
	fat: [
		"#4caf50",
		"#4caf50",
		"#4caf50",
		"#4caf50",
		"#4caf50",
		"#4caf50",
		"#4caf50",
	],
	protein: [
		"#2196f3",
		"#2196f3",
		"#2196f3",
		"#2196f3",
		"#2196f3",
		"#2196f3",
		"#2196f3",
	],
};
