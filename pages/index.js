import React, { Component } from 'react';
import Layout from "../components/Layout";
import FlyerContext from '../components/FlyerContext';
import Schedule from '../components/Schedule';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';

class Index extends Component {
    constructor( props ) {
        super( props );
    }

    state = {
        message: "",
        cwn: {},
    };

    static async getInitialProps( context ) {
        // construct the url for the endpoint that will give us the schedule
        const calendarUrl = `https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDARGROUP}/events?key=${process.env.APIKEY}`;
        const response = await fetch(calendarUrl);
        const calendarEvents = await response.json();

        // Message to display when no events are found
        const message = "Nothing scheduled yet, check back soon!";

        // Get the next date of coworking night. Could be today :)
        const nextEventDate = new Date();
        nextEventDate.setDate(nextEventDate.getDate() + (((3 + 7 - nextEventDate.getDay()) % 7)));
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
        const cwn = {
            start_time: startDateOfCwn,
            location: "Huntsville",
            workshops
        };

        return {
            message,
            cwn,
        };
    }

    componentWillMount() {
        this.setState( { 
            message: this.props.message,
            cwn: this.props.cwn,
            city: this.props.city
        } );
    }

    render() {
        return (
            <FlyerContext.Provider value={ { state: this.state } }>
                <Layout>
                    <Schedule />
                </Layout>
            </FlyerContext.Provider>
        )
    }
}

export default Index;
