import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Schedule from "../components/Schedule";

const City = props => (
    <Layout>
        <title>CoWorking Night Flyer</title>
    </Layout>
);

City.getInitialProps = async function({ request }) {
    const baseUrl = request
        ? `${request.protocol}://${request.get("Host")}`
        : "";
    //const response = await fetch(baseUrl + '/api/schedule/coworkingnight');
    //const data = await response.json();

    //console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: {}
    };
};

export default City;
