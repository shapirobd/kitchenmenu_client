import React from "react";
import {
	Grid,
	Typography,
	TextField,
	FormGroup,
	Button,
} from "@material-ui/core";
import { useStyles } from "./styles/IngredientInputStyles";

// includes the form where the user can type ingredients that they want
// to base their search on
const IngredientInput = ({
	ingredients,
	handleChange,
	formData,
	addIngredient,
	mobile,
}) => {
	const classes = useStyles();

	return (
		<Grid
			item
			cols={1}
			sm={8}
			className={mobile ? classes.topGridItem : classes.leftGridItem}
		>
			<form className={classes.form}>
				<div className={mobile ? classes.mobileMain : classes.main}>
					<Typography
						variant={mobile ? "h5" : "h4"}
						className={classes.heading}
					>
						What's in your kitchen?
					</Typography>
					<FormGroup row>
						<TextField
							variant="outlined"
							size="small"
							onChange={handleChange}
							value={formData}
							error={ingredients.includes(formData)}
							helperText={
								ingredients.includes(formData)
									? `${formData} has already been selected.`
									: null
							}
							InputProps={{ className: classes.textField }}
						/>
						<Button onClick={addIngredient} className={classes.addItemBtn}>
							Add Item
						</Button>
					</FormGroup>
				</div>
			</form>
		</Grid>
	);
};

export default IngredientInput;
