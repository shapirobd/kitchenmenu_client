import React from "react";
import EcoIcon from "@material-ui/icons/Eco";
import { useStyles } from "./styles/DietListStyles";
import {
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
} from "@material-ui/core";

const DietList = ({ diets }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List>
				{diets.map((diet) => (
					<ListItem key={diet}>
						<ListItemAvatar>
							<Avatar className={classes.avatar}>
								<EcoIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={diet.toUpperCase()} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default DietList;
