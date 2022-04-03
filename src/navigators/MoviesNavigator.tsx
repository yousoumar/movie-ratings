import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { sizes, weights } from "../config/variables";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import MoviesScreen from "../screens/MoviesScreen";
import CreateMovieScreen from "../screens/CreateMovieScreen";

interface Props {}

export type MoviesStackNavigatorProps = {
  Movies: undefined;
  MovieDetails: { title: string };
  CreateMovie: undefined;
};

const MoviesNavigator: FC<Props> = () => {
  const Stack = createNativeStackNavigator<MoviesStackNavigatorProps>();
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
      <Stack.Screen
        name="CreateMovie"
        component={CreateMovieScreen}
        options={{ title: "New local movie" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MoviesNavigator;
