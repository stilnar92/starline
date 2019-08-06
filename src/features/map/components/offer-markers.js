import React, {Fragment} from 'react';
import {OfferMarker} from './offer-marker';

function OfferMarkers({items, handleShow}) {
    return (
        <Fragment>
            <OfferMarker key={items[0].id} coords={{lat: items[0].latitude, lng: items[0].longitude}} id={items[0].id}
                         handleShow={() => handleShow(items[0].id)}/>
            <OfferMarker key={items[1].id} coords={{lat: items[1].latitude, lng: items[1].longitude}} id={items[1].id}
                         handleShow={() => handleShow(items[1].id)}/>
        </Fragment>
    );
}

export {OfferMarkers};