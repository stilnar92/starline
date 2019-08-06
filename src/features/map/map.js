import React from "react";
import {MapCore, OfferMarkers, Tours, UserLocation} from "./components";
import {offerPlaces} from "../offers";

const Map = ({children, show, setUserLocation, userLocation, onClickOfferMarker}) => {
    return (
        <MapCore mapElement={<div style={{height: "100%", opacity: show ? 1 : 0}}/>} style={{opacity: 0}}>
            <Tours/>
            <OfferMarkers
                items={offerPlaces}
                handleShow={onClickOfferMarker}
            />
            <UserLocation setLocation={setUserLocation} location={userLocation}/>
        </MapCore>
    );
};

export {Map};