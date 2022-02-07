import { useRoute } from "@react-navigation/native";

import React, { FC } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFetchMovieByID } from "../hooks/dataApi";
import { colors, weights } from "../config/variables";
import { MoviesStackNavigatorProp } from "../navigators/MoviesStackNavigator";

type Props = NativeStackScreenProps<MoviesStackNavigatorProp, "MovieDetails">;

const MoviesDetailsScreen: FC<Props> = () => {
  const route = useRoute<Props["route"]>();
  const { rate, title, resume } = useFetchMovieByID(route.params.id);

  return (
    <ScrollView style={styles.container}>
      <AppText style={styles.rate}>{rate} ⭐️</AppText>
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

  rate: {
    position: "absolute",
    height: 40,
    backgroundColor: colors.primary,
    fontWeight: weights.primary,
    zIndex: 2,
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    borderTopLeftRadius: 10,
  },
});

export default MoviesDetailsScreen;
