import React, { Component } from 'react';
import Layout from "../components/Layout";

class Index extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <Layout>
                <title>CoWorking Night Flyer</title>
                <h1>Welcome to next.js!</h1>
            </Layout>
        )
    }
}

export default Index;
