import React, { FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, Pressable } from "react-native";
import MovieCard from "../components/MovieCard";
import { useFetchMovies } from "../hooks/dataApi";
import Screen from "./Screen";
import { colors } from "../config/variables";
import { MoviesStackNavigatorProp } from "../navigators/MoviesStackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<MoviesStackNavigatorProp, "Movies">;

const MoviesScreen: FC<Props> = ({ navigation }) => {
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
