import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	barChart: {
		width: "100%",
		height: "100%",
	},
	horizontalBarChart: {
		// width: "100%",
		// height: "100%",
	},
	barChartDiv: {
		backgroundColor: "#fff",
		width: "88%",
		height: "88%",
		padding: "30px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		borderRadius: "5px",
	},
	mobileBarChartDiv: {
		backgroundColor: "#fff",
		width: "88%",
		height: "80vh",
		padding: "30px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		borderRadius: "5px",
	},
}));
