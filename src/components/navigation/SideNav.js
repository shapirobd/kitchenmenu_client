import React from "react";
import { useStyles } from "./styles/SideNavStyles";
import { Button } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { useSelector } from "react-redux";
import SideNavDrawer from "./SideNavDrawer";

const SideNav = () => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const user = useSelector((state) => state.user);

	const btnProps = {
		name: "sideBtn",
	};

	return user ? (
		<React.Fragment>
			<Button onClick={toggleDrawer("left", true)} className={classes.toggler}>
				<ArrowRightIcon />
			</Button>
			<SideNavDrawer state={state} toggleDrawer={toggleDrawer} user={user} />
		</React.Fragment>
	) : null;
};

export default SideNav;
