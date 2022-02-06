import React, { FC } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import { colors, sizes, weights } from "../config/variables";
import AppText from "./AppText";

interface MovieCardPropos {
  resume: string;
  title: string;
  rate: number;
}

const MovieCard: FC<MovieCardPropos> = ({ resume, title, rate }) => {
  const navigation = React.useContext(NavigationContext);
  return (
    <Pressable onPress={() => navigation?.navigate("Details")}>
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
