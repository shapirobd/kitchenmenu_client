import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	gridContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	selectOption: {
		margin: "5px",
	},
	selectField: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	},
	textField: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
}));
