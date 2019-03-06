import Head from "next/head";
import "moment-timezone";

const Sponsors = props => (
    <div>
        <Head>
            <link rel="stylesheet" href="/static/sponsors.css" key="sponsors:css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" key="raleway:font" />
        </Head>
        <div className="footer-spacer" />
        <footer className="footer fixed-bottom text-center">
            <div className="container">
                <p className="cwn-sponsors">
                    Sponsored by{" "}
                    <a href="https://www.huntsvillewest.com" target="_blank">
                        Huntsville West
                    </a>
                    . Presented by{" "}
                    <a href="https://www.urbanengine.org" target="_blank">
                        Urban Engine
                    </a>
                    .
                </p>
            </div>
        </footer>
    </div>
);

export default Sponsors;
