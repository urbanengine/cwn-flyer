import React, { Component } from 'react';
import Head from "next/head";
import "moment-timezone";
import FlyerContext from './FlyerContext';

class Sponsors extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="/static/css/sponsors.css" key="sponsors:css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" key="raleway:font" />
                </Head>
                <div className="footer-spacer" />
                <footer className="footer fixed-bottom text-center">
                    <div className="container">
                        <p className="cwn-sponsors">
                            Presented by&nbsp;
                            <a href="https://www.urbanengine.org" target="_blank">
                                Urban Engine
                            </a>
                            .
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Sponsors;
