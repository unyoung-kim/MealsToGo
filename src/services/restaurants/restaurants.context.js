import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useMemo,
} from "react";
import { restaurantRequest, restaurantsTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retreiveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]); //While loading, the list should be empty for empty screen
    setTimeout(() => {
      restaurantRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setRestaurants(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 1200);
  };

  //Everytime, location changes, retrieve restaruants
  useEffect(() => {
    if (location) {
      retreiveRestaurants(`${location.lat},${location.lng}`);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
