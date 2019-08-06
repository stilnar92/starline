import React from "react";
import { Polyline } from "react-google-maps";

function Route({ path, color }) {
    return (
        <Polyline
            path={path}
            options={{
                geodesic: true,
                strokeColor: color,
                strokeWeight: 2
            }}
        />
    );
}

export { Route };
