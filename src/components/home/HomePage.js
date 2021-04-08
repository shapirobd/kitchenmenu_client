import React, { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import { useStyles } from "./styles/HomePageStyles";
import { loadFeed } from "../../actionCreators/recipeActionCreators";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import RecipeGrid from "../recipes/RecipeGrid";
import FilterPanel from "./FilterPanel";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import { INITIAL_FILTER_DATA } from "../../constants";

const HomePage = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { height, width } = useWindowDimensions();

	const feed = useSelector((state) => state.feed, shallowEqual);
	const page = useSelector((state) => state.page, shallowEqual);
	const totalResults = useSelector((state) => state.totalResults, shallowEqual);

	const [filtered, setFiltered] = useState(false);
	const [filterData, setFilterData] = useState(INITIAL_FILTER_DATA);

	// when the user changes the page, we update the feed in redux state to includes
	// recipes from the selected page
	const handleChange = (event, value) => {
		filtered
			? dispatch(loadFeed(value, filterData))
			: dispatch(loadFeed(value));
	};

	// updates the feed upon initial render as well as page change
	useEffect(() => {
		filtered ? dispatch(loadFeed(page, filterData)) : dispatch(loadFeed(page));
	}, [page, dispatch, filtered]);

	return (
		<>
			<div className={width > 599 ? classes.root : classes.mobileRoot}>
				<div
					style={
						width > 599
							? { width: `${width - 240}px`, height: `${height}px` }
							: { width: "100%", height: "100%" }
					}
				>
					<FilterPanel
						setFiltered={setFiltered}
						filterData={filterData}
						setFilterData={setFilterData}
						mobile={width < 599}
					/>
					<div className={classes.mainContent}>
						<Pagination
							variant="outlined"
							count={Math.ceil(totalResults / 40)}
							defaultPage={1}
							siblingCount={0}
							page={page}
							onChange={handleChange}
							className={classes.pagination}
						/>
						<RecipeGrid feed={feed} />
						<Pagination
							variant="outlined"
							count={Math.ceil(totalResults / 40)}
							defaultPage={1}
							siblingCount={0}
							page={page}
							onChange={handleChange}
							className={classes.pagination}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
