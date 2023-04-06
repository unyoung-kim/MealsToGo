import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-paper";
import styled from "styled-components";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
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
      <Card.Cover key={name} style={styles.cover} source={{ url: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  cover: { padding: 20 },
});
