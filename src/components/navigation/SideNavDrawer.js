import React from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles/SideNavStyles";
import {
	SwipeableDrawer,
	List,
	Divider,
	ListItem,
	ListItemText,
	ListItemIcon,
} from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import KitchenIcon from "@material-ui/icons/Kitchen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GridOnIcon from "@material-ui/icons/GridOn";
import { toggleDrawer } from "./helpers/toggleDrawer";

// Side navigation menu that contains links to take you to the different routes
// within the app
const SideNavDrawer = ({ setState, state, user }) => {
	const classes = useStyles();
	const history = useHistory();

	const handleClick = (evt, href) => {
		evt.preventDefault();
		history.push(href);
	};

	return (
		<SwipeableDrawer
			anchor={"left"}
			open={state["left"]}
			onClose={toggleDrawer("left", false, setState)}
			onOpen={toggleDrawer("left", true, setState)}
			className={classes.drawer}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerContainer}>
				<List>
					<ListItem
						button
						component="a"
						href={`/ingredients`}
						onClick={(evt) => handleClick(evt, `/ingredients`)}
					>
						<ListItemIcon>
							<KitchenIcon />
						</ListItemIcon>
						<ListItemText primary="My Kitchen" />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem
						button
						component="a"
						href={`/`}
						onClick={(evt) => handleClick(evt, `/`)}
					>
						<ListItemIcon>
							<GridOnIcon />
						</ListItemIcon>
						<ListItemText primary="All Recipes" />
					</ListItem>
					<ListItem
						button
						component="a"
						href={`/bookmarks/${user.username}`}
						onClick={(evt) => handleClick(evt, `/bookmarks/${user.username}`)}
					>
						<ListItemIcon>
							<BookmarkIcon />
						</ListItemIcon>
						<ListItemText primary="Bookmarks" />
					</ListItem>
					<ListItem
						button
						component="a"
						href={`/tracker`}
						onClick={(evt) => handleClick(evt, `/tracker`)}
					>
						<ListItemIcon>
							<EventNoteIcon />
						</ListItemIcon>
						<ListItemText primary="Food Tracker" />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem
						button
						component="a"
						href={`/user/${user.username}`}
						onClick={(evt) => handleClick(evt, `/user/${user.username}`)}
					>
						<ListItemIcon>
							<AccountCircleIcon />
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</ListItem>
					<ListItem
						button
						component="a"
						href={`/logout`}
						onClick={(evt) => handleClick(evt, `/logout`)}
					>
						<ListItemIcon>
							<ExitToAppIcon color="error" />
						</ListItemIcon>
						<ListItemText
							primaryTypographyProps={{ color: "error" }}
							primary="Logout"
						/>
					</ListItem>
				</List>
			</div>
		</SwipeableDrawer>
	);
};

export default SideNavDrawer;
