import { useFetch, apiDomain } from "../common";

export const getArrivals = (stopId) => {
    const { data, loading, error } = useFetch(`${apiDomain}/arrivals`);
    return { data, loading, error };
};

export const getBuses = (routeId, refetch) => {
    const { data, loading, error } = useFetch(`${apiDomain}/Route-${routeId}-WayPoints`, refetch);
    return { data, loading, error };
};