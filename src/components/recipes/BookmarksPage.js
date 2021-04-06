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
	const { height, width } = useWindowDimensions();

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
						apiKey: "73baf9bb95a14f5fb4d71e2f12ab8479",
					},
				}
			);
			setFullBookmarks(resp.data);
		};
		if (bookmarks.length) loadBookmarks();
	}, [bookmarks]);

	return (
		<>
			<div className={width > 599 ? classes.root : classes.mobileRoot}>
				<div
					style={
						width > 599
							? // ? { width: `${width - 240}px`, height: `${height}px` }
							  { width: `${width - 240}px`, height: `100%` }
							: { width: "100%", height: "100%" }
					}
				>
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: "white",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-around",
							alignItems: "center",
							borderRadius: "5px",
							margin: "0 0 10px 0",
							paddingBottom: "30px",
							position: "relative",
						}}
					>
						<Typography
							variant="h4"
							style={{
								margin: "20px",
								position: "absolute",
								top: "5%",
								left: "5%",
							}}
						>
							Bookmarks
						</Typography>
						<Divider
							variant="inset"
							style={{
								margin: "0",
								width: "100%",
								position: "absolute",
								top: "15%",
							}}
						/>
						<div style={{ position: "absolute", top: "20%", width: "95%" }}>
							<RecipeGrid
								feed={fullBookmarks}
								areBookmarks={true}
								removeBookmark={removeBookmark}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookmarksPage;
