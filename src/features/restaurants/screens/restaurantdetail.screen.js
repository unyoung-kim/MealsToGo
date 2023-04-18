import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantDetailComponent } from "../components/restaurant-detail-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const RestaurantDetailScreen = ({ route, nagivation }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantDetailComponent />
    </SafeArea>
  );
};
