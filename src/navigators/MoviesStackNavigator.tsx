import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { sizes, weights } from "../config/variables";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import MoviesScreen from "../screens/MoviesScreen";

interface Props {}

export type MoviesStackNavigatorProp = {
  Movies: undefined;
  MovieDetails: { title: string };
  CreateMovie: undefined;
};

const MoviesStackNavigator: FC<Props> = () => {
  const Stack = createNativeStackNavigator<MoviesStackNavigatorProp>();
  return (
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
        name="Movies"
        component={MoviesScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MoviesStackNavigator;
