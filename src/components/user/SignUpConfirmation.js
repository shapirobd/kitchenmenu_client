import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles/SignUpFormStyles";

const capitalize = (text) => {
	return text
		.replace("_", " ")
		.split(" ")
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(" ");
};

const SignUpConfirmation = ({ handleSubmit, handleChange, formData }) => {
	const classes = useStyles();
	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<Grid container spacing={2}>
				<Typography variant="h5">Confirm</Typography>
				{Object.keys(formData).map((key) =>
					key !== "password" ? (
						<Grid item xs={12} key={key}>
							<Typography className={classes.textField}>
								{capitalize(key)}
							</Typography>
							<Typography className={classes.textField}>
								{formData[key]}
							</Typography>
						</Grid>
					) : null
				)}
			</Grid>
		</form>
	);
};

export default SignUpConfirmation;
