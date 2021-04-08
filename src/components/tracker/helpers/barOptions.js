// When bar chart from TrackerBarChart is horizontal, these options are
// used to configure the chart's x-axis to start at zero and not maintain aspect ratio
export const horizontalBarOptions = {
	scales: {
		xAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
	maintainAspectRatio: false,
};

// When bar chart from TrackerBarChart is vertical, these options are
// used to configure the chart's y-axis to start at zero
export const verticalBarOptions = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
};
