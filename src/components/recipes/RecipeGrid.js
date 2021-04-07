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
							<div className={classes.fabContainer}>
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
							<div className={classes.imgContainer}>
								<img
									src={recipe.image}
									alt={recipe.title}
									className={classes.img}
								/>
							</div>
							<GridListTileBar title={recipe.title} />
						</Link>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
};

export default RecipeGrid;
