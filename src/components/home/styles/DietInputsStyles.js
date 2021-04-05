import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	mobileList: {
		columnCount: 1,
	},
	list: {
		columnCount: 2,
	},
	listItem: {
		verticalAlign: "top",
	},
	checkbox: {
		padding: 0,
	},
}));
