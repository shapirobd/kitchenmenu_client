import React from "react";
import { useStyles } from "./styles/SignUpPageStyles";
import Button from "@material-ui/core/Button";

// Displays the "Back", "Skip" (if the active step is optional), and "Next/Finish"
// buttons that you use to navigate through the sign up process.
const SignUpButtons = ({
	steps,
	isStepOptional,
	activeStep,
	handleBack,
	handleSkip,
	handleSubmit,
	handleNext,
}) => {
	const classes = useStyles();
	return (
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
					onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
					className={`${classes.button} ${classes.nextButton}`}
				>
					{activeStep === steps.length - 1 ? "Finish" : "Next"}
				</Button>
			</div>
		</div>
	);
};

export default SignUpButtons;
