import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles/WelcomePageStyles";
import RecipeGrid from "../recipes/RecipeGrid";
import IngredientInput from "./IngredientInput";
import IngredientList from "./IngredientList";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { scrollToResults } from "./helpers/scrollToResults";
import { getResults } from "./helpers/getResults";

const WelcomePage = () => {
	const classes = useStyles();
	const { width } = useWindowDimensions();

	const [formData, setFormData] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [results, setResults] = useState(undefined);

	const handleChange = (evt) => {
		setFormData(evt.target.value);
	};

	const addIngredient = (evt) => {
		evt.preventDefault();
		setIngredients((ingredients) => [...ingredients, formData]);
	};

	const deleteIngredient = (ingredient) => {
		setIngredients((ingredients) =>
			ingredients.filter((ing) => ing !== ingredient)
		);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		setFormSubmitted(true);
	};

	useEffect(() => {
		if (formSubmitted) {
			if (results) {
				setResults(undefined);
			}
			getResults(ingredients, setResults);
		}
	}, [formSubmitted]);

	useEffect(() => {
		if (results) {
			scrollToResults();
			setFormSubmitted(false);
		}
	}, [results]);

	useEffect(() => {
		setFormData("");
	}, [ingredients]);

	return (
		<Grid
			container
			cols={width > 599 ? 2 : 1}
			spacing={1}
			className={width > 599 ? classes.root : classes.mobileRoot}
		>
			<IngredientInput
				ingredients={ingredients}
				handleChange={handleChange}
				formData={formData}
				addIngredient={addIngredient}
				mobile={width <= 599}
			/>
			<IngredientList
				ingredients={ingredients}
				handleSubmit={handleSubmit}
				deleteIngredient={deleteIngredient}
				mobile={width <= 599}
			/>
			{formSubmitted ? (
				<div className={classes.circularProgressContainer}>
					<CircularProgress
						size={50}
						classes={{ root: classes.circularProgress }}
					/>
				</div>
			) : null}
			{results ? (
				results.length ? (
					<div className={classes.results}>
						<Grid
							item
							cols={2}
							xs={12}
							style={{
								margin: "10px 0",
								padding: width > 599 ? "0 10px 0 40px" : 0,
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
				)
			) : null}
		</Grid>
	);
};

export default WelcomePage;
