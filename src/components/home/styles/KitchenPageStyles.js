import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	root: {
		backgroundImage:
			"url(https://images.unsplash.com/photo-1470549813517-2fa741d25c92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)",
		backgroundSize: "cover",
	},
	mobileRoot: {
		backgroundImage:
			"url(https://images.unsplash.com/photo-1470549813517-2fa741d25c92?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)",
		backgroundSize: "cover",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		overflowY: "auto",
	},
	circularProgress: {
		color: "#a5d6a7",
	},
	circularProgressContainer: {
		position: "absolute",
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0,0,0,0.3)",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
}));
