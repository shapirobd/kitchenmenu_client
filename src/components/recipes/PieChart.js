import React from "react";
// import { CanvasJSChart } from "canvasjs-react-charts";
import { useStyles } from "./styles/PieChartStyles";
import { Doughnut } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

const PieChart = ({ title, caloricBreakdown }) => {
	const { percentFat, percentCarbs, percentProtein } = caloricBreakdown;
	const classes = useStyles();

	const pieChartData = {
		labels: ["Carbohydraetes", "Fat", "Protein"],
		datasets: [
			{
				data: [
					Math.round(percentCarbs),
					Math.round(percentFat),
					Math.round(percentProtein),
				],
				backgroundColor: ["#f44336", "#4caf50", "#2196f3"],
				hoverBackgroundColor: ["#f44336", "#4caf50", "#2196f3"],
				hoverBorderColor: ["#f44336", "#4caf50", "#2196f3"],
				borderAlign: "inner",
			},
		],
		text: "25%",
	};

	return (
		<div className={classes.root}>
			<Typography variant="h5">Caloric Breakdown</Typography>
			<Doughnut
				data={pieChartData}
				options={{
					maintainAspectRatio: true,
					responsive: true,
				}}
			/>
		</div>
	);
};

export default PieChart;
