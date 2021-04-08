/**
 * Displays/hides the SideNav by setting its state for the anchor ("left")
 * to the value of open (either true or false)
 * @param {String} anchor
 * @param {Boolean} open
 * @param {Function} setState
 * @returns
 */
export const toggleDrawer = (anchor, open, setState) => (event) => {
	if (
		event &&
		event.type === "keydown" &&
		(event.key === "Tab" || event.key === "Shift")
	) {
		return;
	}
	setState((state) => ({ ...state, [anchor]: open }));
};
