const INITIAL_STATE = {
	feed: [],
	page: 1,
	countPerPage: 40,
	totalResults: null,
	user: null,
	filtered: false,
	currentRecipe: null,
	isIngredientBased: false,
};

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "LOAD_FEED": {
			const { recipes, totalResults, page } = action.payload;
			return {
				...state,
				feed: recipes,
				totalResults,
				page,
				isIngredientBased: false,
			};
		}
		case "FILTER_FEED": {
			const { recipes, totalResults, page } = action.payload;
			return {
				...state,
				feed: recipes,
				totalResults,
				page,
				isIngredientBased: false,
			};
		}
		case "FILTER_BY_INGREDIENTS": {
			const { recipes, totalResults } = action.payload;
			return {
				...state,
				page: 1,
				feed: recipes,
				totalResults,
				isIngredientBased: true,
			};
		}
		case "CHANGE_PAGE": {
			return { ...state, page: action.payload };
		}
		case "LOAD_RECIPE": {
			const { currentRecipe } = action.payload;
			return { ...state, currentRecipe };
		}
		case "LOGIN": {
			const { user, token } = action.payload;
			return { ...state, user, token };
		}
		case "LOGOUT": {
			return INITIAL_STATE;
		}
		case "EDIT_PROFILE": {
			const { user } = action.payload;
			return { ...state, user };
		}
		case "BOOKMARK_RECIPE": {
			const { recipeId } = action.payload;
			return {
				...state,
				user: {
					...state.user,
					bookmarks: [...state.user.bookmarks, recipeId],
				},
			};
		}
		case "UNBOOKMARK_RECIPE": {
			const { recipeId } = action.payload;
			return {
				...state,
				user: {
					...state.user,
					bookmarks: state.user.bookmarks.filter(
						(bookmark) => bookmark !== recipeId
					),
				},
			};
		}
		case "ADD_EATEN_MEAL": {
			const { date, meal } = action.payload;
			const { id, calories, fat, carbs, protein } = meal;
			return {
				...state,
				user: {
					...state.user,
					eatenMeals: {
						...state.user.eatenMeals,
						[date]: state.user.eatenMeals[date]
							? [
									...state.user.eatenMeals[date],
									{ id, calories, fat, carbs, protein },
							  ]
							: [{ id, calories, fat, carbs, protein }],
					},
				},
			};
		}
		case "REMOVE_EATEN_MEAL": {
			const { recipeId, date } = action.payload;
			return {
				...state,
				user: {
					...state.user,
					eatenMeals: {
						...state.user.eatenMeals,
						[date]: state.user.eatenMeals[date].filter(
							(meal) => meal.id !== recipeId
						),
					},
				},
			};
		}
		default: {
			return state;
		}
	}
};

export default rootReducer;
