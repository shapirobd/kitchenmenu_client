import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles/KitchenPageStyles";
import IngredientInput from "./IngredientInput";
import IngredientList from "./IngredientList";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { scrollToResults } from "./helpers/scrollToResults";
import { getResults } from "./helpers/getResults";
import KitchenResults from "./KitchenResults";

const KitchenPage = () => {
	const classes = useStyles();
	const { width } = useWindowDimensions();

	const [formData, setFormData] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [results, setResults] = useState(undefined);

	// update formData when either of the text fields are typed into
	const handleChange = (evt) => {
		setFormData(evt.target.value);
	};

	// add ingredient from formData to ingredients state and reset formData to empty string
	const addIngredient = (evt) => {
		evt.preventDefault();
		setIngredients((ingredients) => [...ingredients, formData]);
		setFormData("");
	};

	// remove given ingredient from ingredients state
	const deleteIngredient = (ingredient) => {
		setIngredients((ingredients) =>
			ingredients.filter((ing) => ing !== ingredient)
		);
	};

	// when the "Submit" button is clicked, update
	// formSubmitted to be true
	const handleSubmit = (evt) => {
		evt.preventDefault();
		setFormSubmitted(true);
	};
	// if formSubmitted was just changed to true, set results state
	// to include recipes that include the given ingredients
	// (if there are already results on the page before the form is submitted,
	// set results to be undefined before getting the new results to display loading animation)
	useEffect(() => {
		if (formSubmitted) {
			if (results) setResults(undefined);
			getResults(ingredients, setResults);
		}
	}, [formSubmitted]);

	// when a search is complete, scroll to results and set formSubmitted to be false
	useEffect(() => {
		if (results) {
			scrollToResults(width <= 599);
			setFormSubmitted(false);
		}
	}, [results]);

	return (
		<Grid
			container
			cols={width > 599 ? 2 : 1}
			spacing={1}
			className={width > 599 ? classes.root : classes.mobileRoot}
			id="kitchenContainer"
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
				<KitchenResults
					results={results}
					mobile={width <= 599}
					ingredients={ingredients}
				/>
			) : null}
		</Grid>
	);
};

export default KitchenPage;
