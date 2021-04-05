import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		color: "#fff !important",
	},
	label: {
		color: "#fff !important",
	},
	main: {
		width: "50%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	mobileMain: {
		width: "100%",
	},
	form: {
		backgroundColor: "#fff",
		padding: "20px",
		borderRadius: "5px",
	},
	button: {
		marginRight: theme.spacing(1),
		color: "#fff",
		"&:disabled": {
			color: "#aaa",
		},
	},
	nextButton: {
		backgroundColor: "#378e3c",
		"&:hover": {
			backgroundColor: "#81c784",
		},
	},
	skipButton: {
		color: "#000 !important",
		backgroundColor: "#fff",
		"&:hover": {
			backgroundColor: "#ccc",
		},
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));
