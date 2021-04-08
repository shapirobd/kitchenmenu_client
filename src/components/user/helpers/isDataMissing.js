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
