import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	textField: {
		width: "100%",
		margin: "10px 0",
	},
	button: {
		float: "right",
		margin: "15px 0 0 0",
		color: "#fff",
		backgroundColor: "#4caf50",
		"&:hover": {
			backgroundColor: "#81c784",
		},
	},
	backButton: {
		float: "right",
		margin: "15px 15px 0 0",
		color: "#fff",
		backgroundColor: "#f50257",
		"&:hover": {
			backgroundColor: "#ff437f",
		},
	},
}));
