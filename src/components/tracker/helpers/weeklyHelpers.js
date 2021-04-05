import moment from "moment";
import convertDate from "../../../helpers/convertDate";
import { WEEKDAYS, WEEKLY_COLORS } from "../../../constants";
import { getDateMacros } from "./dailyHelpers";

export const getBarChartData = (weekData) => {
	return {
		labels: WEEKDAYS,
		datasets: [
			{
				label: "Carbohydrates",
				data: weekData
					? Object.keys(weekData).map((date) => weekData[date].carbs)
					: [0, 0, 0, 0, 0, 0, 0],
				backgroundColor: WEEKLY_COLORS.carbs,
			},
			{
				label: "Fat",
				data: weekData
					? Object.keys(weekData).map((date) => weekData[date].fat)
					: [0, 0, 0, 0, 0, 0, 0],
				backgroundColor: WEEKLY_COLORS.fat,
			},
			{
				label: "Protein",
				data: weekData
					? Object.keys(weekData).map((date) => weekData[date].protein)
					: [0, 0, 0, 0, 0, 0, 0],
				backgroundColor: WEEKLY_COLORS.protein,
			},
		],
	};
};

export const getWeekNumber = (calendarDate) => {
	return moment(convertDate(calendarDate), "YYYY-MM-DD").week();
};

export const getWeekDates = (calendarDate) => {
	return [0, 1, 2, 3, 4, 5, 6].map((d) =>
		convertDate(
			moment(
				`${convertDate(calendarDate).substring(0, 4)}-${getWeekNumber(
					calendarDate
				)}-` + d,
				"YYYY-w-e"
			)["_d"]
		)
	);
};

export const updateWeekData = async (user, weekData, date) => {
	const dateMacros = await getDateMacros(user, "week", date);
	weekData[date] = dateMacros;
};

export const getWeekMacros = async (user, weekDates) => {
	let weekData = {};
	for (let date of weekDates) {
		await updateWeekData(user, weekData, date);
	}
	return weekData;
};
