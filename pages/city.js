import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Schedule from '../components/Schedule';
import FlyerContext from '../components/FlyerContext';
import moment from 'moment';

class City extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            message: props.message,
            cwn: props.cwn,
            city: props.city
        };
    }

    state = {
        message: '',
        cwn: {}
    };

    static async getInitialProps ( context ) {
        const timezone = 'America/Chicago';

        // construct the url for the endpoint that will give us the schedule
        const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDARGROUP}/events?key=${process.env.APIKEY}`;
        const response = await fetch(calendarUrl);
        const calendarEvents = await response.json();

        // Message to display when no events are found
        const message = "Nothing scheduled yet, check back soon!";

        // Get the next date of coworking night. Could be today :)
        let nextEventDate;
        const dayINeed = 3; // for Wednesday
        const today = moment().tz(timezone).isoWeekday();
        // if we haven't yet passed the day of the week that I need:
        if (today <= dayINeed) {
          // then just give me this week's instance of that day
          nextEventDate = moment().tz(timezone).isoWeekday(dayINeed);
        } else {
          // otherwise, give me *next week's* instance of that same day
          nextEventDate = moment().tz(timezone).add(1, 'weeks').isoWeekday(dayINeed);
        }
        const startDateOfCwn = moment(nextEventDate).tz(timezone).startOf('day');
        const endDateOfCwn = moment(nextEventDate).tz(timezone).endOf('day');

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
        const cwn = {
            start_time: startDateOfCwn,
            location: "Huntsville",
            workshops
        };

        return {
            message,
            cwn,
            city: context.query.city
        };
    }

    

    render() {
        return (
            <FlyerContext.Provider value={ { state: this.state } }>
                <Layout>
                    <title>CoWorking Night Flyer</title>
                    <Schedule />
                </Layout>
            </FlyerContext.Provider>
        )
    }
}

export default City;
