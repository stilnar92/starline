import {useEffect, useState} from "react";
import {getClosestOffer} from "../get-closest";

export const useClosestOffer = (userLocation) => {
    const [closestOffer, setClosestOffer] = useState(-1);

    useEffect(() => {
        const closestOffer = getClosestOffer(userLocation);
        setClosestOffer(closestOffer);

    }, [userLocation]);

    return closestOffer;
};
