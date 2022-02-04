import React, { FC } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MovieCard from "./MovieCard";

interface MoviesListPropos {}

const MoviesList: FC<MoviesListPropos> = (props) => {
  const data = [
    {
      id: "1",
      resume:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequivoluptatum commodi praesentium nobis debitis asperiores;",
      rate: 5,
    },
    {
      id: "2",
      resume:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequivoluptatum commodi praesentium nobis debitis asperiores;",
      rate: 5,
    },
  ];
  return (
    <FlatList
      data={data}
      renderItem={(item) => (
        <MovieCard resume={item.item.resume} rate={item.item.rate} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MoviesList;
