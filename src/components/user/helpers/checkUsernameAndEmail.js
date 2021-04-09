import { checkIfTaken } from "./checkIfTaken";

/**
 * Calls the checkIfTaken function for both the username and email from the sign up form
 * to see if either/both are taken.
 * For each that is taken, update the appropriate key value pair in takenFields.
 * @param {Object} formData
 * @param {Object} takenFields
 * @param {Function} setTakenFields
 */
export const checkUsernameAndEmail = async (formData, setTakenFields) => {
	console.log(formData);
	const usernameIsTaken = await checkIfTaken("username", formData.username);
	const emailIsTaken = await checkIfTaken("email", formData.email);

	setTakenFields({
		username: usernameIsTaken,
		email: emailIsTaken,
	});
};
