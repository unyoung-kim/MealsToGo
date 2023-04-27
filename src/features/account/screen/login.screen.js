import React, { useState, useContext } from "react";
import { Text, View } from "react-native";
import { TextInput, ActivityIndicator, colors } from "react-native-paper";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../component/accounts.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover>
        <Title>Meals To Go</Title>

        <AccountContainer>
          <TextInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
          />
          <Spacer>
            <TextInput
              label="Password"
              value={password}
              textContentType="emailAddress"
              secureTextEntry
              autoCapitalize="none"
              secure
              onChangeText={(password) => setPassword(password)}
            />
          </Spacer>
          <Spacer size="large">
            {error && <Text>Error: Invalid Email or Password</Text>}
          </Spacer>
          <Spacer size="large">
            {!isLoading ? (
              <AuthButton
                icon="lock-open-outline"
                color="black"
                mode="contained"
                onPress={() => {
                  onLogin(email, password);
                }}
              >
                Login
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} />
            )}
          </Spacer>
        </AccountContainer>
        <Spacer>
          <AuthButton
            mode="contained"
            onPress={() => {
              navigation.goBack();
            }}
          >
            Go Back
          </AuthButton>
        </Spacer>
      </AccountCover>
    </AccountBackground>
  );
};
