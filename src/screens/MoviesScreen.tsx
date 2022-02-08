import React, { FC, useState } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import MovieCard from "../components/MovieCard";
import Screen from "../components/Screen";

import { MoviesStackNavigatorProp } from "../navigators/MoviesStackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { colors, sizes, weights } from "../config/variables";
import { initialData } from "../hooks/dataApi";
import AppText from "../components/AppText";

type Props = NativeStackScreenProps<MoviesStackNavigatorProp, "Movies">;

const MoviesScreen: FC<Props> = () => {
  const [data, setData] = useState(initialData);
  const [renderData, setRenderData] = useState(false);
  return (
    <Screen>
      <TextInput
        style={styles.input}
        placeholder="Filter movies by title"
        placeholderTextColor={colors.white}
        onChangeText={(text) => {
          if (text.trim() === "") {
            setData(initialData);
          } else {
            setData(data.filter((d) => d.title.includes(text)));
          }
        }}
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
    fontWeight: weights.primary,
  },
  input: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: colors.black,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    color: colors.white,
  },
});

export default MoviesScreen;
