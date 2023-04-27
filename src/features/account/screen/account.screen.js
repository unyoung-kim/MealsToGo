import React from "react";
import { Text, View } from "react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../component/accounts.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover>
        <Title>Meals To Go</Title>
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            color="black"
            mode="contained"
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Login
          </AuthButton>
          <Spacer>
            <AuthButton
              icon="mail"
              color="black"
              mode="contained"
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Register
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </AccountCover>
    </AccountBackground>
  );
};
