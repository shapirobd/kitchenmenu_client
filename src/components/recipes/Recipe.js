import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
	bookmarkRecipe,
	unbookmarkRecipe,
} from "../../actionCreators/bookmarkActionCreators.js";
import {
	addEatenMeal,
	removeEatenMeal,
} from "../../actionCreators/trackerActionCreators";
import { useStyles } from "./styles/RecipeStyles";
import PieChart from "./PieChart";
import NutrientList from "./NutrientList";
import DietList from "./DietList";
import RecipeSteps from "./RecipeSteps";
import RecipeIngredients from "./RecipeIngredients";
import { generateMacros } from "../../helpers/generateMacros";
import { Typography, Grid, Button, ButtonGroup } from "@material-ui/core";
import convertDate from "../../helpers/convertDate";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import { getRecipe } from "./helpers/getRecipe";

// Component containing all infomration on a given recipe, including:
// - Diets that the recipe satisfies
// - An image of the recipe
// - Percent calories coming from fat, carbs and protein
// - Macronutrient breakdown in form of a table
// - Ingredients required to make the recipe
// - Step-by-step instructions to make the recipe
const Recipe = ({ user }) => {
	const classes = useStyles();
	const { width } = useWindowDimensions();
	const { recipeId } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const { bookmarks, eatenMeals } = user;

	const [isBookmarked, setIsBookmarked] = useState(
		!bookmarks ? false : user.bookmarks.includes(+recipeId)
	);
	const [isEaten, setIsEaten] = useState(
		!eatenMeals[convertDate()]
			? false
			: eatenMeals[convertDate()].includes(+recipeId)
	);
	const [currentRecipe, setCurrentRecipe] = useState(null);

	// Adds or removes the recipe from ther user's eaten meals within the database
	// as well as redux state (depending on value of isEaten state)
	const toggleEaten = () => {
		if (!user.username) {
			history.push("/signup");
		} else {
			if (!isEaten) {
				const { nutrients } = currentRecipe.recipe.nutrition;
				dispatch(
					addEatenMeal(
						user.username,
						currentRecipe.recipe.id,
						convertDate(),
						nutrients
					)
				);
			} else {
				dispatch(
					removeEatenMeal(user.username, currentRecipe.recipe.id, convertDate())
				);
			}
			setIsEaten(!isEaten);
		}
	};

	// Adds or removes the recipe from ther user's bookmarks within the database
	// as well as redux state (depending on value of isBookmarked state)
	const toggleBookmarked = () => {
		if (!user.username) {
			history.push("/signup");
		} else {
			if (!isBookmarked) {
				dispatch(bookmarkRecipe(user.username, currentRecipe.recipe.id));
			} else {
				dispatch(unbookmarkRecipe(user.username, currentRecipe.recipe.id));
			}
			setIsBookmarked(!isBookmarked);
		}
	};

	// once recipeId is given a value, retrieve all information on the recipe from
	// the Spoonacular API
	useEffect(() => {
		getRecipe(recipeId, setCurrentRecipe);
	}, [recipeId]);

	return (
		<div className={width > 599 ? classes.root : classes.mobileRoot}>
			{currentRecipe ? (
				<>
					<Grid container spacing={3} className={classes.grid}>
						<Grid item xs={12} md={7} className={classes.main}>
							<Typography variant="h4" className={classes.heading}>
								{currentRecipe.recipe.title}
							</Typography>
							<img
								src={currentRecipe.recipe.image}
								className={classes.image}
								alt={currentRecipe.recipe.image}
							/>
							<ButtonGroup fullWidth className={classes.buttonGroup}>
								<Button className={classes.button} onClick={toggleEaten}>
									{isEaten
										? "Remove from today's meals"
										: "Add to today's meals"}
								</Button>
								<Button className={classes.button} onClick={toggleBookmarked}>
									{isBookmarked ? "Unbookmark" : "Bookmark"}
								</Button>
							</ButtonGroup>
							{currentRecipe.recipe.extendedIngredients.length ? (
								<RecipeIngredients
									ingredients={currentRecipe.recipe.extendedIngredients}
								/>
							) : null}
							{currentRecipe.instructions.length ? (
								<RecipeSteps steps={currentRecipe.instructions[0].steps} />
							) : null}
						</Grid>
						<Grid item xs={12} md={4} className={classes.infoPanel}>
							<DietList diets={currentRecipe.recipe.diets} />
							<PieChart
								caloricBreakdown={
									currentRecipe.recipe.nutrition.caloricBreakdown
								}
							/>
							<NutrientList
								title="Macronutrients"
								data={generateMacros(currentRecipe.recipe.nutrition.nutrients)}
							></NutrientList>
						</Grid>
					</Grid>
				</>
			) : null}
		</div>
	);
};

export default Recipe;
