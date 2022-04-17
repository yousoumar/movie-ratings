import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { navigatorTheme, weights } from "../config/variables";
import AccountScreen from "../screens/AccountScreen";
import LocalMoviesNavigator from "./LocalMoviesNavigator";
import TmdbMoviesNavigator from "./TmdbMoviesNavigator";

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
          name="Local Movies List"
          component={LocalMoviesNavigator}
          options={{
            tabBarLabel: "Local",
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
          name="TMDB Movies List"
          component={TmdbMoviesNavigator}
          options={{
            tabBarLabel: "TMDB",
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "movie" : "movie-outline"}
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
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
