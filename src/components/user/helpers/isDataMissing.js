/**
 * Determines whether or not required data from the sign up form is missing
 * and updates missingData state from SignUpPage, making all missing fields
 * associated with the value true
 * @param {Object} missingData
 * @param {Object} formData
 * @param {Function} setMissingData
 * @returns true if there is required data missing from the sign up form
 */
export const isDataMissing = (missingData, formData, setMissingData) => {
	let dataMissing = false;
	Object.keys(missingData).map((fieldName) => {
		let isMissing;
		if (formData[fieldName] === "") {
			dataMissing = true;
			isMissing = true;
		} else {
			isMissing = false;
		}
		setMissingData((missingData) => ({
			...missingData,
			[fieldName]: isMissing,
		}));
	});
	return dataMissing;
};
