import { FC } from "react";
import { Text, TextProps } from "react-native";
import { colors, sizes, weights } from "../config/variables";

interface Props extends TextProps {
  type?: "primary" | "normal";
}

const AppText: FC<Props> = ({
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
