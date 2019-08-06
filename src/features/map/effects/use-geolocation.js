import { useEffect, useState } from "react";

export const useGeolocation = setLocation => {
    const [error, setError] = useState(null);

    let watchId;

    let options = {
        enableHighAccuracy: true,
        timeout: 10
    };

    const setUserLocation = position => {
        setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            setUserLocation,
            setError,
            options
        );
        watchId = navigator.geolocation.watchPosition(
            setUserLocation,
            setError,
            options
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    return [error];
};