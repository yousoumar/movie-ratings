import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { colors, weights } from "../config/variables";
import AppText from "./AppText";

interface Props {
  rate: number;
}

const Rate: FC<Props> = ({ rate }) => {
  return (
    <AppText style={styles.rate}>
      {rate}
      <MaterialCommunityIcons name="star" size={20} color={colors.primary} />
    </AppText>
  );
};

const styles = StyleSheet.create({
  rate: {
    fontWeight: weights.secondary,
    color: colors.primary,
    marginVertical: 10,
  },
});

export default Rate;
