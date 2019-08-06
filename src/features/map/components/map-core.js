import React from "react";
import {compose, withProps} from "recompose";
import {withGoogleMap, GoogleMap} from "react-google-maps";
import {googleMapURL, defaultCenter, defaultZoom} from "../constants";
import {styles} from "../../../lib/map-styles";

const settings = {
    googleMapURL,
    loadingElement: <div style={{position: "relative", width: "100%", height: "100%"}}/>,
    containerElement: <div style={{width: "100%", height: "100%"}}/>,
};

export const MapCore = compose(
    withProps(settings),
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
        options={{styles: styles, mapTypeControl: false, fullscreenControl: false,}}
    >
        {props.children}
    </GoogleMap>
));
;
