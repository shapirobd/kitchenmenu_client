import { makeStyles, fade } from "@material-ui/core/styles";

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
	signupBtn: {
		backgroundColor: "#43a047",
	},
	search: {
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translateX(-50%) translateY(-50%)",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		width: "40vw",
		// [theme.breakpoints.up("sm")]: {
		// 	marginLeft: theme.spacing(3),
		// 	width: "auto",
		// },
	},
	searchMobile: {
		width: "65%",
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	input: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));
