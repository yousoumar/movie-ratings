import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Alert, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import { colors } from "../config/variables";
import { useAuthContext } from "../contexts/AuthContext";
import { useDataContext } from "../contexts/DataContext";

interface Props {}

const AccountScreen: FC<Props> = () => {
  const { user, logout, deleteAccount } = useAuthContext()!;
  const { removeData } = useDataContext()!;
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="account-circle"
            color={colors.white}
            size={30}
          />
          <AppText numberOfLines={1} style={styles.text}>
            {user?.name.toLowerCase()}
          </AppText>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="email" color={colors.white} size={30} />
          <AppText numberOfLines={1} style={styles.text}>
            {user?.email.toLowerCase()}
          </AppText>
        </View>
        <AppButton
          outline
          danger
          onPress={() => {
            Alert.alert(
              "You wanna delete your account ?",
              "This acction is irreversible.",
              [
                {
                  text: "Yes",
                  onPress: () => {
                    deleteAccount();
                    removeData();
                  },
                },
                { text: "No", style: "cancel" },
              ]
            );
          }}
        >
          Delete
        </AppButton>
        <AppButton outline marginTop={30} onPress={() => logout()}>
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

  row: {
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
