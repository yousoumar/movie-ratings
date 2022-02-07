import React, { FC } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import MovieCard from "../components/MovieCard";
import { useFetchMovies } from "../hooks/dataApi";
import Screen from "./Screen";

import { MoviesStackNavigatorProp } from "../navigators/MoviesStackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { colors } from "../config/variables";

type Props = NativeStackScreenProps<MoviesStackNavigatorProp, "Movies">;

const MoviesScreen: FC<Props> = ({ navigation }) => {
  const data = useFetchMovies();
  return (
    <Screen>
      <TextInput
        style={styles.input}
        placeholder="Filter movies by title"
        placeholderTextColor={colors.white}
      />
      <FlatList
        data={data}
        renderItem={(item) => <MovieCard {...item.item} />}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 10,
    borderRadius: 30,
    fontSize: 20,
    textAlign: "center",
  },
});

export default MoviesScreen;
