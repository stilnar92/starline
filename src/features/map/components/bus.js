import React from "react";
import {Marker} from "react-google-maps";

function Bus({coordinates, icon}) {
    return <Marker position={coordinates} icon={icon}/>;
}

export {Bus};