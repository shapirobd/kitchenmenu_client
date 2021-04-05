import React from "react";
import Calendar from "react-calendar";
import { useStyles } from "./styles/TrackerCalendarStyles";
import useWindowDimensions from "../../customHooks/getWindowDimensions";

const TrackerCalendar = ({ setCalendarDate, calendarDate }) => {
	const classes = useStyles();

	const { width } = useWindowDimensions();

	return (
		<div
			className={width <= 599 ? classes.mobileCalendarDiv : classes.calendarDiv}
		>
			<Calendar
				onChange={setCalendarDate}
				value={calendarDate}
				minDetail="year"
				calendarType="US"
				className={classes.calendar}
			/>
		</div>
	);
};

export default TrackerCalendar;
