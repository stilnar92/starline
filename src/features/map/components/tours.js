import React, {Fragment} from "react";
import {Tour} from "./tour";
import {theme} from "../../../ui";

import busRed from "../../../assets/bus-red.svg";
import busYellow from "../../../assets/bus-yellow.svg";
import busBlue from "../../../assets/bus-blue.svg";
import busPurple from "../../../assets/bus-purple.svg";
import busOrange from "../../../assets/bus-orange.svg";


const tours = [
    {routeId: 6386, color: theme.color.routes.red, name: 'red', icon: busRed},
    {routeId: 1852, color: theme.color.routes.yellow, name: 'yellow', icon: busYellow},
    {routeId: 1853, color: theme.color.routes.blue, name: 'blue', icon: busBlue},
    {routeId: 5246, color: theme.color.routes.purple, name: 'purple', icon: busPurple},
    {routeId: 1849, color: theme.color.routes.orange, name: 'orange', icon: busOrange},
];


function Tours() {
    return (
        <Fragment>
            {tours.map((tour) => (
                <Tour key={tour.routeId} routeId={tour.routeId} color={tour.color} icon={tour.icon} name={tour.name}/>
            ))}
        </Fragment>
    );
}

export {Tours};