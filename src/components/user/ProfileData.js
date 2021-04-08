import React from "react";
import { useStyles } from "./styles/ProfileDataStyles";
import { Divider, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const ProfileData = ({ user, setEditting }) => {
	const classes = useStyles();

	return (
		<>
			<EditIcon
				className={classes.editIcon}
				onClick={() => setEditting(true)}
			/>
			<div className={classes.userInfo}>
				<Typography
					variant="h6"
					style={{ textAlign: "center", margin: "20px 0" }}
				>
					{user.username}
				</Typography>
				<Divider style={{ margin: "20px 0" }} />
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<Typography>NAME</Typography>
					<Typography>
						{user.first_name} {user.last_name}
					</Typography>
				</div>
				{Object.keys(user).map((key) =>
					key === "email" ||
					key === "weight" ||
					key === "weight_goal" ||
					key === "calorie_goal" ? (
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Typography>{key.toUpperCase().replace("_", " ")}</Typography>
							<Typography>{user[key]}</Typography>
						</div>
					) : null
				)}
			</div>
		</>
	);
};

export default ProfileData;
