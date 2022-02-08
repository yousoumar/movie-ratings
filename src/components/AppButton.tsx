import React, { FC } from "react";
import { StyleSheet, Pressable, PressableProps } from "react-native";
import { colors } from "../config/variables";
import AppText from "./AppText";

interface Props extends PressableProps {
  outline?: boolean;
}
const AppButton: FC<Props> = ({ children, outline = false, ...others }) => {
  return (
    <Pressable
      {...others}
      style={[
        styles.container,

        { backgroundColor: outline ? "transparent" : colors.primary },
      ]}
    >
      <AppText>{children}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginLeft: 30,
    marginTop: 30,
  },
});

export default AppButton;
