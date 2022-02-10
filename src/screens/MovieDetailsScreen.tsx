import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Rate from "../components/Rate";
import { useDataContext } from "../context/DataContextProvider";
import { MoviesStackNavigatorProp } from "../navigators/MoviesStackNavigator";

type Props = NativeStackScreenProps<MoviesStackNavigatorProp, "MovieDetails">;

const MoviesDetailsScreen: FC<Props> = () => {
  const route = useRoute<Props["route"]>();
  const { fetchMovieById } = useDataContext();
  const { rate, resume } = fetchMovieById(route.params.id);

  return (
    <ScrollView style={styles.container}>
      <Rate rate={rate} />
      <Image
        style={styles.img}
        resizeMode="cover"
        source={require("../assets/movie.jpg")}
      />

      <AppText>{resume}</AppText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    overflow: "hidden",
  },

  img: {
    width: "100%",
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default MoviesDetailsScreen;
