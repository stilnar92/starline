import {useEffect, useState} from "react";

export const useAlreadyShowOffer = (offer, offerOldId) => {
    const [later, setLater] = useState(false);
    useEffect(() => {
        // if (offer && offer.id !== offerOldId) {
            setLater(false);
        // }
    }, [offer]);

    return {later, setLater};
};