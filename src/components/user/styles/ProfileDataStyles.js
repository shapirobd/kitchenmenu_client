import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	editIcon: {
		position: "absolute",
		top: 0,
		right: 0,
		margin: "20px",
		color: "gray",
		"&:hover": {
			color: "#000",
		},
	},
	userInfo: {
		padding: "20px 0",
		width: "80%",
		height: "80%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
}));
