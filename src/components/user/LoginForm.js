import React from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles/LoginFormStyles";

// Component that contains form for logging in a user
const LoginForm = ({ handleSubmit, handleChange, invalidLogin }) => {
	const classes = useStyles();

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<TextField
				className={classes.textField}
				required
				id="username"
				name="username"
				label="Username"
				fullWidth
				variant="outlined"
				onChange={handleChange}
			/>
			<TextField
				className={classes.textField}
				required
				id="password"
				name="password"
				label="Password"
				type="password"
				fullWidth
				variant="outlined"
				onChange={handleChange}
			/>
			{invalidLogin ? (
				<Typography variant="caption" color="error">
					Invalid username or password
				</Typography>
			) : null}
			<Button type="submit" className={classes.button}>
				Login
			</Button>
		</form>
	);
};

export default LoginForm;
