import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { colors, weights } from "../config/variables";
import AppText from "./AppText";

interface Props {
  rate: number;
}

const Rate: FC<Props> = ({ rate }) => {
  return <AppText style={styles.rate}>{rate} ⭐️</AppText>;
};

const styles = StyleSheet.create({
  rate: {
    position: "absolute",
    height: 40,
    backgroundColor: colors.primary,
    zIndex: 2,
    textAlign: "center",
    padding: 5,
    fontWeight: weights.secondary,
  },
});

export default Rate;
