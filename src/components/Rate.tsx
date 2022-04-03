import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { colors, sizes, weights } from "../config/variables";
import AppText from "./AppText";

interface Props {
  rate: number;
}

const Rate: FC<Props> = ({ rate }) => {
  return (
    <AppText style={styles.rate}>
      {rate} <AppText style={styles.small}>/ 10</AppText>
    </AppText>
  );
};

const styles = StyleSheet.create({
  rate: {
    fontWeight: weights.secondary,
    color: colors.primary,
    marginVertical: 10,
  },
  small: {
    fontSize: sizes.small,
  },
});

export default Rate;
