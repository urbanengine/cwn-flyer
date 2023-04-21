import moment from 'moment';

const timezone = 'America/Chicago';

/**
 * Get the next date of coworking night. Could be today :)
 * 
 * @param  {Number} dayINeed=3 The day of the week you want to get the date for.
 * @return moment The next date of the day you want.
 */
function getNextEventDate(dayINeed = 3) {
	let nextEventDate;
	const today = moment().tz(timezone).isoWeekday();
	// if we haven't yet passed the day of the week that I need:
	if (today <= dayINeed) {
		// then just give me this week's instance of that day
		return moment().tz(timezone).isoWeekday(dayINeed);
	} else {
		// otherwise, give me *next week's* instance of that same day
		return moment().tz(timezone).add(1, 'weeks').isoWeekday(dayINeed);
	}
}

module.exports = {
	getNextEventDate
}