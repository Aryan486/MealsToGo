import React, { useState, createContext, useEffect } from 'react';
import { LocationRequest, LocationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("Antwerp");
    const [error, setError] = useState(null)
    const [isLoadingLocation, setIsLoadingLocation] = useState(false)
    const [location, setLocation] = useState(null)

    const onSearch = (searchKey) => {
        setIsLoadingLocation(true);
        setKeyword(searchKey);
        setLocation(null)
        if (!searchKey.length) {
            return;
        }
        LocationRequest(searchKey.toLowerCase())
            .then(LocationTransform)
            .then((result) => {
                setIsLoadingLocation(false)
                setLocation(result)
            })
            .catch(err => {
                setError(err)
                setIsLoadingLocation(false)
                console.log(err)
            })
    }

    useEffect(() => {
        onSearch(keyword)
    }, [])

    return (
        <LocationContext.Provider
            value={{
                keyword,
                error,
                location,
                isLoadingLocation,
                search: onSearch
            }}>
            {children}
        </LocationContext.Provider>
    )
}