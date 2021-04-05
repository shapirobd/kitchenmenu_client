import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles/LoginPageStyles";
import LoginForm from "./LoginForm";

const LoginPage = () => {
	const classes = useStyles();

	return (
		<Grid
			container
			alignItems="center"
			justify="center"
			className={classes.root}
		>
			<Grid item xs={12} sm={8} lg={6} className={classes.login}>
				<Typography variant="h4">Login</Typography>
				<LoginForm />
			</Grid>
		</Grid>
	);
};

export default LoginPage;
