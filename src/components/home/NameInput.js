import React from "react";
import { Typography, TextField } from "@material-ui/core";

// input that allows user to include name of recipe in filter criteria
const NameInput = ({ handleChange }) => {
	return (
		<>
			<Typography>Name</Typography>
			<div>
				<TextField
					name="recipeName"
					variant="outlined"
					size="small"
					style={{ width: "100%" }}
					onChange={handleChange}
				/>
			</div>
		</>
	);
};

export default NameInput;
