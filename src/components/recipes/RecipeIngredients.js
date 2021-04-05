import React from "react";
import { useStyles } from "./styles/RecipeIngredientsStyles";
import {
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	Divider,
} from "@material-ui/core";
import useWindowDimensions from "../../customHooks/getWindowDimensions";

const RecipeIngredients = ({ ingredients }) => {
	const classes = useStyles();
	const { width } = useWindowDimensions();

	return (
		<div className={classes.main}>
			<Typography variant="h5">Ingredients</Typography>
			<Divider style={{ marginTop: "8px" }} />
			<List style={{ columns: width > 599 ? 2 : 1 }}>
				{ingredients.map((ingredient) => (
					<div key={ingredient.id}>
						<ListItem alignItems="flex-start" classes={{ root: classes.root }}>
							<ListItemText>{ingredient.name}</ListItemText>
						</ListItem>
					</div>
				))}
			</List>
		</div>
	);
};

export default RecipeIngredients;
