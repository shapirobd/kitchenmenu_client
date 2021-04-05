import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	root: {
		height: "100%",
		width: "98%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		float: "right",
		backgroundColor: "rgba(0,0,0,0)",
		padding: "10px 0px 10px 26px",
	},
	mobileRoot: {
		// overflow: "auto",
		// height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		// float: "right",
		backgroundColor: "rgba(0,0,0,0)",
		// padding: "10px 0px 10px 26px",
	},
	gridItem: {
		height: "100%",
		width: "100%",
		margin: "5px 0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
	},
	buttonGroup: {
		width: "100%",
	},
	button: {
		width: "33%",
	},
}));
