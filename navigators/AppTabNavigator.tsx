import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import MoviesStackNavigator from "./MoviesStackNavigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppNavigatorContainer from "./AppNavigatorContainer";
import CreateScreen from "../screens/CreateMovieScreen";
import AccountScreen from "../screens/AccountScreen";

interface Props {}

const AppNavigator: FC<Props> = (props) => {
  const Tab = createBottomTabNavigator();

  return (
    <AppNavigatorContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Movies List"
          component={MoviesStackNavigator}
          options={{
            tabBarLabel: "Movies",
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "account" : "account-outline"}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </AppNavigatorContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
