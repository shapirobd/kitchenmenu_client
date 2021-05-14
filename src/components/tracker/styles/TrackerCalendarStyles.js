import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	calendar: {
		border: "none",
		width: "100%",
		height: "100%",
		"& > div": {
			height: "fit-content",
		},
	},
	calendarDiv: {
		backgroundColor: "#fff",
		width: "88%",
		height: "38%",
		padding: "30px",
		borderRadius: "5px",
	},
	mobileCalendarDiv: {
		backgroundColor: "#fff",
		width: "88%",
		height: "38%",
		padding: "30px",
		borderRadius: "5px",
		margin: "10px 0 7px 0",
	},
}));
