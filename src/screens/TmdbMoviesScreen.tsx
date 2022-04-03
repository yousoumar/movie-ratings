import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, useCallback, useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import Loader from "../components/Loader";
import Screen from "../components/Screen";
import { colors, sizes, weights } from "../config/variables";
import { MoviesStackNavigatorProps } from "../navigators/MoviesNavigator";
import TmdbMovieCard from "../components/TmdbMovieCard";
import { Ionicons } from "@expo/vector-icons";
import StatusInfo from "../components/StatusInfo";

type Props = NativeStackScreenProps<MoviesStackNavigatorProps, "Movies">;

const TmdbMoviesScreen: FC<Props> = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=1971c7f291df72d336297ed73c7129e3"
      );
      if (!res.ok)
        throw new Error(
          "Something went wrong with the TMDB api, please verify you are using the right api_key and try again."
        );

      const data = await res.json();
      setData(data.results);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = async () => {
    if (!searchText) return fetchData();
    setLoading(true);
    setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=1971c7f291df72d336297ed73c7129e3&query=${searchText}`
        );

        if (!res.ok)
          throw new Error(
            "The movie you are looking for does not exist. Please try another one :)"
          );
        const data = await res.json();
        setData(data.results);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Screen>
      <View style={styles.topBar}>
        <TextInput
          value={searchText}
          style={styles.input}
          placeholder="Search movies by title"
          placeholderTextColor={colors.white}
          onChangeText={(text) => setSearchText(text)}
        />
        <Pressable onPress={() => handleSearch()}>
          <Ionicons name="search-circle" color={colors.primary} size={45} />
        </Pressable>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TmdbMovieCard
            title={item.title}
            resume={item.overview}
            imageUri={"https://image.tmdb.org/t/p/w500" + item.poster_path}
            rate={item.vote_average}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <StatusInfo isContainData={true} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  input: {
    backgroundColor: colors.card,
    padding: 10,
    borderRadius: 10,
    fontSize: sizes.small,
    fontWeight: weights.secondary,
    color: colors.white,
    flex: 1,
    marginRight: 16,
  },
  img: {
    width: "100%",
    borderRadius: 10,
    height: 200,
  },
  topBar: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TmdbMoviesScreen;
