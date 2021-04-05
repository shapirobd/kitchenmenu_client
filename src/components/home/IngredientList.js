import React from "react";
import { Grid, Typography, Button, Chip, Divider } from "@material-ui/core";
import { useStyles } from "./styles/IngredientListStyles";

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
				<div
					style={{
						height: "87%",
						width: "100%",
						backgroundColor: "rgba(255,255,255,0.5)",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							flexWrap: "wrap",
							margin: "10px",
						}}
					>
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
					style={{
						position: "absolute",
						bottom: "0",
						width: "100%",
						height: "10%",
						boxShadow: "-2px 0px 8px rgba(0,0,0,0.5)",
					}}
				>
					Submit
				</Button>
			</div>
		</Grid>
	);
};

export default IngredientList;
