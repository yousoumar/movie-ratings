import { FC } from "react";
import { Platform, StyleSheet, Text, TextProps } from "react-native";
import { colors, sizes, weights } from "../config/variables";

interface AppTextPropos extends TextProps {
  type?: "primary" | "normal";
}

const AppText: FC<AppTextPropos> = ({
  children,
  style,
  type = "normal",
  ...others
}) => {
  return (
    <Text
      style={[
        {
          color: colors.white,
          fontSize: sizes[type],
          fontWeight: weights[type],
        },
        style,
      ]}
      {...others}
    >
      {children}
    </Text>
  );
};

export default AppText;