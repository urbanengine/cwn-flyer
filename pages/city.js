import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Schedule from "../components/Schedule";

const City = props => (
    <Layout>
        <title>CoWorking Night Flyer</title>
    </Layout>
);

City.getInitialProps = async function( request ) {
    // construct the url for the endpoint that will give us the schedule
    const endpoint = `${process.env.hostname}/api/v2/flyer/group/${request.query.groupId}`;

    fetch( endpoint, { headers: { 'Authorization': process.env.APIKEY } } )
        .then( function( response ) {
            return response.json();
        } )
        .then(function( json ) {
            console.log(`json: ${json}`);
            console.log( `Show data fetched. Count: ${json.length}` );
        } );

    return {
        shows: {}
    };
};

export default City;
