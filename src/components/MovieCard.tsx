import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { colors, sizes, weights } from "../config/variables";
import { MovieInterface } from "../context/DataContextProvider";
import { MoviesStackNavigatorProp } from "../navigators/MoviesStackNavigator";
import AppText from "./AppText";
import Rate from "./Rate";

type NavigationProp = NativeStackNavigationProp<
  MoviesStackNavigatorProp,
  "MovieDetails"
>;

const MovieCard: FC<MovieInterface> = ({ title, rate, imageUri }) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <Pressable onPress={() => navigation?.navigate("MovieDetails", { title })}>
      <View style={styles.container}>
        <Rate rate={rate} />
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{ uri: imageUri }}
        />

        <View style={styles.content}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.black,
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
    fontSize: sizes.secondary,
    fontWeight: weights.primary,
  },
});

export default MovieCard;
