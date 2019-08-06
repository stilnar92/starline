import { Marker } from "react-google-maps";
import React  from "react";
import stop from "../../../assets/bus-stop.svg";
import { Arrival } from "./arrival";

export const Stop = ({ info, onClick, id, title, lat, lng }) => {
    return (
        <Marker
            position={{ lat, lng }}
            icon={stop}
            onClick={() => onClick({isShow: true, id})}
            title={title}
        >
            {info.isShow &&  info.id === id && <Arrival stopId={id} handleClick={onClick} />}
        </Marker>
    );
};
