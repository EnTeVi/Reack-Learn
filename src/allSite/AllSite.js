import {Outlet} from "react-router-dom";

import {Headers} from "../components/";

function AllSite () {
    return (
        <div className='container'>
            <Headers/>
            <h3>Information about user data</h3>
            <Outlet/>
        </div>
    )
}

export {AllSite};