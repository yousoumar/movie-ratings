import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import { colors } from "../config/variables";
import { useAuthContext } from "../contexts/AuthContext";

interface Props {}

const AccountScreen: FC<Props> = (props) => {
  const { user, logout, setUser } = useAuthContext()!;
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.top}>
          <MaterialCommunityIcons
            name="account-circle"
            color={colors.white}
            size={70}
          />
          <AppText numberOfLines={1} style={styles.text}>
            {user?.email}
          </AppText>
        </View>
        <AppButton outline onPress={() => logout(setUser)}>
          Logout
        </AppButton>
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
