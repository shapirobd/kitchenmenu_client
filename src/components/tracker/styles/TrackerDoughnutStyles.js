import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	doughnut: {
		width: "100%",
		height: "100%",
	},
	doughnutDiv: {
		backgroundColor: "#fff",
		border: "none",
		width: "88%",
		height: "38%",
		padding: "30px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "5px",
	},
}));
