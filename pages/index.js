import React, { Component } from 'react';
import Layout from "../components/Layout";
import FlyerContext from '../components/FlyerContext';
import fetch from 'isomorphic-unfetch';

class Index extends Component {
    constructor( props ) {
        super( props );
    }

    state = {
        message: '',
        cwn: {}
    };

    static async getInitialProps ( context ) {
        // construct the url for the endpoint that will give us the schedule
        const endpoint = `${process.env.HOSTNAME}/api/v2/flyer/group/${context.query.groupId}`;
        const response = await fetch( endpoint, { headers: { 'Authorization': process.env.APIKEY } } );
        const json = await response.json();

        return {
            message: json.message,
            cwn: json.cwn
        };
    }

    componentWillMount() {
        this.setState( {
            message: this.props.message,
            cwn: this.props.cwn
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
