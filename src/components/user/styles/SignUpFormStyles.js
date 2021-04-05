import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	form: {
		margin: "30px 0",
		backgroundColor: "#fff",
		padding: "40px",
		borderRadius: "5px",
	},
	textField: {
		display: "block",
		width: "100%",
		borderRadius: "5px 5px 0 0",
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
}));
