import React, {Fragment} from 'react';
import {Route} from "../components/route";
import {Stops} from './stops';
import {Buses} from "./buses";
import data from  '../db';

const Tour = React.memo(({color, routeId = 0, icon}) => {
    const path = data[`Route-${routeId}-WayPoints`];

    return (
        <Fragment>
            <Route
                path={path}
                color={color}
            />
            <Stops routeId={routeId}/>
            <Buses routeId={routeId} icon={icon} color={color}/>
        </Fragment>
    );
});

export {Tour};