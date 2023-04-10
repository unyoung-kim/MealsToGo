import React, { useState, createContext, useEffects, useMemo } from "react";
import { restaurantRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  return (
    <RestaurantContextProvider.Provider
      value={{ restaurants: [1, 2, 3, 4, 5, 6, 7, 8] }}
    >
      {children}
    </RestaurantContextProvider.Provider>
  );
};
