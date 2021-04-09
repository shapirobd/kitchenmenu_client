import React, { useState } from "react";
import { useStyles } from "./styles/ProfileStyles";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import EditProfileForm from "./EditProfileForm";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
import ProfileData from "./ProfileData";

// Component that displays the user's username, first name, last name,
// email, weight, weight goal and calorie goal.
// The user also may edit their first name, last name,
// email, weight, weight goal and calorie goal from this page.
const Profile = () => {
	const classes = useStyles();
	const { width } = useWindowDimensions();
	const user = useSelector((state) => state.user);

	const [editting, setEditting] = useState(false);

	return (
		<div className={width > 599 ? classes.root : classes.mobileRoot}>
			<Grid
				container
				cols={1}
				spacing={10}
				justify="space-around"
				className={classes.gridContainer}
				xs={12}
				sm={8}
				md={5}
				alignItems="center"
			>
				<Grid item cols={1} xs={12} className={classes.gridItem}>
					{editting ? (
						<EditProfileForm user={user} setEditting={setEditting} />
					) : (
						<ProfileData user={user} setEditting={setEditting} />
					)}
				</Grid>
			</Grid>
		</div>
	);
};

export default Profile;
