import React, { FC } from "react";
import { StyleSheet, FlatList } from "react-native";
import { movieInterface } from "../data/moviesList";
import MovieCard from "./MovieCard";

interface MoviesListPropos {
  data: movieInterface[];
}

const MoviesList: FC<MoviesListPropos> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={(item) => <MovieCard {...item.item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MoviesList;
