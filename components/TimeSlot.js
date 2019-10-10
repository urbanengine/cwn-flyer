import React, { Component } from 'react';
import Head from "next/head";
import Moment from "react-moment";
import Workshops from './Workshops';

class TimeSlot extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        // start time for time slot
        const startTime = this.props.startTime;

        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="/static/timeslot.css" key="timeslot:css" />
                </Head>
                <div className="time-slot">
                    <div className="time-slot-bracket">
                        <div className="time-slot-title">
                            <Moment format="h:mm" tz="America/Chicago">{startTime}</Moment>
                        </div>
                    </div>
                    <Workshops startTime={startTime} />
                </div>
            </div>
        );
    }
}

export default TimeSlot;
