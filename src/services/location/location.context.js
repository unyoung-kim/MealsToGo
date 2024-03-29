import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("Chicago");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //do an API request and get latitude and longitude to update location variable (setLocation)
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  //When keyword changes, we will do an API call
  //keyword changes when onSearch is called
  useEffect(() => {
    if (!keyword.length) {
      // Don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase()) //Fake API request
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
