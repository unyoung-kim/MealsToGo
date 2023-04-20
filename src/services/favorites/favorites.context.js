import React, { useState, useEffect } from "react";

export const FavouritesContext = React.createContext();

// children here means any components that goes between FavouritesContext Provider will inherit the information about favourite restaurants.
export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

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
