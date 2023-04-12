import React, { useContext } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, isError } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      )}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
