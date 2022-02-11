import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { navigatorTheme, sizes, weights } from "../config/variables";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

interface Props {}

export type AutenticationNavigatorProps = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};
const AuthenticationNavigator: FC<Props> = () => {
  const Stack = createNativeStackNavigator<AutenticationNavigatorProps>();
  return (
    <NavigationContainer theme={navigatorTheme}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: sizes.secondary,
            fontWeight: weights.primary,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticationNavigator;
