import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import AppText from "../components/AppText";
import MovieCard from "../components/MovieCard";
import Screen from "../components/Screen";
import { colors, sizes, weights } from "../config/variables";
import { useDataContext } from "../context/DataContextProvider";
import { MoviesStackNavigatorProp } from "../navigators/MoviesStackNavigator";

type Props = NativeStackScreenProps<MoviesStackNavigatorProp, "Movies">;

const MoviesScreen: FC<Props> = () => {
  const { data, filterMovies } = useDataContext();

  return (
    <Screen>
      <TextInput
        style={styles.input}
        placeholder="Filter movies by title"
        placeholderTextColor={colors.white}
        onChangeText={(text) => filterMovies(text)}
      />
      <FlatList
        data={data}
        renderItem={(item) => <MovieCard {...item.item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <AppText style={styles.noFound}>
            There is no result matching your search.
          </AppText>
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  noFound: {
    padding: 10,
    textAlign: "center",
    marginTop: 100,
    fontSize: sizes.secondary,
    fontWeight: weights.secondary,
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: colors.black,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    fontSize: sizes.small,
    color: colors.white,
  },
});

export default MoviesScreen;
