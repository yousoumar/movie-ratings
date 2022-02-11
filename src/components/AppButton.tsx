import React, { FC } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { colors, sizes } from "../config/variables";
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
          backgroundColor: outline ? "transparent" : colors.card,
          marginLeft,
          marginTop,
        },
      ]}
    >
      <AppText style={{ fontSize: sizes.small }}>{children}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.card,
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
  },
});

export default AppButton;
