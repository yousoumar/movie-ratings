import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { weights } from "../config/variables";
import AppText from "./AppText";

interface Props {
  isContainData: boolean;
}

const StatusInfo: FC<Props> = ({ isContainData }) => {
  if (!isContainData) {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.img}
          source={require("../assets/logo.png")}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>There no match for you search.</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 100,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: weights.secondary,
  },
  img: {
    width: 200,
    height: 150,
  },
});

export default StatusInfo;
