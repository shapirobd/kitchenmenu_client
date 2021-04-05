import React from "react";
import { useStyles } from "./styles/MacroInputsStyles";
import {
	Typography,
	TextField,
	FormControl,
	Grid,
	InputAdornment,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";

const MacroInputs = ({ allMacros, handleChange, mobile }) => {
	const classes = useStyles();

	return (
		<div style={{ width: mobile ? "100%" : "50%", justifyContent: "right" }}>
			<Typography>Macros</Typography>
			<div style={{ margin: "0 0 10px 0" }}>
				{allMacros.map((macro, idx) => {
					return (
						<Grid
							container
							cols={mobile ? 2 : 3}
							spacing={2}
							alignItems="flex-end"
							key={macro}
							className={classes.gridContainer}
						>
							<Grid item cols={1} xs={6} style={{ paddingRight: 0 }}>
								<FormControl variant="outlined" fullWidth size="small">
									<Select
										name={`operator-${macro}`}
										size="small"
										label="Comparison"
										onChange={handleChange}
										className={classes.selectField}
									>
										<option value={"<"} className={classes.selectOption}>
											Less than
										</option>
										<option value={">"} className={classes.selectOption}>
											Greater than
										</option>
									</Select>
								</FormControl>
							</Grid>
							<Grid
								item
								cols={mobile ? 1 : 2}
								xs={6}
								style={{ paddingLeft: 0 }}
							>
								<TextField
									name={`amount-${macro}`}
									variant="outlined"
									size="small"
									label={macro}
									onChange={handleChange}
									style={{ width: "100%" }}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">g</InputAdornment>
										),
										className: classes.textField,
									}}
								/>
							</Grid>
						</Grid>
					);
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
