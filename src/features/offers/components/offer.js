import React, {useState} from 'react';
import {OfferCard} from "./offer-card";
import {useAlreadyShowOffer, useClosestOffer, useShowOffer} from "../effects";

export const Offer = ({userLocation, showOfferList, mapMenu, offerClicked, offer, setOfferClicked}) => {
    const closestOffer = useClosestOffer(userLocation);
    const {showOffer, setShowOffer} = useShowOffer(closestOffer, mapMenu, offer);
    const [offerId, setOfferId] = useState(null);
    const {later, setLater} = useAlreadyShowOffer(offer, offerId);

    return (
        <OfferCard
            offer={offer}
            stops={[
                {title: 'Fast-Track Entry to London Eye'},
                {title: 'Pre-recorded Commentary'},
                {title: 'River Cruise - One Way'},
                {title: 'Over 45 Stops'},
                {title: 'Live Guides'},
                {title: 'Hop-on, Hop-off'},
                {title: 'Hop-on, Hop-off'},
                {title: '4 Different Routes'},
                {title: '4 Different Routes'},
                {title: 'Free Walking Tour'}
            ]}
            show={(showOffer && !later) || offerClicked}
            handleClose={() => {
                setShowOffer(false);
                setLater(true);
                setOfferClicked(false);
                setOfferId(offer.id);
            }}/>
    )
};
