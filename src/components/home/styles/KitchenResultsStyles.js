import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	results: {
		width: "100%",
		backgroundColor: "#fff",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		borderRadius: "5px",
		margin: "0 0 10px 0",
		paddingBottom: "30px",
	},
	missingIngredientsBanner: {
		width: "100%",
		height: "80px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
}));
