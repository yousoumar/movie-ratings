import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../config/variables";

interface AppNavigatorContainerPropos {}
const navigatorTheme = {
  dark: false,
  colors: {
    primary: colors.primary,
    background: colors.background,
    card: colors.background,
    text: colors.white,
    border: colors.primary,
    notification: colors.primary,
  },
};
const AppNavigatorContainer: FC<AppNavigatorContainerPropos> = ({
  children,
}) => {
  return (
    <NavigationContainer theme={navigatorTheme}>{children}</NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigatorContainer;
