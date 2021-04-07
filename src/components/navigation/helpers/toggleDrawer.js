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
