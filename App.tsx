import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import AppText from "./components/AppText";

import MoviesList from "./components/MoviesList";
import Screen from "./components/Screen";
import data from "./data/moviesList";

export default function App() {
  return (
    <Screen>
      <AppText type="primary" style={{ textAlign: "center" }}>
        Movie Ratings
      </AppText>
      <MoviesList data={data} />
    </Screen>
  );
}
