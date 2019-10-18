import Jumbotron from "./Jumbotron";
import Sponsors from "./Sponsors";
import Head from "next/head";

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
            <link rel="stylesheet" href="/static/css/layout.css" key="layout:css" />
        </Head>
        <header>
            <Jumbotron />
        </header>
        <main>{props.children}</main>
        <footer>
            <Sponsors />
        </footer>
    </div>
)

export default Layout;
