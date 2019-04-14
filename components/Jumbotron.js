import React, { Component } from 'react';
import Head from "next/head";
import Moment from "react-moment";
import moment from "moment-timezone";
import FlyerContext from './FlyerContext';

class Jumbotron extends Component {
    constructor( props ) {
        super( props );
    }
    
    render() {
        return (
            <div>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                        crossOrigin="anonymous"
                        key="bootstrap"
                    />

                    <link rel="stylesheet" href="/static/jumbotron.css" key="jumbotron:css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" key="raleway:font" />
                </Head>
                <div className="jumbotron">
                    <div className="">
                        <h1 className="cwn-logo">
                            <a href="https://coworkingnight.org">
                                <img
                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/69546/cwn-logo-light-fullnowatermark.svg"
                                    alt="CoWorking Night - Learn. Connect. Collaborate."
                                />
                            </a>
                        </h1>
                        <p className="cwn-intro">
                            CoWorking Night is a free weekly conference where
                            professionals come to learn, connect, and collaborate.
                            <br />
                            Anyone of any age or background is welcome to attend. No
                            RSVP is required; just show up!
                        </p>
                        <FlyerContext.Consumer>
                            {(context) => {
                                const cwn = context.state.cwn;
                                console.log( `cwn: ${ JSON.stringify( cwn ) }` );

                                return (
                                    <div>
                                        <h2 className="cwn-info">
                                            <span className="cwn-date-time">
                                                <span className="cwn-date">
                                                    <Moment format="LL" tz="America/Chicago">
                                                        { cwn.start_time }
                                                    </Moment>
                                                </span>
                                            </span>
                                            <span className="cwn-location">{ cwn.location ? cwn.location : "Huntsville West" }</span>
                                        </h2>
                                    </div>
                                )
                            } }
                        </FlyerContext.Consumer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;
