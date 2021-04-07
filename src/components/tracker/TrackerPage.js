import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles/TrackerPageStyles";
import "react-calendar/dist/Calendar.css";
import convertDate from "../../helpers/convertDate";
import { getPieChartData } from "./helpers/dailyHelpers";
import { getBarChartData, getWeekDates } from "./helpers/weeklyHelpers";
import TrackerCalendar from "./TrackerCalendar";
import TrackerDoughnut from "./TrackerDoughnut";
import TrackerBarChart from "./TrackerBarChart";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import { updateWeekState } from "./helpers/updateWeekState";

const TrackerPage = () => {
	const classes = useStyles();
	const { width } = useWindowDimensions();
	const user = useSelector((state) => state.user);

	const [calendarDate, setCalendarDate] = useState(new Date());
	const [dayState, setDayState] = useState({
		loaded: false,
		empty: false,
		date: convertDate(calendarDate),
		macros: {
			carbs: null,
			fat: null,
			protein: null,
		},
	});
	const [weekState, setWeekState] = useState({
		loaded: false,
		empty: false,
		weekNumber: null,
		dates: getWeekDates(calendarDate),
		weekData: {},
	});
	const [pieChartData, setPieChartData] = useState(undefined);
	const [barChartData, setBarChartData] = useState(undefined);

	useEffect(() => {
		setPieChartData(getPieChartData());
	}, []);

	useEffect(() => {
		setBarChartData(getBarChartData(weekState.weekData));
	}, [weekState.weekData]);

	useEffect(() => {
		updateWeekState(user, calendarDate, setDayState, weekState, setWeekState);
	}, [calendarDate, weekState, user]);

	useEffect(() => {
		setPieChartData(
			getPieChartData(
				dayState.macros.carbs,
				dayState.macros.fat,
				dayState.macros.protein
			)
		);
	}, [dayState]);

	useEffect(() => {
		setBarChartData(getBarChartData(weekState.weekData));
	}, [weekState.weekData]);

	return (
		<div style={{ width: "100%" }}>
			<Grid
				container
				cols={width <= 599 ? 1 : 2}
				className={width <= 599 ? classes.mobileRoot : classes.root}
			>
				<Grid item cols={1} md={4} className={classes.gridItem}>
					<TrackerCalendar
						calendarDate={calendarDate}
						setCalendarDate={setCalendarDate}
					/>

					{width > 599 ? (
						<TrackerDoughnut dayState={dayState} pieChartData={pieChartData} />
					) : null}
				</Grid>
				{width <= 599 ? (
					<Grid item cols={1} md={4} className={classes.gridItem}>
						<TrackerDoughnut dayState={dayState} pieChartData={pieChartData} />
					</Grid>
				) : null}
				<Grid item cols={1} md={8} className={classes.gridItem}>
					<TrackerBarChart weekState={weekState} barChartData={barChartData} />
				</Grid>
			</Grid>
		</div>
	);
};

export default TrackerPage;
