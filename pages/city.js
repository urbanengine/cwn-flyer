import React, { Component } from 'react';
import Layout from '../components/Layout';
import Schedule from '../components/Schedule';
import FlyerContext from '../components/FlyerContext';
import TimeLib from '../lib/TimeLib';
import GoogleCalendarService from '../services/GoogleCalendarService';
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
        // Message to display when no events are found
        const message = "Nothing scheduled yet, check back soon!";

        // Get the next date of coworking night. Could be today :)
        const nextEventDate = TimeLib.getNextEventDate();

        // Get Workshops from Google Calendar
        const cwn = await GoogleCalendarService.getCwnWorkshops( nextEventDate );

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
