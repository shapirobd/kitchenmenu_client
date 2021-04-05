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
}));
