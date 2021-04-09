import axios from "axios";

/**
 * Checks with the back-end to see if there is already a user with the given username/email
 * @param {String} keyword - will either be "email" or "username"
 * @param {String} value - the value of the email or username that we are checking
 * @returns {Boolean} - true if there is already a user with the given username/email
 */
export const checkIfTaken = async (keyword, value) => {
	try {
		const resp = await axios.get(
			`${
				process.env.REACT_APP_API_URL || "http://localhost:5000"
			}/auth/${keyword}/${value}`
		);
		console.log(resp);
		return resp.data.isTaken;
	} catch (e) {
		console.log(e);
	}
};
