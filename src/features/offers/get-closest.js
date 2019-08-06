import {getDistance} from "../../lib";
import {distanceEnough, notFound, offerPlaces} from "./constants";

const firstOfferPlace = offerPlaces[0];
const secondOfferPlace = offerPlaces[1];

export const getClosestOffer = ({lat, lng}) => {
    //TODO rewrite for multiple places
    const distanceOne = getDistance(lat, lng, firstOfferPlace.latitude, firstOfferPlace.longitude);
    const distanceTwo = getDistance(lat, lng, secondOfferPlace.latitude, secondOfferPlace.longitude);

    if (distanceOne < distanceEnough) {
        return firstOfferPlace.id;
    }
    if (distanceTwo < distanceEnough) {
        return secondOfferPlace.id;
    }
    return notFound;
};
