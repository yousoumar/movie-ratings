import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import ListingsNavigator from "./ListingsNavigator";
import data from "../data/moviesList";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppNavigatorContainer from "./AppNavigatorContainer";
import CreateScreen from "../screens/CreateScreen";

interface AppNavigatorPropos {}

const AppNavigator: FC<AppNavigatorPropos> = (props) => {
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
          options={{
            tabBarLabel: "Movies List",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        >
          {(props) => <ListingsNavigator {...props} data={data} />}
        </Tab.Screen>
        <Tab.Screen
          name="Create"
          options={{
            tabBarLabel: "New Movie",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="plus-circle"
                color={color}
                size={size}
              />
            ),
          }}
        >
          {(props) => <CreateScreen />}
        </Tab.Screen>
      </Tab.Navigator>
    </AppNavigatorContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
