import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import TmdbMovieDetailsScreen from "../screens/TmdbMovieDetailsScreen";
import TmdbMoviesScreen from "../screens/TmdbMoviesScreen";

interface Props {}

export type TmdbMoviesStackNavigatorProps = {
  TmdbMovies: undefined;
  TmdbMovieDetails: { id: string; title: string };
};

const TmdbMoviesNavigator: FC<Props> = () => {
  const Stack = createNativeStackNavigator<TmdbMoviesStackNavigatorProps>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="TmdbMovies"
        component={TmdbMoviesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TmdbMovieDetails"
        options={{ headerTitle: "" }}
        component={TmdbMovieDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TmdbMoviesNavigator;
