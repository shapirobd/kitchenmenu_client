import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	root: {
		margin: "0 75px",
	},
	mobileRoot: {
		margin: 0,
	},
	heading: {
		margin: "20px 0",
	},
	grid: {
		margin: "20px -12px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "space-around",
	},
	image: {
		width: "100%",
		borderRadius: "5px",
	},
	buttonGroup: {
		margin: "15px 0",
	},
	button: {
		color: "#fff",
		backgroundColor: "#4caf50",
		border: "1px solid #fff",
		"&:hover": {
			backgroundColor: "#81c784",
		},
	},
	main: {
		padding: "0 36px !important",
		backgroundColor: "#fff",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "space-around",
		borderRadius: "5px",
		marginBottom: "20px",
	},
	infoPanel: {
		padding: "0 !important",
	},
}));
