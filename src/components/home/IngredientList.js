import React from "react";
import { Grid, Typography, Button, Chip, Divider } from "@material-ui/core";
import { useStyles } from "./styles/IngredientListStyles";

// includes the ingredients that the user has entered into & added through IngredientInput
const IngredientList = ({
	ingredients,
	handleSubmit,
	deleteIngredient,
	mobile,
}) => {
	const classes = useStyles();

	return (
		<Grid
			item
			cols={1}
			sm={4}
			className={mobile ? classes.bottomGridItem : classes.rightGridItem}
		>
			<div className={mobile ? classes.mobileIngredients : classes.ingredients}>
				<Typography variant="h6" className={classes.heading}>
					Selected Ingredients
				</Typography>
				<Divider style={{ width: "100%" }} />
				<div className={classes.ingredientListContainer}>
					<div className={classes.ingredientList}>
						{ingredients.map((ingredient) => (
							<Chip
								key={ingredient}
								label={ingredient}
								onDelete={() => deleteIngredient(ingredient)}
								style={{ margin: "5px" }}
							/>
						))}
					</div>
				</div>
				<Button
					type="submit"
					onClick={handleSubmit}
					className={classes.submitBtn}
				>
					Submit
				</Button>
			</div>
		</Grid>
	);
};

export default IngredientList;
