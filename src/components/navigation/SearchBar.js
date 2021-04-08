import React from "react";
import { useStyles } from "./styles/SearchBarStyles";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";

// Form that contains search bar allowing user to search for recipes by name
const SearchBar = ({ handleSearch, handleChange }) => {
	const classes = useStyles();
	const { width } = useWindowDimensions();

	return (
		<form
			className={width <= 599 ? classes.searchMobile : classes.search}
			onSubmit={handleSearch}
		>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				placeholder="Search by name…"
				classes={{
					root: classes.inputRoot,
					input: classes.input,
				}}
				inputProps={{ "aria-label": "search" }}
				onChange={handleChange}
			/>
		</form>
	);
};

export default SearchBar;
