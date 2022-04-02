import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import Screen from "../components/Screen";
import StatusInfo from "../components/StatusInfo";
import { colors, sizes, weights } from "../config/variables";
import { useDataContext } from "../contexts/DataContext";
import { MoviesStackNavigatorProps } from "../navigators/MoviesNavigator";

type Props = NativeStackScreenProps<MoviesStackNavigatorProps, "Movies">;

const MoviesScreen: FC<Props> = () => {
  const { data, filterMovies, flatListRef, isContainData, isLoading } =
    useDataContext()!;

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Screen>
      {
        isContainData && <TextInput
              editable={isContainData}
              style={styles.input}
              placeholder= "Filter movies by title"
              placeholderTextColor={colors.white}
              onChangeText={(text) => {
                filterMovies(text);
              }}
          />
      }

      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={(item) => <MovieCard {...item.item} />}
        keyExtractor={(item) => item.title}
        ListEmptyComponent={() => <StatusInfo isContainData={isContainData} />}
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
