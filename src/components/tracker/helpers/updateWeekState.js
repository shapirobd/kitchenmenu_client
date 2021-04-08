import "react-calendar/dist/Calendar.css";
import { getWeekNumber, getWeekDates, getWeekMacros } from "./weeklyHelpers";

/**
 * Gets user's macro intake for the for the week associated with calendarDate,
 * then uses this information to determine if any meals were tracked for that week.
 * Then, if this is a new week that has been selected, update weekState.
 * @param {Object} user
 * @param {Date} calendarDate
 * @param {Object} weekState
 * @param {Function} setWeekState
 */
export const updateWeekState = async (
	user,
	calendarDate,
	weekState,
	setWeekState
) => {
	const weekData = await getWeekMacros(user, getWeekDates(calendarDate));
	let empty = true;
	Object.values(weekData).map((date) => {
		if (empty && (date.carbs || date.fat || date.protein)) {
			empty = false;
		}
	});
	if (getWeekNumber(calendarDate) !== weekState.weekNumber) {
		setWeekState({
			empty,
			loaded: true,
			weekNumber: getWeekNumber(calendarDate),
			dates: getWeekDates(calendarDate),
			weekData,
		});
	}
};
