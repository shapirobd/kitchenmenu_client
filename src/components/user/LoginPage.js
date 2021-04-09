import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles/LoginPageStyles";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actionCreators/userActionCreators";
import { useHistory } from "react-router-dom";

// Component that contains LoginForm and defines logic for handling form
// submission, modification and verification.
const LoginPage = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector((state) => state.user);

	const INITIAL_FORM_DATA = {
		username: "",
		password: "",
	};
	const [formData, setFormData] = useState(INITIAL_FORM_DATA);
	const [invalidLogin, setInvalidLogin] = useState(undefined);

	// updates the the appropriate key, value pair within formData state
	// when the user modifies text within the form
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	// Verifies that the login info is valid
	// If so, creates user object and stores it as user in redux state redirects to root route
	// If not, displays "Invalid username or password" and stays on login page
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(formData));
		setTimeout(() => {
			if (!user) {
				setInvalidLogin(true);
			} else {
				setInvalidLogin(false);
			}
		}, 1000);
	};

	// Once a user is added to redux state, redirect to root route
	useEffect(() => {
		if (user) {
			setFormData(INITIAL_FORM_DATA);
			history.push("/");
		}
	}, [user, history]);

	return (
		<Grid
			container
			alignItems="center"
			justify="center"
			className={classes.root}
		>
			<Grid item xs={12} sm={8} lg={6} className={classes.login}>
				<Typography variant="h4">Login</Typography>
				<LoginForm
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					invalidLogin={invalidLogin}
				/>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
