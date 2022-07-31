import camelize from "camelize";
import { locations } from "./location.mock";

export const LocationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const getLocation = locations[searchTerm];
        if (!getLocation) {
            reject("Location not found!!")
            alert("Location not found!!")
        }
        resolve(getLocation)
    })
}

export const LocationTransform = (result) => {
    const camelizeLocation = camelize(result.results);
    const { geometry = {} } = camelizeLocation[0];
    const { lat, lng } = geometry.location;

    return { lat, lng }
}