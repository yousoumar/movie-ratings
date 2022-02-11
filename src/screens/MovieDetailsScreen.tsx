import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import Rate from "../components/Rate";
import { colors } from "../config/variables";
import { useDataContext } from "../context/DataContextProvider";
import { MoviesStackNavigatorProps } from "../navigators/MoviesNavigator";

type Props = NativeStackScreenProps<MoviesStackNavigatorProps, "MovieDetails">;

const MoviesDetailsScreen: FC<Props> = () => {
  const route = useRoute<Props["route"]>();
  const { fetchMovieByTitle } = useDataContext();
  const { rate, resume, imageUri } = fetchMovieByTitle(route.params.title);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{ uri: imageUri }}
        />
        <View style={styles.content}>
          <Rate rate={rate} />
          <AppText>{resume}</AppText>
        </View>
      </View>
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
    backgroundColor: colors.card,
  },
  content: {
    margin: 16,
  },
  img: {
    width: "100%",
    height: 500,
    borderRadius: 10,
  },
});

export default MoviesDetailsScreen;
