import React from "react";
import { useStyles } from "./styles/MacroInputsStyles";
import {
	TextField,
	FormControl,
	Grid,
	InputAdornment,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";

// a input group that allows you to select an operator (less than or greater than)
// and an amount (in grams) for a given macronutrient in the FilterPanel component
const MacroInput = ({ mobile, macro, handleChange }) => {
	const classes = useStyles();

	return (
		<Grid
			container
			cols={mobile ? 2 : 3}
			spacing={2}
			alignItems="flex-end"
			key={macro}
			className={classes.gridContainer}
		>
			<Grid item cols={1} xs={6} style={{ paddingRight: 0 }}>
				<FormControl variant="outlined" fullWidth size="small">
					<Select
						name={`operator-${macro}`}
						size="small"
						label="Comparison"
						onChange={handleChange}
						className={classes.selectField}
					>
						<option value={"<"} className={classes.selectOption}>
							Less than
						</option>
						<option value={">"} className={classes.selectOption}>
							Greater than
						</option>
					</Select>
				</FormControl>
			</Grid>
			<Grid item cols={mobile ? 1 : 2} xs={6} style={{ paddingLeft: 0 }}>
				<TextField
					name={`amount-${macro}`}
					variant="outlined"
					size="small"
					label={macro}
					onChange={handleChange}
					style={{ width: "100%" }}
					InputProps={{
						endAdornment: <InputAdornment position="end">g</InputAdornment>,
						className: classes.textField,
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default MacroInput;
