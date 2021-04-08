import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles/TrackerDoughnutStyles";
import { Doughnut } from "react-chartjs-2";
import CircularProgress from "@material-ui/core/CircularProgress";

// Component containing doughnut chart that displays total carb, fat and protein consumption
// for the selected day from TrackerCalendar
const TrackerDoughnut = ({ dayState, pieChartData }) => {
	const classes = useStyles();

	return (
		<div className={classes.doughnutDiv}>
			{dayState.loaded ? (
				<>
					<Typography variant="h6">Daily Macros</Typography>
					{dayState.empty ? (
						<Typography color="error">No data for the selected date</Typography>
					) : (
						<Doughnut data={pieChartData} className={classes.doughnut} />
					)}
				</>
			) : (
				<CircularProgress />
			)}
		</div>
	);
};

export default TrackerDoughnut;
