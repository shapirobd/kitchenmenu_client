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
import axios from "axios";
import convertDate from "../../helpers/convertDate";
import useWindowDimensions from "../../customHooks/getWindowDimensions";

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

	useEffect(() => {
		const getRecipe = async () => {
			try {
				const recipe = await axios.get(
					`https://api.spoonacular.com/recipes/${recipeId}/information`,
					{
						params: {
							apiKey: "73baf9bb95a14f5fb4d71e2f12ab8479",
							includeNutrition: true,
						},
					}
				);
				const instructions = await axios.get(
					`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions`,
					{
						params: {
							apiKey: "73baf9bb95a14f5fb4d71e2f12ab8479",
							stepBreakdown: true,
						},
					}
				);
				setCurrentRecipe({
					recipe: recipe.data,
					instructions: instructions.data,
				});
			} catch (e) {
				console.error(e);
			}
		};
		getRecipe();
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
								title="Caloric Breakdown"
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
