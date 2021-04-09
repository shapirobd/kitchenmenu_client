import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles/SignUpFormStyles";
import { capitalize } from "./helpers/capitalize";

// As the last step of the sign up process, this component displays all the information
// that the user has entered for signing up so that they may confirm before clicking "Finish"
const SignUpConfirmation = ({ handleSubmit, formData }) => {
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
