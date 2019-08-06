import React, { Fragment, useState } from "react";
import { Stop } from "./stop";
import data from '../db.json';

function Stops({ routeId }) {
    const stops = data[`Route-${routeId}-Direction-${routeId}-Stops`];
    const [info, setInfo] = useState({isShow: false, id: null});
    return (
        <Fragment>
            {stops.map(stop => (
                <Stop
                    key={stop.id}
                    id={stop.id}
                    title={stop.name}
                    lat={stop.latitude}
                    lng={stop.longitude}
                    onClick={setInfo}
                    info={info}
                />
            ))}
        </Fragment>
    );
}

export { Stops };