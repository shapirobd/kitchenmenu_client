import axios from "axios";
import { BOOKMARK_RECIPE, UNBOOKMARK_RECIPE } from "../components/actionTypes";

// adds bookmarked recipe to database as well as redux state
// by dispatching action created by bookmarkedRecipe()
export const bookmarkRecipe = (username, recipeId) => {
	return async (dispatch) => {
		try {
			await axios.post(
				`${
					process.env.REACT_APP_API_URL || "http://localhost:5000"
				}/users/bookmarkRecipe`,
				{
					username,
					recipeId,
				}
			);
			dispatch(bookmarkedRecipe(recipeId));
		} catch (e) {
			console.error(e);
		}
	};
};

// returns action to be dispatched containing id of recipe to be bookmarked
const bookmarkedRecipe = (recipeId) => {
	return {
		type: BOOKMARK_RECIPE,
		payload: {
			recipeId,
		},
	};
};

// removes bookmarked recipe from database as well as redux state
// by dispatching action created by unbookmarkedRecipe()
export const unbookmarkRecipe = (username, recipeId) => {
	return async (dispatch) => {
		try {
			await axios.post(
				`${
					process.env.REACT_APP_API_URL || "http://localhost:5000"
				}/users/unbookmarkRecipe`,
				{
					username,
					recipeId,
				}
			);
			dispatch(unbookmarkedRecipe(recipeId));
		} catch (e) {
			console.error(e);
		}
	};
};

// returns action to be dispatched containing id of recipe to be unbookmarked
const unbookmarkedRecipe = (recipeId) => {
	return {
		type: UNBOOKMARK_RECIPE,
		payload: {
			recipeId,
		},
	};
};

// retrieves all recipes from the database that have been bookmarked by a given user
// returns array of recipe ids

// export const getAllBookmarks = async (username) => {
// 	const bookmarks = await axios.get(`${API_URL}/users/getAllBookmarks`, {
// 		params: { username },
// 	});
// 	return bookmarks;
// };
