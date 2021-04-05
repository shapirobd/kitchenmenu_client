import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	leftGridItem: {
		height: "100%",
	},
	topGridItem: {
		height: "100vw",
		width: "100vw",
	},
	main: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "50%",
		width: "75%",
		borderRadius: "5px",
		backgroundColor: "rgba(255,255,255,0.5)",
		boxShadow: "2px 2px 10px black",
	},
	mobileMain: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "100%",
		borderRadius: "5px",
		backgroundColor: "rgba(255,255,255,0.5)",
		// boxShadow: "2px 2px 10px black",
	},
	heading: {
		display: "block",
		margin: "20px 0",
	},
	textField: {
		borderTopRightRadius: "0px",
		borderBottomRightRadius: "0px",
		backgroundColor: "#fff",
		width: "100%",
	},
	addItemBtn: {
		backgroundColor: "#4caf50",
		color: "#fff",
		"&:hover": {
			backgroundColor: "#81c784",
		},
		borderTopLeftRadius: "0px",
		borderBottomLeftRadius: "0px",
	},
}));
