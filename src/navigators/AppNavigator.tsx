import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { navigatorTheme, weights } from "../config/variables";
import AccountScreen from "../screens/AccountScreen";
import CreateMovieScreen from "../screens/CreateMovieScreen";
import MoviesNavigator from "./MoviesNavigator";

interface Props {}

const AppNavigator: FC<Props> = (props) => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer theme={navigatorTheme}>
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
          component={MoviesNavigator}
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
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
