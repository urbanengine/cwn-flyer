import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Schedule from "../components/Schedule";

const City = props => (
    <Layout>
        <title>CoWorking Night Flyer</title>
        <Schedule />
    </Layout>
);

City.getInitialProps = async function() {
    const response = await fetch("/api/schedule/coworkingnight");
    const data = await response.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data
    };
};

export default City;
