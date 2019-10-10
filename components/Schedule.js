import React, { Component } from 'react';
import Head from "next/head";
import FlyerContext from './FlyerContext';
import TimeSlot from './TimeSlot';

const isEmpty = ( value ) => {
    return ( value === null ) || ( value === undefined ) || ( Array.isArray( value ) && value.length === 0 ) || ( JSON.stringify( value ) === '{}');
}

class Schedule extends Component {

    render() {
        const errorMessageStyle = {
            textAlign: 'center',
            margin: '3rem auto',
            width: '80%'
        };

        return (
            <FlyerContext.Consumer>
                {(context) => {
                    const cwn = context.state.cwn;
                
                    const showErrorMessage = isEmpty( cwn ) || ( isEmpty( cwn ) && ( isEmpty( cwn.workshops ) || isEmpty( cwn.workshops.length ) ) ) ? true: false;

                    // This should only be shown if showErrorMessage above returns true
                    if ( showErrorMessage ) {
                        return <h3 style={errorMessageStyle} className="error-message">{context.state.message}</h3>
                    }
                    else {
                        var timeSlots = {};
                        
                        // Create an object where each property is an array of events based on the start_time
                        // The properties key will match the start time of the events within the array
                        cwn.workshops.forEach(function( workshop ) {
                            var startTime = workshop.start_time;
                            
                            if ( timeSlots[ startTime ] == undefined ) {
                                timeSlots[ startTime ] = [];
                            }

                            timeSlots[ startTime ].push( workshop );
                        });

                        // Grab the start times for each time slot so we can associate the time to the timeslot
                        const startTimes = Object.keys( timeSlots );

                        // In order to show the events in chronological order we first need to sort them by their start time.
                        startTimes.sort();

                        const timeSlotList = startTimes.map( ( startTime, index ) =>
                            // This key will be the only time we don't use the Context API because we need to associate each timeslot with a time up front.
                            <TimeSlot key={index} startTime={startTime} />
                        );

                        return (
                            <div>
                                <Head>
                                    <link rel="stylesheet" href="/static/workshopCard.css" key="workshopCard:css" />
                                </Head>
                                <div className="container my-2 cwn-schedule">
                                    { timeSlotList }
                                </div>
                            </div>
                        )
                    }
                } }
            </FlyerContext.Consumer>
        );
    }
}

export default Schedule;
