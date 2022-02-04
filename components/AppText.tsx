import { FC } from "react";
import { Platform, StyleSheet, Text, TextProps } from "react-native";
import { colors, sizes, weights } from "../config/variables";

interface AppTextPropos extends TextProps {
  type?: "primary" | "secondary" | "normal";
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
        styles.text,
        style,
        {
          color: colors[type],
          fontSize: sizes[type],
          fontWeight: weights[type],
        },
      ]}
      {...others}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});

export default AppText;
