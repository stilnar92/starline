import React, { Fragment } from "react";
import { InfoWindow } from "react-google-maps";
import { getArrivals } from "../api";

function Arrival({ stopId, handleClick }) {
    const { data: arrivals } = getArrivals(stopId);
    return (
        <InfoWindow onCloseClick={() => handleClick({ id: null, isShow: false })}>
            <Fragment>
                {arrivals.map((arrival, index) => (
                    <div key={index}>
                        {arrival.BusName} - {arrival.ArriveTime}
                    </div>
                ))}
            </Fragment>
        </InfoWindow>
    );
}

export { Arrival };
