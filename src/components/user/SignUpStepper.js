import React from "react";
import { useStyles } from "./styles/SignUpPageStyles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";

const SignUpStepper = ({
	activeStep,
	steps,
	isStepOptional,
	isStepSkipped,
}) => {
	const classes = useStyles();
	return (
		<Stepper
			activeStep={activeStep}
			style={{ backgroundColor: "rgba(0,0,0,0)", padding: "20px 0 0 0" }}
		>
			{steps.map((label, index) => {
				const stepProps = {};
				const labelProps = {};
				if (isStepOptional(index)) {
					labelProps.optional = (
						<Typography variant="caption">Optional</Typography>
					);
				}
				if (isStepSkipped(index)) {
					stepProps.completed = false;
				}
				return (
					<Step key={label} {...stepProps} classes={{ root: classes.root }}>
						<StepLabel
							{...labelProps}
							classes={{ root: classes.root, label: classes.label }}
						>
							{label}
						</StepLabel>
					</Step>
				);
			})}
		</Stepper>
	);
};

export default SignUpStepper;
