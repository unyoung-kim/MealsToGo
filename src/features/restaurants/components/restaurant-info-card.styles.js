import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  algin-items: center;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
`;
