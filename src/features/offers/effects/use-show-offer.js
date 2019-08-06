import {useEffect, useState} from "react";
import {notFound} from "../constants";

export  const useShowOffer = (closestOffer, currentMapMenu, offer) => {
    const [showOffer, setShowOffer] = useState(false);

    useEffect(() => {
        if ((closestOffer !== notFound && currentMapMenu)) {
            setShowOffer(true);
        }
    }, [closestOffer, offer]);

    return {showOffer, setShowOffer};
};