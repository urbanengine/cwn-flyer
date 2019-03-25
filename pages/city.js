import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Schedule from '../components/Schedule';
import Provider from '../components/Provider';

class City extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        console.log( `city props.message: ${JSON.stringify(this.props.message)}`);
        console.log( `city props.cwn: ${JSON.stringify(this.props.cwn)}`);

        return (
            <Provider value={{
                    message: this.props.message,
                    cwn: this.props.cwn
                }}>
                <Layout>
                    <title>CoWorking Night Flyer</title>
                    <Schedule />
                </Layout>
            </Provider>
        )
    }
}

City.getInitialProps = async function( context ) {
    // construct the url for the endpoint that will give us the schedule
    const endpoint = `${process.env.HOSTNAME}/api/v2/flyer/group/${context.query.groupId}`;
    const response = await fetch( endpoint, { headers: { 'Authorization': process.env.APIKEY } } );
    const json = await response.json();

    return {
        message: json.message,
        cwn: json.cwn
    };
};

export default City;
