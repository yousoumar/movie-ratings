import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { sizes, weights } from "../config/variables";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import MoviesScreen from "../screens/MoviesScreen";

interface Props {}

export type MoviesStackNavigatorProp = {
  Movies: undefined;
  MovieDetails: { title: string; id: string };
};

const MoviesStackNavigator: FC<Props> = () => {
  const Stack = createNativeStackNavigator<MoviesStackNavigatorProp>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        component={MoviesScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: sizes.normal,
            fontWeight: weights.primary,
          },
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MoviesStackNavigator;
