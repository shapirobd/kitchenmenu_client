import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles/NutrientListStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

// List of macronutrients (as well as their subnutrients) and their quantities
// for a given recipe
const NutrientList = ({ title, data }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h5">{title}</Typography>
			<TableContainer>
				<Table>
					<TableBody>
						{Object.keys(data).map((nutrient) => (
							<>
								<TableRow key={data[nutrient].name}>
									<TableCell>
										<b>{data[nutrient].name}</b>
									</TableCell>
									<TableCell>
										<b>{data[nutrient].amount}</b>
									</TableCell>
								</TableRow>
								{Object.keys(data[nutrient].subNutrients).map((subNutrient) => (
									<TableRow key={data[nutrient].subNutrients[subNutrient].name}>
										<TableCell>
											{data[nutrient].subNutrients[subNutrient].name}
										</TableCell>
										<TableCell>
											{data[nutrient].subNutrients[subNutrient].amount}
										</TableCell>
									</TableRow>
								))}
							</>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default NutrientList;
