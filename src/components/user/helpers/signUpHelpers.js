import SignUpFormOne from "../SignUpFormOne";
import SignUpFormTwo from "../SignUpFormTwo";
import SignUpConfirmation from "../SignUpConfirmation";

/**
 * @returns array with titles for each step of the sign up process
 */
export const getSteps = () => {
	return ["Enter basic info", "Enter personal stats", "Confirm data"];
};

/**
 *
 * @param {Number} step the current step in the sign up process that the user is on
 * @param {Function} handleChange function that modifies content of formData as a form is filled in
 * @param {Function} handleSubmit function that registers the user once the form is submitted
 * @param {Object} formData object containing information that has been entered into the form by the user
 */
export const getStepContent = (
	step,
	handleChange,
	handleSubmit,
	formData,
	missingData,
	takenFields
) => {
	switch (step) {
		case 0:
			return (
				<>
					<SignUpFormOne
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						missingData={missingData}
						formData={formData}
						takenFields={takenFields}
					/>
				</>
			);
		case 1:
			return (
				<>
					<SignUpFormTwo
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						formData={formData}
					/>
				</>
			);
		case 2:
			return (
				<>
					<SignUpConfirmation handleSubmit={handleSubmit} formData={formData} />
				</>
			);
		default:
			return "Unknown step";
	}
};
