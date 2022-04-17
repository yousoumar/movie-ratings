import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { sizes, weights } from "../config/variables";
import LocalMovieCreationScreen from "../screens/LocalMovieCreationScreen";
import LocalMoviesDetailsScreen from "../screens/LocalMovieDetailsScreen";
import LocalMoviesScreen from "../screens/LocalMoviesScreen";

interface Props {}

export type LocalMoviesStackNavigatorProps = {
  Movies: undefined;
  MovieDetails: { title: string };
  CreateMovie: undefined;
};

const LocalMoviesNavigator: FC<Props> = () => {
  const Stack = createNativeStackNavigator<LocalMoviesStackNavigatorProps>();
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
        component={LocalMoviesScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MovieDetails"
        component={LocalMoviesDetailsScreen}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="CreateMovie"
        component={LocalMovieCreationScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LocalMoviesNavigator;
