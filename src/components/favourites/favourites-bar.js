import React from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../features/map/components/map-callout.component";

const FavouritesContainer = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (favourites.length === 0) {
    return null;
  }
  return (
    <FavouritesContainer>
      <Text>Favourites</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        {favourites.map((restaurant) => {
          return (
            <TouchableOpacity
              onPress={() => onNavigate("RestaurantDetails", { restaurant })}
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavouritesContainer>
  );
};
