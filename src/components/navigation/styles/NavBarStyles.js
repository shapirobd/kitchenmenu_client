import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	appBar: {
		backgroundColor: "#388e3c",
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	logo: {
		height: "50px",
		margin: "4px 0 0 0",
	},
	navLink: {
		color: "#fff",
		textDecoration: "none",
	},
}));
