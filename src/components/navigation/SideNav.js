import React from "react";
import { useStyles } from "./styles/SideNavStyles";
import { Button } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { useSelector } from "react-redux";
import SideNavDrawer from "./SideNavDrawer";
import { toggleDrawer } from "./helpers/toggleDrawer";

// Contains button that can be clicked to display the SideNavDrawer
const SideNav = ({ state, setState }) => {
	const classes = useStyles();

	const user = useSelector((state) => state.user);

	return user ? (
		<React.Fragment>
			<Button
				onClick={toggleDrawer("left", true, setState)}
				className={classes.toggler}
			>
				<ArrowRightIcon />
			</Button>
			<SideNavDrawer setState={setState} state={state} user={user} />
		</React.Fragment>
	) : null;
};

export default SideNav;
