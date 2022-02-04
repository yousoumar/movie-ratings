import React, { FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors } from "../config/variables";
import AppText from "./AppText";

interface MovieCardPropos {
  resume: string;
  rate: number;
}

const MovieCard: FC<MovieCardPropos> = ({ resume, rate }) => {
  const rateArry = new Array(rate);
  console.log(rateArry);
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require("../assets/movie.jpg")}
        />
      </View>
      <View style={styles.content}>
        <AppText type="secondary">Spiderman</AppText>
        <AppText style={styles.text}>{resume}</AppText>
        <AppText
          style={{
            textAlign: "right",
            marginTop: 20,
            borderColor: colors.primary,
            borderWidth: 1,
            borderStyle: "solid",
            padding: 10,
          }}
        >
          🌟🌟🌟🌟🌟🌟
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    shadowColor: colors.normal,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    elevation: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  content: {
    padding: 10,
  },
  img: {
    width: "100%",
  },
  imgContainer: {
    overflow: "hidden",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  text: {
    marginTop: 10,
  },
});

export default MovieCard;
