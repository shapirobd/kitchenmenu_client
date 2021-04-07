import "react-calendar/dist/Calendar.css";
import convertDate from "../../../helpers/convertDate";
import { getDateMacros } from "./dailyHelpers";
import { getWeekNumber, getWeekDates, getWeekMacros } from "./weeklyHelpers";

export const updateWeekState = async (
	user,
	calendarDate,
	setDayState,
	weekState,
	setWeekState
) => {
	getDateMacros(user, "day", convertDate(calendarDate), setDayState);
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
