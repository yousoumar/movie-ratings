import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { weights } from "../config/variables";
import AccountScreen from "../screens/AccountScreen";
import CreateMovieScreen from "../screens/CreateMovieScreen";
import AppNavigatorContainer from "./AppNavigatorContainer";
import MoviesStackNavigator from "./MoviesStackNavigator";

interface Props {}

const AppNavigator: FC<Props> = (props) => {
  const Tab = createBottomTabNavigator();

  return (
    <AppNavigatorContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontWeight: weights.primary,
            textTransform: "uppercase",
          },
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
          name="NewMovie"
          component={CreateMovieScreen}
          options={{
            tabBarLabel: "New Movie",
            tabBarIcon: ({ size, color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "plus-circle" : "plus-circle-outline"}
                color={color}
                size={size + 10}
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
