import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles/NavBarStyles";
import logo from "../../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actionCreators/userActionCreators";
import { loadFeed } from "../../actionCreators/recipeActionCreators";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import SideNavDrawer from "./SideNavDrawer";
import SearchBar from "./SearchBar";
import UserOptions from "./UserOptions";
import { toggleDrawer } from "./helpers/toggleDrawer";

// Top navigation bar that allows user to search for recipes by name,
// login/logout/register, and go to the home page
const NavBar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();
	const { width } = useWindowDimensions();

	const user = useSelector((state) => state.user);

	const [searchData, setSearchData] = useState("");
	const [state, setState] = useState({
		left: false,
	});

	// removes the user from redux state and redirects to home page
	const handleLogout = (evt) => {
		evt.preventDefault();
		dispatch(logout());
		history.push("/");
	};

	// updates searchData state to match user input from search bar
	const handleChange = (evt) => {
		setSearchData(evt.target.value);
	};

	// when the user searches for recipes by name, this function updates the feed
	// from redux state to include only recipes that contain the search term and
	// redirects to the home page if the user is not already there
	const handleSearch = (evt) => {
		evt.preventDefault();
		dispatch(loadFeed(1, { diets: [], macros: {}, recipeName: searchData }));
		if (location.pathname !== "/") {
			history.push("/");
		}
	};

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar classes={{ root: classes.root }}>
					{width <= 599 && user ? (
						<>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="open drawer"
								onClick={toggleDrawer("left", true, setState)}
							>
								<MenuIcon />
							</IconButton>
							<SideNavDrawer state={state} setState={setState} user={user} />
						</>
					) : null}

					{width > 599 ? (
						<Link to="/" className={`${classes.navLink} ${classes.title}`}>
							<img className={classes.logo} src={logo} alt={logo} />
						</Link>
					) : null}

					<SearchBar handleSearch={handleSearch} handleChange={handleChange} />
					<UserOptions
						mobile={width <= 599}
						user={user}
						handleLogout={handleLogout}
					/>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
