import Jumbotron from "./Jumbotron";
import Sponsors from "./Sponsors";
import Head from "next/head";
import css from 'styled-jsx/css';

const styles = css`
    body {
        font-family: "Raleway", sans-serif;
        background: #ebe6db;
    }

    @font-face {
        font-family: Raleway;
        font-style: normal;
        font-weight: 400;
        src: local("Raleway"), local("Raleway-Regular"), url(https://fonts.gstatic.com/s/raleway/v11/bIcY3_3JNqUVRAQQRNVteQ.ttf) format("truetype")
    }

    @font-face {
        font-family: Raleway;
        font-style: normal;
        font-weight: 700;
        src: local("Raleway Bold"), local("Raleway-Bold"), url(https://fonts.gstatic.com/s/raleway/v11/JbtMzqLaYbbbCL9X6EvaIy3USBnSvpkopQaUR-2r7iU.ttf) format("truetype")
    }
`;

const Layout = props => (
    <div>
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" key="httpEquiv" />
            <meta charSet="utf-8" key="charSet" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />

            <meta property="og:type" content="event" key="og:type" />
            <meta property="og:url"  content="https://cwnflyer.com" key="og:url" />
            <meta
                property="og:image"
                content="http://api.screenshotmachine.com/?key=cc48ac&dimension=1200x630&format=png&hash=0ce5a0fa9c3712995bfb21b1719381cb&cacheLimit=1&timeout=3000&url=https://www.cwnflyer.com/"
                key="og:image"
            />
            <meta
                property="og:description"
                content="CoWorking Night is a free weekly conference where professionals come to learn, connect, and collaborate.  Each week features a new lineup of workshops. See what's happening this week!"
                key="og:description"
            />
            <meta property="og:site_name" content="CoWorking Night" key="og:site_name" />

            <title>CoWorking Night Flyer</title>
            <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
        </Head>
        <header>
            <Jumbotron />
        </header>
        <main>{props.children}</main>
        <footer>
            <Sponsors />
        </footer>

        <style jsx>{styles}</style>
    </div>
)

export default Layout;
