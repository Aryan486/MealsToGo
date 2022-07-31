import React, { useState, useMemo, useEffect, createContext, useContext } from "react";
import { LocationContext } from "../location/location.context";
import { restaurantsRequest, restaurantsTransform } from "./restaurants.services";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const { location } = useContext(LocationContext)

    const retrieveRestaurants = (loc) => {
        setIsLoading(true)
        setRestaurants([])
        setTimeout(() => {
            restaurantsRequest(loc).then(restaurantsTransform).then((result) => {
                setIsLoading(false)
                setRestaurants(result)
            }).catch(err => {
                setIsError(err)
                setIsLoading(false)
            })
        }, 2000)
    }

    useEffect(() => {
        if (location) {
            const formatString = `${location.lat},${location.lng}`
            retrieveRestaurants(formatString);
        }
    }, [location])

    return (
        <RestaurantContext.Provider value={{ restaurants, isLoading, isError }}>
            {children}
        </RestaurantContext.Provider>
    );
} 