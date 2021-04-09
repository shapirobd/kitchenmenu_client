import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		justifyContent: "space-around",
	},
	mobileRoot: {
		display: "flex",
		justifyContent: "space-around",
		width: "100%",
	},
	main: {
		width: "100%",
		backgroundColor: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		borderRadius: "5px",
		margin: "0 0 10px 0",
	},
	header: {
		width: "95%",
		float: "left",
		margin: "20px 0",
	},
	gridContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},
}));
