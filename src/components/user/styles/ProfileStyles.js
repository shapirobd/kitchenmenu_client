import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	root: {
		width: "98%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	mobileRoot: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	gridContainer: {
		height: "100%",
		boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
		position: "relative",
		backgroundColor: "#fff",
	},
	gridItem: {
		padding: "20px",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
}));
