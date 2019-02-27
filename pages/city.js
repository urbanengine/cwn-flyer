import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Schedule from "../components/Schedule";

const City = props => (
    <Layout>
        <title>CoWorking Night Flyer</title>
        <Schedule></Schedule>
    </Layout>
);

City.getInitialProps = async function( request ) {
    // construct the url for the endpoint that will give us the schedule
    const endpoint = `${process.env.hostname}/api/v2/flyer/group/${request.query.groupId}`;
    const response = await fetch( endpoint, { headers: { 'Authorization': process.env.APIKEY } } );
    const json = await response.json();
    
    // JSON is a promise so you have to convert it to a string before you print it.
    //console.log( `response: ${JSON.stringify( json )}` );

    return json;
};

export default City;
