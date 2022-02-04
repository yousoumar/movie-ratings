import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import AppText from "./components/AppText";
import MovieCard from "./components/MovieCard";
import MoviesList from "./components/MoviesList";
import Screen from "./components/Screen";

export default function App() {
  return (
    <Screen>
      <AppText type="primary" style={{ textAlign: "center" }}>
        Movie Ratings
      </AppText>
      <MoviesList />
    </Screen>
  );
}
