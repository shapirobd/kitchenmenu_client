import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { useStyles } from "./styles/DietInputsStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";

const DietInputs = ({
	allDiets,
	setFilterData,
	setChecked,
	checked,
	mobile,
}) => {
	const classes = useStyles();

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];
		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		setChecked(newChecked);
	};

	useEffect(() => {
		setFilterData((filterData) => ({
			...filterData,
			diets: checked,
		}));
	}, [checked, setFilterData]);

	return (
		<div
			style={{
				float: "left",
				width: mobile ? "100%" : "50%",
				height: "100%",
			}}
		>
			<Typography>Diets</Typography>
			<List className={mobile ? classes.mobileList : classes.list}>
				{allDiets.map((diet, idx) => {
					const labelId = `checkbox-list-label-${idx}`;

					return (
						<ListItem
							key={diet}
							dense
							onClick={handleToggle(diet)}
							className={classes.listItem}
						>
							<ListItemIcon>
								<Checkbox
									edge="start"
									checked={checked.indexOf(diet) !== -1}
									tabIndex={-1}
									disableRipple
									inputProps={{ "aria-labelledby": labelId }}
									className={classes.checkbox}
								/>
							</ListItemIcon>
							<ListItemText id={labelId} primary={diet.toUpperCase()} />
						</ListItem>
					);
				})}
			</List>
		</div>
	);
};

export default DietInputs;
