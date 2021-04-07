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
		backgroundColor: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		borderRadius: "5px",
		margin: "0 0 10px 0",
		paddingBottom: "30px",
		position: "relative",
	},
	header: {
		position: "absolute",
		top: "4%",
		left: "5%",
	},
	divider: {
		margin: "0",
		width: "100%",
		position: "absolute",
		top: "11%",
	},
	gridContainer: {
		position: "absolute",
		top: "14%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
	},
}));
