import React, { FC } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { colors, sizes } from "../config/variables";
import AppText from "./AppText";

interface Props extends PressableProps {
  outline?: boolean;
  marginLeft?: number;
}
const AppButton: FC<Props> = ({
  children,
  outline = false,
  marginLeft = 0,
  ...others
}) => {
  return (
    <Pressable
      {...others}
      style={[
        styles.container,

        {
          backgroundColor: outline ? "transparent" : colors.primary,
          marginLeft: marginLeft,
        },
      ]}
    >
      <AppText style={{ fontSize: sizes.small }}>{children}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default AppButton;
