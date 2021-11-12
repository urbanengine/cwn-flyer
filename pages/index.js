import React, { Component } from 'react';
import Layout from "../components/Layout";
import FlyerContext from '../components/FlyerContext';
import Schedule from '../components/Schedule';
import TimeLib from '../lib/TimeLib';
import GoogleCalendarService from '../services/GoogleCalendarService';

class Index extends Component {
    constructor( props ) {
        super( props );
    }

    state = {
        message: "",
        cwn: {},
    };

    static async getInitialProps( context ) {
        // Message to display when no events are found
        const message = "Nothing scheduled yet, check back soon!";

        // Get the next date of coworking night. Could be today :)
        const nextEventDate = TimeLib.getNextEventDate();

        // Get Workshops from Google Calendar
        const cwn = await GoogleCalendarService.getCwnWorkshops( nextEventDate );

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
