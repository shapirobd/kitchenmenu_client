/**
 * Displays/hides the SideNav by setting its state for the anchor ("left")
 * to the value of open (either true or false)
 * @param {String} anchor
 * @param {Boolean} open
 * @param {Function} setState
 * @returns
 */
export const toggleDrawer = (
	anchor,
	open,
	setState,
	triggeredByRedirect = false
) => (event) => {
	console.log("1. toggleDrawer");
	if (
		!triggeredByRedirect &&
		event &&
		event.type === "keydown" &&
		(event.key === "Tab" || event.key === "Shift")
	) {
		return;
	}
	console.log("TOGGLE");
	setState((state) => ({ ...state, [anchor]: open }));
};
