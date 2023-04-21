import fetch from 'isomorphic-unfetch';
import moment from 'moment';

/**
 * Get the workshops from Google Calendar and return a cwn object that the flyer
 * can consume.
 * 
 * @param  {moment} nextEventDate
 * @return {Object} The cwn object
 */
async function getCwnWorkshops(nextEventDate) {
	// construct the url for the endpoint that will give us the schedule
	const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDARGROUP}/events?key=${process.env.APIKEY}`;
	const response = await fetch(calendarUrl);
	const calendarEvents = await response.json();

	const startDateOfCwn = moment(nextEventDate).startOf('day');
	const endDateOfCwn = moment(nextEventDate).endOf('day');

	// Convert Google Calendar events to the workshop format
	const workshops = [];
	calendarEvents.items.forEach( event => {
		const eventStartTime = moment(event.start.dateTime);
		if (eventStartTime.isBetween(startDateOfCwn, endDateOfCwn)) {
			workshops.push( {
				icon: 'comments',
				title: event.summary,
				start_time: event.start.dateTime,
				end_time: event.end.dateTime,
				room: event.location,
				description: event.description,
			});
		}
	});

	// Create the cwn object
	return {
		start_time: startDateOfCwn,
		location: "Huntsville",
		workshops
	};
}

module.exports = {
	getCwnWorkshops
}