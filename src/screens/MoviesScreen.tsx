import React, { FC } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import MovieCard from "../components/MovieCard";
import Screen from "./Screen";

import { MoviesStackNavigatorProp } from "../navigators/MoviesStackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { colors } from "../config/variables";
import { useDataContext } from "../contexts/MoviesContext";

type Props = NativeStackScreenProps<MoviesStackNavigatorProp, "Movies">;

const MoviesScreen: FC<Props> = () => {
  const { data } = useDataContext();
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
    borderColor: colors.black,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
  },
});

export default MoviesScreen;
