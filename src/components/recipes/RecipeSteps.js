import React from "react";
import { useStyles } from "./styles/RecipeStepsStyles";
import {
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	Divider,
} from "@material-ui/core";

const RecipeSteps = ({ steps }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="h5">Steps</Typography>
			<List>
				{steps.map((step) => (
					<div key={step.number}>
						<Divider />
						<ListItem alignItems="flex-start" className={classes.step}>
							<ListItemAvatar>
								<Avatar>{step.number}</Avatar>
							</ListItemAvatar>
							<ListItemText>{step.step}</ListItemText>
						</ListItem>
					</div>
				))}
			</List>
		</div>
	);
};

export default RecipeSteps;
