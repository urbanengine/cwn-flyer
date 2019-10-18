import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Schedule from '../components/Schedule';
import FlyerContext from '../components/FlyerContext';

class City extends Component {

    constructor( props ) {
        super( props );
    }

    state = {
        message: '',
        cwn: {}
    };

    static async getInitialProps ( context ) {
        // construct the url for the endpoint that will give us the schedule
        const endpoint = `${process.env.HOSTNAME}/api/v2/flyer/group/${context.query.city.id}`;
        const response = await fetch( endpoint, { headers: { 'Authorization': process.env.APIKEY } } );
        const json = await response.json();
        
        return {
            message: json.message,
            cwn: json.cwn,
            city: context.query.city
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
                    <title>CoWorking Night Flyer</title>
                    <Schedule />
                </Layout>
            </FlyerContext.Provider>
        )
    }
}

export default City;
