import React, { Component, useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Schedule from '../components/Schedule';
import FlyerContext from '../components/FlyerContext';

const City = ( props ) => {

    const { updateSchedule } = useContext( FlyerContext );

    updateSchedule( props.message, props.cwn );

    return (
        <Layout>
            <title>CoWorking Night Flyer</title>
            <Schedule />
        </Layout>
    )
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
