import React, { Component } from 'react';
import Head from "next/head";
import FlyerContext from './FlyerContext';
import Moment from "react-moment";
import WorkshopCard from './WorkshopCard';

class Workshops extends Component {

    render() {
        const startTime = this.props.startTime;

        return (
            <FlyerContext.Consumer>
                {(context) => {
                    var workshops = context.state.cwn.workshops;

                    const workshopList = workshops.map( function( workshop ) {
                        if ( workshop.start_time === startTime ) {
                            return <WorkshopCard key={workshop.title} workshop={workshop} />
                        }
                    } );

                    return (
                        <div>
                            <Head>
                                <link rel="stylesheet" href="/static/css/workshops.css" key="workshops:css" />
                            </Head>
                            <div className="card-deck">
                                { workshopList }
                            </div>
                        </div>
                    )
                } }
            </FlyerContext.Consumer>
        )
    };
}

export default Workshops;
