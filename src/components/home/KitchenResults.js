import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles/KitchenResultsStyles";
import RecipeGrid from "../recipes/RecipeGrid";

// shows results when searching for recipes based on ingredients
// (search performed in KitchenPage)
const KitchenResults = ({ results, mobile, ingredients }) => {
	const classes = useStyles();

	return (
		<>
			{results.length ? (
				<div className={classes.results}>
					<Grid
						item
						cols={2}
						xs={12}
						style={{
							margin: "10px 0",
							padding: mobile ? 0 : "0 10px 0 40px",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<RecipeGrid feed={results} ingredients={ingredients} />
					</Grid>
				</div>
			) : (
				<div className={classes.missingIngredientsBanner}>
					<Typography
						style={{
							color: "red",
							textAlign: "center",
						}}
					>
						No results found
					</Typography>
				</div>
			)}
		</>
	);
};

export default KitchenResults;
