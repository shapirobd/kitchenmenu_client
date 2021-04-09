import React, { useState, useEffect } from "react";
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
import { checkUsernameAndEmail } from "./helpers/checkUsernameAndEmail";

// Component that navigates the user through the sign up process
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
	const [takenFields, setTakenFields] = useState({
		username: false,
		email: false,
	});
	const [checkMade, setCheckMade] = useState(false);
	const [dataIsMissing, setDataIsMissing] = useState(false);

	// updates the the appropriate key, value pair within formData state
	// when the user modifies text within the form
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

	// creates a new user in the database, logs the user in if
	// successful, then redirects to the home page
	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch(register(formData));
		history.push("/");
	};

	// determines if a step in the sign up process can be skipped
	const isStepOptional = (step) => {
		return step === 1;
	};

	// determines if a step in the sign up process was skipped by the user
	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	// if no required data is missing from the sign up form at the current step
	// and the username and email are not taken, increment the value of activeStep state
	// to go to the next step of the sign up process
	const handleNext = async () => {
		setDataIsMissing(isDataMissing(missingData, formData, setMissingData));
		await checkUsernameAndEmail(formData, setTakenFields);
		console.log(takenFields);
		setCheckMade(true);
	};

	// decrement the value of activeStep state to go to the previous step of the sign up process
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	// if the current step can be skipped increment the value of activeStep
	// state to go to the next step of the sign up process
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

	// reset the value of activeStep state to be zero
	const handleReset = () => {
		setActiveStep(0);
	};

	// once we have checked for missing data and already taken username/email,
	// return without proceeding to the next step if any of these checks failed,
	// otherwise proceed to the next step
	useEffect(() => {
		if (checkMade) {
			if (dataIsMissing || takenFields.email || takenFields.username) {
				setCheckMade(false);
				return;
			} else {
				let newSkipped = skipped;
				if (isStepSkipped(activeStep)) {
					newSkipped = new Set(newSkipped.values());
					newSkipped.delete(activeStep);
				}
				setActiveStep((prevActiveStep) => prevActiveStep + 1);
				setSkipped(newSkipped);
				setCheckMade(false);
			}
		}
	}, [checkMade]);

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
								missingData,
								takenFields,
								setTakenFields
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
