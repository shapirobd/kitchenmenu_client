import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import RecipeGrid from "./RecipeGrid";
import { Typography, Divider } from "@material-ui/core";
import { useStyles } from "./styles/BookmarksPageStyles";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import { unbookmarkRecipe } from "../../actionCreators/bookmarkActionCreators";

const BookmarksPage = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const bookmarks = useSelector((state) => state.user.bookmarks);
	const [fullBookmarks, setFullBookmarks] = useState([]);
	const { width } = useWindowDimensions();

	const removeBookmark = (id) => {
		setFullBookmarks(fullBookmarks.filter((bookmark) => bookmark.id !== id));
		dispatch(unbookmarkRecipe(user.username, id));
	};

	useEffect(() => {
		const loadBookmarks = async () => {
			const resp = await axios.get(
				`https://api.spoonacular.com/recipes/informationBulk`,
				{
					params: {
						ids: bookmarks.join(","),
						apiKey: process.env.REACT_APP_SPOON_API_KEY,
					},
				}
			);
			setFullBookmarks(resp.data);
		};
		if (bookmarks.length) loadBookmarks();
	}, [bookmarks]);

	return (
		<div className={width > 599 ? classes.root : classes.mobileRoot}>
			<div
				style={
					width > 599
						? { width: `${width - 240}px`, height: `100%` }
						: { width: "100%", height: "100%" }
				}
				className={classes.main}
			>
				<Typography variant="h4" className={classes.header}>
					Bookmarks
				</Typography>
				<Divider variant="inset" className={classes.divider} />
				<div className={classes.gridContainer}>
					<RecipeGrid
						feed={fullBookmarks}
						areBookmarks={true}
						removeBookmark={removeBookmark}
					/>
				</div>
			</div>
		</div>
	);
};

export default BookmarksPage;
