import React, { useState } from "react";
import { useStyles } from "./styles/FilterPanelStyles";
import { Button } from "@material-ui/core";
import MacroInputs from "./MacroInputs";
import DietInputs from "./DietInputs";
import { useDispatch } from "react-redux";
import { loadFeed } from "../../actionCreators/recipeActionCreators";
import { ALL_DIETS, ALL_MACROS, INITIAL_FILTER_DATA } from "../../constants";
import useWindowDimensions from "../../customHooks/getWindowDimensions";

const FilterPanel = ({ setFiltered, filterData, setFilterData, mobile }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { width } = useWindowDimensions();

	const [checked, setChecked] = useState([]);

	const resetFeed = (evt) => {
		evt.preventDefault();
		dispatch(loadFeed());
		setFilterData(INITIAL_FILTER_DATA);
		setChecked([]);
	};

	const handleChange = (evt) => {
		let { name, value } = evt.target;
		let category;

		if (name.startsWith("operator")) {
			name = name.slice(9);
			category = "operator";
		} else if (name.startsWith("amount")) {
			name = name.slice(7);
			category = "amount";
		}

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
			<MacroInputs
				allMacros={ALL_MACROS}
				handleChange={handleChange}
				setFilterData={setFilterData}
				mobile={width <= 1039}
			/>
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
