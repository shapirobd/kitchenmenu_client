import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		width: "95%",
	},
	gridList: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
	img: {
		minWidth: "100%",
		minHeight: "100%",
		// boxSizing: "content-box",
	},
	missingIngredients0: {
		top: 0,
		right: 0,
		backgroundColor: "#378e3c",
		borderBottomRightRadius: "15px",
		width: "35%",
		boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
	},
	missingIngredients1: {
		top: 0,
		right: 0,
		backgroundColor: "#cddc39",
		borderBottomRightRadius: "15px",
		width: "35%",
		boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
		"& > div": {
			color: "#333",
		},
	},
	missingIngredients2: {
		top: 0,
		right: 0,
		backgroundColor: "#ffc107",
		borderBottomRightRadius: "15px",
		width: "35%",
		boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
		"& > div": {
			color: "#333",
		},
	},
	missingIngredients3: {
		top: 0,
		right: 0,
		backgroundColor: "#ff7722",
		borderBottomRightRadius: "15px",
		width: "35%",
		boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
	},
	missingIngredients4: {
		top: 0,
		right: 0,
		backgroundColor: "#e83935",
		borderBottomRightRadius: "15px",
		width: "35%",
		boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
	},
	fab: {
		borderRadius: 0,
		width: "40px",
		height: "20px",
	},
}));
