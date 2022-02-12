import React, { FC } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { colors, sizes, weights } from "../config/variables";
import AppText from "./AppText";

interface Props extends PressableProps {
  outline?: boolean;
  marginLeft?: number;
  marginTop?: number;
}
const AppButton: FC<Props> = ({
  children,
  outline = false,
  marginTop = 0,
  marginLeft = 0,
  ...others
}) => {
  return (
    <Pressable
      {...others}
      style={[
        styles.container,

        {
          borderColor: outline ? colors.card : colors.primary,
          marginLeft,
          marginTop,
        },
      ]}
    >
      <AppText style={styles.text}>{children}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: sizes.small,
    textAlign: "center",
    fontWeight: weights.secondary,
  },
});

export default AppButton;
