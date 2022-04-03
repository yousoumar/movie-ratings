import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import Rate from "../components/Rate";
import { colors, sizes, weights } from "../config/variables";
import { TmdbMoviesStackNavigatorProps } from "../navigators/TmdbMoviesNavigator";
import Loader from "../components/Loader";

type Props = NativeStackScreenProps<
  TmdbMoviesStackNavigatorProps,
  "TmdbMovieDetails"
>;

const TmdbMoviesDetailsScreen: FC<Props> = () => {
  const route = useRoute<Props["route"]>();
  const [movie, setMovie] = useState<any>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=1971c7f291df72d336297ed73c7129e3`
        );
        if (!res.ok)
          throw new Error(
            "The movie you are looking for does not exist. Please try another one :)"
          );
        const data = await res.json();
        setMovie(data);
      } catch (e) {
        console.log(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [route.params.id]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <AppText
        style={{ marginTop: 100, textAlign: "center", marginHorizontal: 16 }}
      >
        {error}
      </AppText>
    );
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{
            uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
          }}
        />
        <View style={styles.content}>
          <AppText style={styles.title}>{movie.title}</AppText>
          <Rate rate={movie.vote_average} />
          <AppText>{movie.overview}</AppText>
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

  title: {
    fontSize: sizes.secondary,
    fontWeight: weights.primary,
  },
});

export default TmdbMoviesDetailsScreen;
