import React from "react";
import { Typography, TextField } from "@material-ui/core";
import MacroInput from "./MacroInput";

const MacroInputs = ({ allMacros, handleChange, mobile }) => {
	return (
		<div style={{ width: mobile ? "100%" : "50%", justifyContent: "right" }}>
			<Typography>Macros</Typography>
			<div style={{ margin: "0 0 10px 0" }}>
				{allMacros.map((macro, idx) => {
					return <MacroInput />;
				})}
			</div>
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
		</div>
	);
};

export default MacroInputs;
