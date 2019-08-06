import {useEffect, useState} from "react";
import {getBuses} from '../api';
import {timeout} from '../constants';

//TODO Fake Bus Coordinate
export const useBuses = (routeId, busList) => {
    const [counter, setCounter] = useState(0);
    const {data} = getBuses(routeId, counter);

    useEffect(() => {
        const timerId = setInterval(
            () => {
                if (!data[busList[busList.length - 1] + counter]) {
                    setCounter(0)
                } else {
                    setCounter(counter => counter + 1);
                }
            }, timeout);

        return () => clearInterval(timerId);
    },);

    return {data, counter};
};