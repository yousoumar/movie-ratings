import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import MoviesStackNavigator from "./MoviesStackNavigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppNavigatorContainer from "./AppNavigatorContainer";
import CreateScreen from "../screens/CreateMovieScreen";

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
            tabBarLabel: "Movies List",
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
          name="Create"
          component={CreateScreen}
          options={{
            tabBarLabel: "New Movie",
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "plus-circle" : "plus-circle-outline"}
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
