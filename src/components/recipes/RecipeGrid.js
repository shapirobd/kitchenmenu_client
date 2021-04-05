import React from "react";
import { Link } from "react-router-dom";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import ClearIcon from "@material-ui/icons/Clear";
import { useStyles } from "./styles/RecipeGridStyles";
import useWindowDimensions from "../../customHooks/getWindowDimensions";

const RecipeGrid = ({ feed, areBookmarks, removeBookmark, ingredients }) => {
	const classes = useStyles();

	const { width } = useWindowDimensions();

	if (ingredients) {
		feed.sort((a, b) =>
			a.missedIngredientCount > b.missedIngredientCount ? 1 : -1
		);
	}

	const getLinkProps = (id) => ({
		role: "link",
		name: id,
	});

	return (
		<div className={classes.root}>
			{console.log(width / 400)}
			<GridList
				cellHeight={200}
				cols={Math.round(width / 400)}
				className={classes.gridList}
			>
				{feed.map((recipe) => (
					<GridListTile
						key={recipe.image}
						style={{
							position: "relative",
							// backgroundImage: width <= 599 ? `url(${recipe.image})` : null,
							// backgroundSize: width <= 599 ? "cover" : null,
							// backgroundOrigin: width <= 599 ? "content-box" : null,
							margin: width <= 599 ? "5px 0" : 0,
						}}
					>
						{ingredients ? (
							<GridListTileBar
								className={
									recipe.missedIngredientCount >= 4
										? classes.missingIngredients4
										: classes[
												`missingIngredients${recipe.missedIngredientCount}`
										  ]
								}
								title={`Missing ${recipe.missedIngredientCount}`}
							/>
						) : null}
						{areBookmarks ? (
							<div
								style={{
									position: "absolute",
									right: 0,
								}}
							>
								<Fab
									color="secondary"
									size="small"
									classes={{ root: classes.fab }}
									onClick={() => removeBookmark(recipe.id)}
								>
									<ClearIcon />
								</Fab>
							</div>
						) : null}
						<Link to={`/recipes/${recipe.id}`} {...getLinkProps(recipe.id)}>
							{/* {width > 599 ? ( */}
							<div
								style={{
									height: "100%",
									width: "100%",
									display: "flex",
									alignItems: "center",
								}}
							>
								<img
									src={recipe.image}
									alt={recipe.title}
									className={classes.img}
								/>
							</div>

							{/* ) : null} */}
							<GridListTileBar title={recipe.title} />
						</Link>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
};

export default RecipeGrid;
