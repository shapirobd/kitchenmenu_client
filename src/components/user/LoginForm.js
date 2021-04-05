import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles/LoginFormStyles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actionCreators/userActionCreators";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
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

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(formData));
		setTimeout(() => {
			if (!user) {
				console.log("!user");
				setInvalidLogin(true);
			} else {
				console.log("user");
				setInvalidLogin(false);
			}
		}, 1000);
	};

	useEffect(() => {
		if (user) {
			console.log(user);
			console.log("VALID");
			setFormData(INITIAL_FORM_DATA);
			history.push("/");
		}
	}, [user, history]);

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
