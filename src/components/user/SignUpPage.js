import React, { useState } from "react";
import { useStyles } from "./styles/SignUpPageStyles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actionCreators/userActionCreators";
import { getStepContent, getSteps } from "../../helpers/signUpHelpers";
import useWindowDimensions from "../../customHooks/getWindowDimensions";

const SignUpPage = () => {
	const classes = useStyles();
	const { width } = useWindowDimensions();

	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());
	const steps = getSteps();

	const history = useHistory();
	const dispatch = useDispatch();

	const INITIAL_FORM_DATA = {
		first_name: "",
		last_name: "",
		username: "",
		email: "",
		password: "",
		weight: null,
		weight_goal: null,
		calorie_goal: null,
	};
	const [formData, setFormData] = useState(INITIAL_FORM_DATA);
	const [missingData, setMissingData] = useState({
		first_name: false,
		last_name: false,
		username: false,
		email: false,
		password: false,
	});

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((formData) => ({
			...formData,
			[name]:
				name === "weight" || name === "weight_goal" || name === "calorie_goal"
					? +value
					: value,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(register(formData));
		history.push("/");
	};

	const isStepOptional = (step) => {
		return step === 1;
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let dataMissing = false;
		Object.keys(missingData).map((fieldName) => {
			let isMissing;
			if (formData[fieldName] === "") {
				dataMissing = true;
				isMissing = true;
			} else {
				isMissing = false;
			}
			setMissingData((missingData) => ({
				...missingData,
				[fieldName]: isMissing,
			}));
		});
		if (dataMissing) return;

		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={width > 599 ? classes.main : classes.mobileMain}>
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
			<div>
				{activeStep === steps.length ? (
					<div>
						<Typography className={classes.instructions}>
							All steps completed - you&apos;re finished
						</Typography>
						<Button onClick={handleReset} className={classes.button}>
							Reset
						</Button>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>
							{getStepContent(
								activeStep,
								handleChange,
								handleSubmit,
								formData,
								missingData
							)}
						</Typography>
						<div>
							<div style={{ float: "right" }}>
								<Button
									disabled={activeStep === 0}
									onClick={handleBack}
									className={classes.button}
								>
									Back
								</Button>
								{isStepOptional(activeStep) && (
									<Button
										variant="contained"
										color="primary"
										onClick={handleSkip}
										className={`${classes.button} ${classes.skipButton}`}
									>
										Skip
									</Button>
								)}

								<Button
									variant="contained"
									color="primary"
									label="nextBtn"
									onClick={
										activeStep === steps.length - 1 ? handleSubmit : handleNext
									}
									className={`${classes.button} ${classes.nextButton}`}
								>
									{activeStep === steps.length - 1 ? "Finish" : "Next"}
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SignUpPage;
