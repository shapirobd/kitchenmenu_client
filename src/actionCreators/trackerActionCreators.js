import axios from "axios";
import { ADD_EATEN_MEAL, REMOVE_EATEN_MEAL } from "../components/actionTypes";
import { API_URL } from "../constants";

// const API_URL = "http://localhost:5000";

// adds eaten meal to database as well as redux state for a given date
// by dispatching action created by addedEatenMeal()
export const addEatenMeal = (username, recipeId, date, nutrients) => {
	return async (dispatch) => {
		try {
			const macros = {
				calories: Math.round(nutrients[0].amount),
				fat: Math.round(nutrients[1].amount),
				carbs: Math.round(nutrients[3].amount),
				protein: Math.round(nutrients[8].amount),
			};
			await axios.post(`${API_URL}/users/addEatenMeal`, {
				username,
				recipeId,
				date,
				nutrients: macros,
			});
			dispatch(addedEatenMeal(recipeId, date, macros));
		} catch (e) {
			console.error(e);
		}
	};
};

// returns action to be dispatched containing id of recipe
// to be eaten and date that it was eaten
const addedEatenMeal = (recipeId, date, nutrients) => {
	const { calories, fat, carbs, protein } = nutrients;
	return {
		type: ADD_EATEN_MEAL,
		payload: {
			date,
			meal: {
				id: recipeId,
				calories,
				fat,
				carbs,
				protein,
			},
		},
	};
};

// removes eaten meal from database as well as redux state for a given date
// by dispatching action created by removedEatenMeal()
export const removeEatenMeal = (username, recipeId, date) => {
	return async (dispatch) => {
		try {
			await axios.post(`${API_URL}/users/removeEatenMeal`, {
				username,
				recipeId,
				date,
			});
			dispatch(removedEatenMeal(recipeId, date));
		} catch (e) {
			console.error(e);
		}
	};
};

// returns action to be dispatched containing id of recipe
// to be removed and date that it was eaten
const removedEatenMeal = (recipeId, date) => {
	return {
		type: REMOVE_EATEN_MEAL,
		payload: {
			recipeId,
			date,
		},
	};
};
