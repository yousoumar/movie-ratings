import React, { FC } from "react";
import { FlatList } from "react-native";
import MovieCard from "../components/MovieCard";
import { useFetchMovies } from "../hooks/dataApi";
import Screen from "./Screen";

interface MoviesScreenPropos {}

const MoviesScreen: FC<MoviesScreenPropos> = () => {
  const data = useFetchMovies();
  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={(item) => <MovieCard {...item.item} />}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  );
};

export default MoviesScreen;
