import React, { useState } from "react";
import { useStyles } from "./styles/FilterPanelStyles";
import { Button } from "@material-ui/core";
import MacroInputs from "./MacroInputs";
import DietInputs from "./DietInputs";
import NameInput from "./NameInput";
import { useDispatch } from "react-redux";
import { loadFeed } from "../../actionCreators/recipeActionCreators";
import { ALL_DIETS, ALL_MACROS, INITIAL_FILTER_DATA } from "../../constants";
import useWindowDimensions from "../../customHooks/getWindowDimensions";

const FilterPanel = ({ setFiltered, filterData, setFilterData }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { width } = useWindowDimensions();
	const [checked, setChecked] = useState([]);

	// resets feed to show all recipes and removes all entered filter criteria
	const resetFeed = (evt) => {
		evt.preventDefault();
		dispatch(loadFeed());
		setFilterData(INITIAL_FILTER_DATA);
		setChecked([]);
	};

	// determines the name of the macro whose filter is being updated,
	// whether we are updating the operator (less than or greater than)
	// or the amount to compare against (grams of the macro),
	// and the actual value of that which we are updating
	//
	// Returns object containing all three
	const getNameValueCategory = (evt) => {
		let { name, value } = evt.target;
		let category;

		if (name.startsWith("operator")) {
			name = name.slice(9);
			category = "operator";
		} else if (name.startsWith("amount")) {
			name = name.slice(7);
			category = "amount";
		}
		return { name, value, category };
	};

	// updates filterData state based on the filter criteria that was just inputted by the user
	// (name will equal 'recipeName' if the user performed a search through the NavBar search bar)
	const handleChange = (evt) => {
		const { name, value, category } = getNameValueCategory(evt);
		setFilterData((filterData) => {
			if (ALL_MACROS.includes(name)) {
				return {
					...filterData,
					macros: {
						...filterData.macros,
						[name]: {
							...filterData.macros[name],
							[category]: value,
						},
					},
				};
			} else if (name === "recipeName") {
				return {
					...filterData,
					[name]: value,
				};
			}
		});
	};

	// use the filter criteria to update the feed to contain only results that satisfy the filter
	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(loadFeed(1, filterData));
		setFiltered(true);
	};

	return (
		<form
			className={width > 1039 ? classes.root : classes.mobileRoot}
			onSubmit={handleSubmit}
		>
			<DietInputs
				allDiets={ALL_DIETS}
				handleChange={handleChange}
				setFilterData={setFilterData}
				checked={checked}
				setChecked={setChecked}
				mobile={width <= 1039}
			/>
			<div
				style={{
					width: width <= 599 ? "100%" : "50%",
					justifyContent: "right",
				}}
			>
				<MacroInputs
					allMacros={ALL_MACROS}
					handleChange={handleChange}
					// setFilterData={setFilterData}
					mobile={width <= 1039}
				/>
				<NameInput handleChange={handleChange} />
			</div>
			<div style={{ width: "100%", margin: "15px 0 0 0" }}>
				<Button type="submit" className={classes.button}>
					Apply
				</Button>
				<Button onClick={resetFeed} className={classes.resetButton}>
					Reset
				</Button>
			</div>
		</form>
	);
};

export default FilterPanel;
