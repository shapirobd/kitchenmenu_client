/**
 * Takes quantity of carbs, fat and protein that a user ate on a given date
 * and determines what percentage of calories from that day are coming from each.
 * Then, uses this information to generate configuration data for the doughnut chart.
 * @param {Number} carbs
 * @param {Number} fat
 * @param {Number} protein
 * @returns object containing data used to configure the doughnut chart from TrackerDoughnut
 */
export const getPieChartData = (carbs = 0, fat = 0, protein = 0) => {
	const totalCals = carbs * 4 + fat * 9 + protein * 4;
	const percentages = {
		carbs: Math.round((carbs * 400) / totalCals),
		fat: Math.round((fat * 900) / totalCals),
		protein: Math.round((protein * 400) / totalCals),
	};
	return {
		labels: [
			`Carbohydraetes (${percentages.carbs}%)`,
			`Fat (${percentages.fat}%)`,
			`Protein (${percentages.protein}%)`,
		],
		datasets: [
			{
				data: [carbs, fat, protein],
				backgroundColor: ["#f44336", "#4caf50", "#2196f3"],
				hoverBackgroundColor: ["#f44336", "#4caf50", "#2196f3"],
				hoverBorderColor: ["#f44336", "#4caf50", "#2196f3"],
				borderAlign: "inner",
			},
		],
	};
};

/**
 * Given a user and date, this function determines the user's total intake for each
 * macronutrient for that date.
 * If we are using this function in the context of just one day,
 * we update the value of dayState from TrackerPage to include the date and macros.
 * If we are using this funciton in the context each day within the week,
 * we simply return object containing macro quantities.
 * @param {Object} user
 * @param {String} context
 * @param {Date} date
 * @param {Function} setDayState
 * @returns object containing user's total intake for each macro for the given date
 * (if context doesn't equal week)
 */
export const getDateMacros = async (user, context, date, setDayState) => {
	const meals = user.eatenMeals[date] || [];

	const fat = getTotalMacro("fat", meals);
	const carbs = getTotalMacro("carbs", meals);
	const protein = getTotalMacro("protein", meals);

	let empty = true;
	if (meals.length) {
		empty = false;
	}
	let macros = { fat, carbs, protein };

	if (context === "day") {
		setDayState({
			loaded: true,
			empty,
			date,
			macros,
		});
	} else {
		return macros;
	}
};

/**
 * Given the name of a macronutrient and an array of meals that a user has eaten,
 * return the total amount of the given macro that the user ate from among those meals.
 * @param {String} macro
 * @param {Array} meals
 * @returns
 */
const getTotalMacro = (macro, meals) => {
	return meals.reduce((total, meal) => {
		return total + meal[macro];
	}, 0);
};
