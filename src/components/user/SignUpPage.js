import React, { useState } from "react";
import { useStyles } from "./styles/SignUpPageStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actionCreators/userActionCreators";
import { getStepContent, getSteps } from "./helpers/signUpHelpers";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import { isDataMissing } from "./helpers/isDataMissing";
import { INITIAL_SIGN_UP_FORM_DATA } from "./helpers/initialSignUpFormData";
import SignUpStepper from "./SignUpStepper";
import SignUpButtons from "./SignUpButtons";

const SignUpPage = () => {
	const classes = useStyles();
	const { width } = useWindowDimensions();
	const history = useHistory();
	const dispatch = useDispatch();
	const steps = getSteps();

	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());
	const [formData, setFormData] = useState(INITIAL_SIGN_UP_FORM_DATA);
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
		let dataMissing = isDataMissing(missingData, formData, setMissingData);
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
			<SignUpStepper
				activeStep={activeStep}
				steps={steps}
				isStepOptional={isStepOptional}
				isStepSkipped={isStepSkipped}
			/>
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
						<SignUpButtons
							steps={steps}
							isStepOptional={isStepOptional}
							activeStep={activeStep}
							handleBack={handleBack}
							handleSkip={handleSkip}
							handleSubmit={handleSubmit}
							handleNext={handleNext}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default SignUpPage;
