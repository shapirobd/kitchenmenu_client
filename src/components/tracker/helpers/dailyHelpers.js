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

const getTotalMacro = (macro, meals) => {
	return meals.reduce((total, meal) => {
		return total + meal[macro];
	}, 0);
};
