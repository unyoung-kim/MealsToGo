import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const RestaurantDetailScreen = ({ route, nagivation }) => {
  const { test } = route.params;
  console.log(route.test);
  return (
    <SafeArea>
      <Text>{test}</Text>
    </SafeArea>
  );
};
