import $ from "jquery";

export const scrollToResults = () => {
	$(".makeStyles-root-13").animate(
		{ scrollTop: $(".makeStyles-root-22").height() },
		1000
	);
	$(".makeStyles-mobileRoot-23").animate(
		{ scrollTop: $(".makeStyles-mobileRoot-23").height() },
		1000
	);
	$(this).remove();
};
