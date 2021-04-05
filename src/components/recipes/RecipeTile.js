import React from "react";
import { GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const RecipeTile = ({ recipe }) => {
	return (
		<GridListTile key={recipe.image}>
			<img src={recipe.image} alt={recipe.title} />
			<GridListTileBar
				title={recipe.title}
				subtitle={<span>by: {recipe.author}</span>}
				actionIcon={
					<IconButton aria-label={`info about ${recipe.title}`}>
						<InfoIcon />
					</IconButton>
				}
			/>
		</GridListTile>
	);
};

export default RecipeTile;
