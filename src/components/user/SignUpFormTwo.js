import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { useStyles } from "./styles/SignUpFormStyles";

const SignUpFormTwo = ({ handleSubmit, handleChange }) => {
	const classes = useStyles();
	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						className={classes.textField}
						id="weight"
						inputProps={{ role: "text" }}
						name="weight"
						label="Weight"
						fullWidth
						variant="outlined"
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						className={classes.textField}
						id="weight_goal"
						inputProps={{ role: "text" }}
						name="weight_goal"
						label="Weight Goal"
						fullWidth
						variant="outlined"
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						className={classes.textField}
						id="calorie_goal"
						inputProps={{ role: "text" }}
						name="calorie_goal"
						label="Calorie Goal"
						fullWidth
						variant="outlined"
						onChange={handleChange}
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default SignUpFormTwo;
