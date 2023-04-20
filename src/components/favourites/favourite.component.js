import React, { useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favorites/favorites.context";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
  color: green;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      onPress={() => {
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFavourites(restaurant);
      }}
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
