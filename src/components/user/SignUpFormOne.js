import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./styles/SignUpFormStyles";

// Component containing form for user to enter desired first name, last name,
// username, email and password for the signing up
const SignUpFormOne = ({ handleSubmit, handleChange, missingData }) => {
	const classes = useStyles();

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<TextField
						className={classes.textField}
						required
						id="first_name"
						inputProps={{ role: "text" }}
						name="first_name"
						label="First Name"
						fullWidth
						variant="outlined"
						onChange={handleChange}
					/>
					{missingData.first_name ? (
						<Typography variant="caption" color="error">
							First name required
						</Typography>
					) : null}
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						className={classes.textField}
						required
						id="last_name"
						inputProps={{ role: "text" }}
						name="last_name"
						label="Last Name"
						fullWidth
						variant="outlined"
						onChange={handleChange}
					/>
					{missingData.last_name ? (
						<Typography variant="caption" color="error">
							Last name required
						</Typography>
					) : null}
				</Grid>
				<Grid item xs={12}>
					<TextField
						className={classes.textField}
						required
						id="username"
						inputProps={{ role: "text" }}
						name="username"
						label="Username"
						fullWidth
						variant="outlined"
						onChange={handleChange}
					/>
					{missingData.username ? (
						<Typography variant="caption" color="error">
							Username required
						</Typography>
					) : null}
				</Grid>
				<Grid item xs={12}>
					<TextField
						className={classes.textField}
						required
						id="email"
						inputProps={{ role: "email" }}
						name="email"
						label="Email"
						type="email"
						fullWidth
						variant="outlined"
						onChange={handleChange}
					/>
					{missingData.email ? (
						<Typography variant="caption" color="error">
							Email required
						</Typography>
					) : null}
				</Grid>
				<Grid item xs={12}>
					<TextField
						className={classes.textField}
						required
						id="password"
						inputProps={{ role: "password" }}
						name="password"
						label="Password"
						type="password"
						fullWidth
						variant="outlined"
						onChange={handleChange}
					/>
					{missingData.password ? (
						<Typography variant="caption" color="error">
							Password required
						</Typography>
					) : null}
				</Grid>
			</Grid>
		</form>
	);
};

export default SignUpFormOne;
