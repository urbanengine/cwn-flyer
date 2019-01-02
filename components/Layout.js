import Jumbotron from "./Jumbotron";
import Sponsors from "./Sponsors";

const Layout = props => (
    <div>
        <header>
            <Jumbotron />
        </header>
        <main>{props.children}</main>
        <footer>
            <Sponsors />
        </footer>
    </div>
);

export default Layout;
