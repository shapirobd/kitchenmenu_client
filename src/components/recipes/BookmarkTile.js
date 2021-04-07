import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GridListTile, GridListTileBar, Badge } from "@material-ui/core";
import { useStyles } from "./styles/BookmarkTileStyles";
import { unbookmarkRecipe } from "../../actionCreators/bookmarkActionCreators.js";
import ClearIcon from "@material-ui/icons/Clear";

const BookmarkTile = ({ user, recipe, removeBookmark }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(unbookmarkRecipe(user.username, recipe.id));
		removeBookmark(recipe.id);
	};

	return (
		<Badge
			badgeContent={<ClearIcon className={classes.icon} />}
			className={classes.badge}
			onClick={handleClick}
		>
			<GridListTile
				key={recipe.id}
				name={recipe.id}
				cols={1}
				className={classes.gridTile}
			>
				<Link to={`/recipes/${recipe.id}`} style={{ overflow: "hidden" }}>
					<img src={recipe.image} alt={recipe.title} className={classes.img} />
					<GridListTileBar title={recipe.title} />
				</Link>
			</GridListTile>
		</Badge>
	);
};

export default BookmarkTile;
