import axios from "axios";
import { LOGIN, LOGOUT } from "../components/actionTypes";

// adds user to database as well as redux state
// by dispatching action created by registered()
export const register = (data) => {
	return async (dispatch) => {
		try {
			const resp = await axios.post(
				`${
					process.env.REACT_APP_API_URL || "http://localhost:5000"
				}/auth/register`,
				data
			);
			// const userResp = await axios.get(`${API_URL}/users/${data.username}`);
			const { user, token } = resp.data;
			dispatch(registered(token, user));
		} catch (e) {
			console.error(e);
		}
	};
};

// returns action to be dispatched containing information on the
// newly registered user
const registered = (token, user) => {
	return {
		type: LOGIN,
		payload: {
			user,
			token,
		},
	};
};

// verifies that username & password from data are valid
// if valid, adds the user to redux state by dispatching action created by loggedIn()
// in invalid, throws error
export const login = (data) => {
	return async (dispatch) => {
		try {
			const resp = await axios.post(
				`${
					process.env.REACT_APP_API_URL || "http://localhost:5000"
				}/auth/login`,
				data
			);
			const { user, token } = resp.data;
			dispatch(loggedIn(token, user));
		} catch (e) {
			console.error(e);
		}
	};
};

// returns action to be dispatched containing information on the
// logged in user
const loggedIn = (token, user) => {
	return {
		type: LOGIN,
		payload: {
			user,
			token,
		},
	};
};

// returns action to be dispatched that ends up removing
// the user's information from redux state
export const logout = () => {
	return {
		type: LOGOUT,
	};
};

// edits the information on a given user in the database
// as well as redux state by dispatching action created by edittedProfile()
export const editProfile = (username, data) => {
	return async (dispatch) => {
		try {
			const editResp = await axios.patch(
				`${process.env.API_URL || "http://localhost:5000"}/users/${username}`,
				data
			);
			dispatch(edittedProfile(editResp.data));
		} catch (e) {
			console.error(e);
		}
	};
};

// returns action to be dispatched containing information on the
// logged in user
const edittedProfile = (user) => {
	return {
		type: "EDIT_PROFILE",
		payload: { user },
	};
};
