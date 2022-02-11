import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import { colors } from "../config/variables";

interface Props {}

const AccountScreen: FC<Props> = (props) => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.top}>
          <MaterialCommunityIcons
            name="account-circle"
            color={colors.white}
            size={70}
          />
          <AppText style={styles.text}>Antoine Huon</AppText>
        </View>
        <AppButton>Logout</AppButton>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  top: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },

  text: {
    marginLeft: 10,
  },
});

export default AccountScreen;
