import React, { useState } from "react";
import { useStyles } from "./styles/ProfileStyles";
import { Grid, Divider, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import EditProfileForm from "./EditProfileForm";
import useWindowDimensions from "../../customHooks/getWindowDimensions";
// import profilePic from "../../images/profile_pics/shapirobd/default_prof_pic.jpg";

const Profile = () => {
	const classes = useStyles();
	const user = useSelector((state) => state.user);

	const { width } = useWindowDimensions();

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
						<>
							<EditIcon
								className={classes.editIcon}
								onClick={() => setEditting(true)}
							/>

							{/* <img
								className={
									width > 599 ? classes.profPic : classes.mobileProfPic
								}
								src={profilePic}
							/> */}

							<div className={classes.userInfo}>
								<Typography
									variant="h6"
									style={{ textAlign: "center", margin: "20px 0" }}
								>
									{user.username}
								</Typography>
								<Divider style={{ margin: "20px 0" }} />
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<Typography>NAME</Typography>
									<Typography>
										{user.first_name} {user.last_name}
									</Typography>
								</div>
								{Object.keys(user).map((key) =>
									key !== "username" &&
									key !== "first_name" &&
									key !== "last_name" &&
									key !== "bookmarks" &&
									key !== "eatenMeals" &&
									key !== "api_hash" ? (
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Typography>
												{key.toUpperCase().replace("_", " ")}
											</Typography>
											<Typography>{user[key]}</Typography>
										</div>
									) : null
								)}
							</div>
						</>
					)}
				</Grid>
			</Grid>
		</div>
	);
};

export default Profile;
