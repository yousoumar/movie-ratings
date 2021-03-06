import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { colors, sizes, weights } from "../config/variables";
import AppText from "./AppText";
import Rate from "./Rate";
import { TmdbMoviesStackNavigatorProps } from "../navigators/TmdbMoviesNavigator";

type NavigationProp = NativeStackNavigationProp<TmdbMoviesStackNavigatorProps>;

interface TmdbMovieInterface {
  title: string;
  resume: string;
  rate: number;
  imageUri: string;
  id: string;
}

const TmdbMovieCard: FC<TmdbMovieInterface> = ({
  title,
  rate,
  imageUri,
  id,
}) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <Pressable
      onPress={() => navigation?.navigate("TmdbMovieDetails", { id, title })}
    >
      <View style={styles.container}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{ uri: imageUri }}
        />

        <View style={styles.content}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <Rate rate={rate} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.card,
  },
  content: {
    padding: 10,
  },
  img: {
    width: "100%",
    borderRadius: 10,
    height: 200,
  },

  title: {
    fontSize: sizes.secondary,
    fontWeight: weights.primary,
  },
});

export default TmdbMovieCard;
