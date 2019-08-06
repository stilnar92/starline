import {apiDomain} from "./constants";

export const request = async (url) => {
    const response = await fetch(`${apiDomain}${url}`);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error(response.statusText)
    }
};
