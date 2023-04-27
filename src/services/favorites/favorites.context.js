import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = React.createContext();

// children here means any components that goes between FavouritesContext Provider will inherit the information about favourite restaurants.
export const FavouritesContextProvider = ({ children }) => {
  const { user } = AuthenticationContext;
  const [favourites, setFavourites] = useState([]);

  //Store Data --> setItem()
  const storeFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue); //@favourites --> storage key
    } catch (e) {
      console.log("error storing", e);
    }
  };

  //Get Data --> getItem()
  const getFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  //Every mount or initial load, we get the existing favourites
  useEffect(() => {
    if (user && user.uid) {
      getFavourites(user.uid);
    }
  }, [user]);

  //Everytime we add the favourites, we save it
  useEffect(() => {
    if (user && user.uid && favourites) {
      storeFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
