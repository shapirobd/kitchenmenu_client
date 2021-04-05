import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import WelcomePage from "./home/WelcomePage";
import SignUpPage from "./user/SignUpPage";
// import SignUpPageTwo from "./user/SignUpPageTwo";
import LoginPage from "./user/LoginPage";
import Profile from "./user/Profile";
import Recipe from "./recipes/Recipe";
import SideNav from "./navigation/SideNav";
import TrackerPage from "./tracker/TrackerPage";
import BookmarksPage from "./recipes/BookmarksPage";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import useWindowDimensions from "../customHooks/getWindowDimensions";

const useStyles = makeStyles(() => ({
	root: {
		height: "100vh",
		padding: "65px 0 0 0 ",
		overflowY: "auto",
		display: "flex",
		// flexWrap: "wrap",
		justifyContent: "center",
		// overflow: "hidden",
		backgroundColor: "#444d4c",
	},
	mainContent: {
		// float: "right",
		justifyContent: "center",
	},
}));

// Defines the routes that allow the user to navigate through the application
const Routes = () => {
	const classes = useStyles();
	const user = useSelector((state) => state.user);

	const { width } = useWindowDimensions();

	return (
		<Container maxWidth="xl" className={classes.root}>
			{width > 599 ? <SideNav /> : null}

			<Switch className={classes.mainContent}>
				<Route exact path="/">
					{user ? <HomePage /> : <WelcomePage />}
				</Route>
				<Route exact path="/signup">
					<SignUpPage />
				</Route>
				<Route exact path="/tracker">
					<TrackerPage />
				</Route>
				<Route exact path="/ingredients">
					<WelcomePage />
				</Route>
				<Route exact path="/login">
					<LoginPage />
				</Route>
				<Route exact path="/logout" />
				<Route path="/user/:username">
					{user ? <Profile /> : <WelcomePage />}
				</Route>
				<Route path="/bookmarks/:username">
					{user ? <BookmarksPage /> : <WelcomePage />}
				</Route>
				<Route path="/recipes/:recipeId">
					<Recipe user={user ? user : { bookmarks: [], eatenMeals: {} }} />
				</Route>
			</Switch>
		</Container>
	);
};

export default Routes;
