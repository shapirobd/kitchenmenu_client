import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles/TrackerBarChartStyles";
import { Bar, HorizontalBar } from "react-chartjs-2";
import CircularProgress from "@material-ui/core/CircularProgress";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import { verticalBarOptions, horizontalBarOptions } from "./helpers/barOptions";

const TrackerBarChart = ({ weekState, barChartData }) => {
	const classes = useStyles();
	const { width } = useWindowDimensions();

	return (
		<div
			className={width <= 599 ? classes.mobileBarChartDiv : classes.barChartDiv}
		>
			{weekState.loaded ? (
				<>
					<Typography variant={width <= 599 ? "h6" : "h3"}>
						Weekly Data
					</Typography>
					{weekState.empty ? (
						<Typography variant={width <= 599 ? "h6" : "h3"} color="error">
							No data for the selected week
						</Typography>
					) : width <= 599 ? (
						<HorizontalBar data={barChartData} options={horizontalBarOptions} />
					) : (
						<Bar
							data={barChartData}
							className={classes.barChart}
							options={verticalBarOptions}
						/>
					)}
				</>
			) : (
				<CircularProgress />
			)}
		</div>
	);
};

export default TrackerBarChart;
