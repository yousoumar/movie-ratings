import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, useState } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import MovieCard from "../components/MovieCard";
import NotFound from "../components/NotFound";
import Screen from "../components/Screen";
import { colors, sizes, weights } from "../config/variables";
import { useDataContext } from "../contexts/DataContext";
import { MoviesStackNavigatorProps } from "../navigators/MoviesNavigator";

type Props = NativeStackScreenProps<MoviesStackNavigatorProps, "Movies">;

const MoviesScreen: FC<Props> = () => {
  const { data, filterMovies, flatListRef, isContainData } = useDataContext()!;
  const [searched, setSearched] = useState(false);

  return (
    <Screen>
      <TextInput
        editable={isContainData}
        style={styles.input}
        placeholder={
          isContainData ? "Filter movies by title" : "Add movies to filter them"
        }
        placeholderTextColor={colors.white}
        onChangeText={(text) => {
          filterMovies(text);
          setSearched(!searched);
        }}
      />
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={(item) => <MovieCard {...item.item} />}
        keyExtractor={(item) => item.title}
        ListEmptyComponent={() => <NotFound searched={searched} />}
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
    backgroundColor: colors.card,
    padding: 10,
    borderRadius: 10,
    fontSize: sizes.small,
    fontWeight: weights.secondary,
    color: colors.white,
  },
});

export default MoviesScreen;
