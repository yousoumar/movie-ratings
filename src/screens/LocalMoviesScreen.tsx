import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import Screen from "../components/Screen";
import StatusInfo from "../components/StatusInfo";
import { colors, sizes, weights } from "../config/variables";
import { useDataContext } from "../contexts/LocalDataContext";
import { LocalMoviesStackNavigatorProps } from "../navigators/LocalMoviesNavigator";

type Props = NativeStackScreenProps<LocalMoviesStackNavigatorProps, "Movies">;

const LocalMoviesScreen: FC<Props> = ({ navigation }) => {
  const { data, filterMovies, flatListRef, isContainData, isLoading } =
    useDataContext()!;

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Screen>
      <View style={styles.topBar}>
        <TextInput
          editable={isContainData}
          style={styles.input}
          placeholder={
            isContainData
              ? "Filter movies by title"
              : "Add movies to filter them"
          }
          placeholderTextColor={colors.white}
          onChangeText={(text) => {
            filterMovies(text);
          }}
        />
        <Pressable onPress={() => navigation.navigate("CreateMovie")}>
          <MaterialCommunityIcons
            name="plus-circle"
            color={colors.primary}
            size={40}
          />
        </Pressable>
      </View>

      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={(item) => <MovieCard {...item.item} />}
        keyExtractor={(item) => item.title}
        ListEmptyComponent={() => <StatusInfo isContainData={isContainData} />}
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
  topBar: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default LocalMoviesScreen;
