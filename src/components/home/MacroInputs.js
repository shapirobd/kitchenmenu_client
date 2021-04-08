import React from "react";
import { Typography } from "@material-ui/core";
import MacroInput from "./MacroInput";

// group of MacroInput components (one for reach macro from allMacros)
const MacroInputs = ({ allMacros, handleChange, mobile }) => {
	return (
		<>
			<Typography>Macros</Typography>
			<div style={{ margin: "0 0 10px 0" }}>
				{allMacros.map((macro, idx) => {
					return (
						<MacroInput
							mobile={mobile}
							macro={macro}
							handleChange={handleChange}
						/>
					);
				})}
			</div>
		</>
	);
};

export default MacroInputs;
