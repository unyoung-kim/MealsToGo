import styled from "styled-components";
import { ImageBackground, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
    position::absolute;
    width:100%;
    height: 100%;
    background-color: rgba(255,255,255,0.3);
    align-items: center;
    justify-content: center;
`;

export const AccountContainer = styled(View)`
  background-color: rgba(255, 255, 255, 0.7);
  width: 60%;

  justify-content: center;
  padding: 10px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const Title = styled.Text`
  font-size: 20px;
`;
