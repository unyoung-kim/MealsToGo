import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card mode="elevated">
      <Card.Title title={name} />
      <Card.Content>
        <Text>{address}</Text>
      </Card.Content>
      <Card.Cover source={{ url: photos[0] }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};
