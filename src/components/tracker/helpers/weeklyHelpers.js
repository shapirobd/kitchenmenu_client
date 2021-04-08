import moment from "moment";
import convertDate from "../../../helpers/convertDate";
import { WEEKDAYS, WEEKLY_COLORS } from "../../../constants";
import { getDateMacros } from "./dailyHelpers";

/**
 * Takes object containing keys of dates in a week, each date having a value of
 * an object containing total carbs, fat and protein. Then, uses this information
 * to generate configuration data for the bar chart.
 * @param {Object} weekData
 * @returns object containing data used to configure the bar chart from TrackerBarChart
 */
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

/**
 * Given a date, this function returns the number of which week out of the year
 * that date is associated with
 * @param {Date} calendarDate
 * @returns which week in the year calendarDate falls into
 */
export const getWeekNumber = (calendarDate) => {
	return moment(convertDate(calendarDate), "YYYY-MM-DD").week();
};

/**
 * Given a date, this function returns an array of all dates found within the
 * week of the year that the given date falls into
 * @param {Date} calendarDate
 * @returns array of dates in the week associated with calendarDate
 */
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

/**
 * Updates the value associated with weekData's key for the given date
 * to include total macros for that date
 * @param {Object} user
 * @param {Object} weekData
 * @param {Date} date
 */
export const updateWeekData = async (user, weekData, date) => {
	const dateMacros = await getDateMacros(user, "week", date);
	weekData[date] = dateMacros;
};

/**
 * Creates an object containing keys of each date from weekDates and values
 * of objects containing total intake for all macros for each date
 * @param {Object} user
 * @param {Array} weekDates
 * @returns object containing keys of each date from weekDates and values
 * of objects containing total intake for all macros for each date
 */
export const getWeekMacros = async (user, weekDates) => {
	let weekData = {};
	for (let date of weekDates) {
		await updateWeekData(user, weekData, date);
	}
	return weekData;
};
