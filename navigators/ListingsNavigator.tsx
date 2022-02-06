import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { sizes, weights } from "../config/variables";
import { movieInterface } from "../data/moviesList";
import ListingsDetailsScreen from "../screens/ListingsDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

interface ListingsNavigatorPropos {
  data: movieInterface[];
}

const ListingsNavigator: FC<ListingsNavigatorPropos> = ({ data }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listings" options={{ headerShown: false }}>
        {(props) => <ListingsScreen {...props} data={data} />}
      </Stack.Screen>
      <Stack.Screen
        name="Details"
        options={{
          headerBackTitleVisible: false,
          title: "",
          headerShadowVisible: false,
        }}
      >
        {(props) => <ListingsDetailsScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ListingsNavigator;
