import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	navLink: {
		color: "#fff",
		textDecoration: "none",
	},
	signupBtn: {
		backgroundColor: "#43a047",
	},
	userOptions: { float: "right" },
	mobileUserOptions: {
		width: "50%",
		float: "right",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
	},
}));
