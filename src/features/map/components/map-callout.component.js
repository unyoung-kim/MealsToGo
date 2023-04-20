import React from "react";
import { Text, View, Image } from "react-native";
import styled from "styled-components/native";

const Item = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
  max-width: 120px;
`;

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      <CompactImage source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};
