import React, { FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors, weights } from "../config/variables";
import AppText from "./AppText";

interface MovieCardPropos {
  resume: string;
  title: string;
  rate: number;
}

const MovieCard: FC<MovieCardPropos> = ({ resume, title, rate }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.rate}>{rate} ⭐️</AppText>
      <Image
        style={styles.img}
        resizeMode="cover"
        source={require("../assets/movie.jpg")}
      />

      <View style={styles.content}>
        <AppText type="secondary" numberOfLines={1}>
          {title}
        </AppText>
        <AppText numberOfLines={1} style={styles.text}>
          {resume}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    borderColor: colors.primary,
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

  text: {
    marginTop: 10,
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
