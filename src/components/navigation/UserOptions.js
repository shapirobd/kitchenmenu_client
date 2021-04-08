import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles/UserOptionsStyles";

// Contains buttons for the top nav bar that allow the user to login/logout/register
const UserOptions = ({ mobile, user, handleLogout }) => {
	const classes = useStyles();

	return (
		<div className={mobile ? classes.mobileUserOptions : classes.userOptions}>
			{user ? (
				<Button
					onClick={handleLogout}
					color="inherit"
					className={classes.navLink}
				>
					Logout
				</Button>
			) : (
				<>
					<Link to="/login" className={classes.navLink}>
						<Button color="inherit">Login</Button>
					</Link>
					<Link to="/signup" className={classes.navLink}>
						<Button color="inherit" className={classes.signupBtn}>
							Sign up
						</Button>
					</Link>
				</>
			)}
		</div>
	);
};

export default UserOptions;
