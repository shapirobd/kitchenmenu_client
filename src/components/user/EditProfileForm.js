import React, { useState } from "react";
import { useStyles } from "./styles/EditProfileFormStyles";
import { TextField, Button } from "@material-ui/core";
import { editProfile } from "../../actionCreators/userActionCreators";
import { useDispatch, useSelector } from "react-redux";

const capitalize = (text) => {
	return text
		.replace("_", " ")
		.split(" ")
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(" ");
};

const EditProfileForm = ({ user, setEditting }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token);

	const [formData, setFormData] = useState({
		first_name: user.first_name,
		last_name: user.last_name,
		email: user.email,
		weight: user.weight,
		weight_goal: user.weight_goal,
		calorie_goal: user.calorie_goal,
	});

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((formData) => ({
			...formData,
			[name]: +value || value,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(editProfile(user.username, { _token: token, data: formData }));
		setEditting(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			{Object.keys(user).map((key) =>
				key !== "username" && key !== "bookmarks" && key !== "eatenMeals" ? (
					<TextField
						variant="outlined"
						name={key}
						id={key}
						label={capitalize(key)}
						value={formData[key]}
						className={classes.textField}
						onChange={handleChange}
					/>
				) : null
			)}
			<Button type="submit" className={classes.button}>
				Submit
			</Button>
			<Button className={classes.backButton} onClick={() => setEditting(false)}>
				Back
			</Button>
		</form>
	);
};

export default EditProfileForm;
