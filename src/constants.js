// let apiUrl;
// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === "production") {
// 	apiUrl = "http://www.kitchen-menu.com";
// } else {
// 	apiUrl = "http://localhost:5000";
// }
// console.log(apiUrl);

// export const API_URL = apiUrl;

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
