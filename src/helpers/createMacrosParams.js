/**
 * Takes an object with info on how each macro should be filtered and condenses it into a smaller object
 * with info on only the information that is needed to filter the results
 * @param {Object} macros contains a key for each macro with info on how each should be filtered
 * @returns object containing condensed info on minimum and maximum values of certain macros to filter results with
 */
function createMacrosParams(macros) {
	const macrosParams = {};

	if (Object.keys(macros).length) {
		createMacroParam("Fat", macros.Fat, macrosParams);
		createMacroParam("Protein", macros.Protein, macrosParams);
		createMacroParam("Carbs", macros.Carbohydrates, macrosParams);
	}

	return macrosParams;
}

/**
 * Generates a key, value pair for macrosParams that will provide information
 * on the min/max values for a given macronutrient
 * @param {Object} name the name of the macro whose filter data is being assessed ("Fat", "Protein", or "Carbs")
 * @param {Object} macros an object with an operator ("<" or ">") and an amount to be compared to
 * @param {Object} macrosParams the final object to be returned by createMacrosParams
 */
function createMacroParam(name, macro, macrosParams) {
	if (macro.operator === "<" && macro.amount)
		macrosParams[`max${name}`] = macro.amount;
	if (macro.operator === ">" && macro.amount)
		macrosParams[`min${name}`] = macro.amount;
}

export default createMacrosParams;
