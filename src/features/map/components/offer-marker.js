import React from "react";
import { Marker } from "react-google-maps";
import offerOrange from "../../../assets/offer-orange.svg"
import offerGreen from "../../../assets/offer-green.svg"
const google = window.google;
const offersIcon = [offerOrange, offerGreen];
export const OfferMarker = ({ id, coords,  handleShow, index }) => (
    <Marker
        animation={google.maps.Animation.BOUNCE}
        position={{ lat: coords.lat, lng: coords.lng }}
        icon={offersIcon[id]}
        onClick={() => handleShow(index)}
    />
);
