import React, { FC } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors, sizes, weights } from "../config/variables";
import AppText from "./AppText";
import { MovieInterface } from "../hooks/dataApi";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MoviesStackNavigatorProp } from "../navigators/MoviesStackNavigator";

type NavigationProp = NativeStackNavigationProp<
  MoviesStackNavigatorProp,
  "MovieDetails"
>;

const MovieCard: FC<MovieInterface> = ({ resume, title, rate, id }) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <Pressable
      onPress={() => navigation?.navigate("MovieDetails", { title, id })}
    >
      <View style={styles.container}>
        <AppText style={styles.rate}>{rate} ⭐️</AppText>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require("../assets/movie.jpg")}
        />

        <View style={styles.content}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText numberOfLines={1}>{resume}</AppText>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 2,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    overflow: "hidden",
  },
  content: {
    padding: 10,
  },
  img: {
    width: "100%",
    height: 200,
  },

  title: {
    marginVertical: 10,
    fontSize: sizes.secondary,
    fontWeight: weights.primary,
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
  },
});

export default MovieCard;
