import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles/WelcomePageStyles";
import RecipeGrid from "../recipes/RecipeGrid";
import IngredientInput from "./IngredientInput";
import IngredientList from "./IngredientList";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CircularProgress from "@material-ui/core/CircularProgress";
import $ from "jquery";

const WelcomePage = () => {
	const classes = useStyles();
	const { width } = useWindowDimensions();

	const [formData, setFormData] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [results, setResults] = useState(undefined);

	$(".expandBtn").on("click", function () {
		console.log($(".makeStyles-root-22").height());
		$(".makeStyles-root-13").animate(
			// { scrollTop: $(".results").offset().top - 100 },
			{ scrollTop: $(".makeStyles-root-22").height() },
			1000
		);
		$(this).remove();
	});

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
			setResults(undefined);
			const getResults = async () => {
				try {
					const ingredientsParams = ingredients.join(",");
					const recipes = await axios.get(
						"https://api.spoonacular.com/recipes/findByIngredients",
						{
							params: {
								apiKey: "73baf9bb95a14f5fb4d71e2f12ab8479",
								offset: 0,
								number: 900,
								ingredients: ingredientsParams,
							},
						}
					);
					setResults(recipes.data);
				} catch (e) {
					console.error(e);
				}
			};
			getResults();
		}
	}, [formSubmitted]);

	useEffect(() => {
		if (results) {
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
				<div
					className={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<CircularProgress />
				</div>
			) : null}
			{results ? (
				results.length ? (
					<div
						style={{
							width: "100%",
							backgroundColor: "white",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-around",
							alignItems: "center",
							borderRadius: "5px",
							margin: "0 0 10px 0",
							paddingBottom: "30px",
						}}
						className="results"
					>
						<div
							style={{
								// position: "absolute",
								margin: "-100px auto 50px auto",
								padding: "10px",
								top: "90%",
								left: "50%",
								transform: "translateX(-50%)",
								backgroundColor: "#fff",
								borderRadius: "50%",
							}}
							className="expandBtn"
						>
							<ExpandMoreIcon fontSize="large" />
						</div>
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
					<div
						style={{
							width: "100%",
							height: "80px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
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
