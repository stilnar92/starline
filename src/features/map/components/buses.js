import React from "react";
import {Bus} from "./bus";
import {useBuses} from "../effects";

let busList = [0, 30, 60, 90];

function Buses({routeId, icon, color}) {
    const {data, counter} = useBuses(routeId, busList);

    return data && busList.map(value => (
        <Bus key={value} coordinates={data[value + counter]} color={color} icon={icon}/>
    ))
}

export {Buses};