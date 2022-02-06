import { FC } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { colors } from "../config/variables";

interface ScreenPropos {}

const Screen: FC<ScreenPropos> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.background,
  },
});

export default Screen;
