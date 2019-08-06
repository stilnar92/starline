import React from "react";
import { useGeolocation } from "../effects";
import { Marker } from "react-google-maps";

function UserLocation({ setLocation, location }) {
    const [error] = useGeolocation(setLocation, location);
    if (error) {
        console.warn(error.message);
    }

    return <Marker position={location} />;
}

export { UserLocation };
