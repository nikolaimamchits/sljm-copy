import "../styles/global.css"
import {Fragment} from "react";
import {Navbar} from "../components";

function MyApp({Component, pageProps}) {
    return <Fragment>
        <Navbar/>
        <Component {...pageProps} />
    </Fragment>
}

export default MyApp
