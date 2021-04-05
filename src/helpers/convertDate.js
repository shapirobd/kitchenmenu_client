/**
 * Takes a date in the format of "Sat Mar 27 2021 00:00:00 GMT-0400 (Eastern Daylight Time)"
 * and converts it to a string with the format of "2021-03-27"
 * @param {Date} date the date that needs to be converted
 * @returns string with the formation of "YYYY-MM-DD"
 */
const convertDate = (date = new Date()) => {
	let dd = String(date.getDate()).padStart(2, "0");
	let mm = String(date.getMonth() + 1).padStart(2, "0");
	let yyyy = date.getFullYear();
	return yyyy + "-" + mm + "-" + dd;
};

export default convertDate;
