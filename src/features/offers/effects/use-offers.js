import {request} from "../../common";
import {useEffect, useState} from "react";

export const useOffers = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        request('/offers').then((data) => setOffers(data));

        const timerId = setInterval(async () => {
            request('/offers').then((data) => setOffers(data));
        }, 10000);

        return () => clearInterval(timerId);

    }, []);
    return offers;
};
