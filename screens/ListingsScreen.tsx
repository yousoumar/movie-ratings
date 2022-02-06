import React, { FC } from "react";
import { FlatList } from "react-native";
import MovieCard from "../components/MovieCard";
import Screen from "./Screen";
import { movieInterface } from "../data/moviesList";
import AppText from "../components/AppText";

interface ListingsScreenPropos {
  data: movieInterface[];
}

const ListingsScreen: FC<ListingsScreenPropos> = ({ data }) => {
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

export default ListingsScreen;
