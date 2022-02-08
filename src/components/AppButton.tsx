import React, { FC } from "react";
import { StyleSheet, Pressable, PressableProps } from "react-native";
import { colors } from "../config/variables";
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
      <AppText>{children}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    flex: 1,
  },
});

export default AppButton;
