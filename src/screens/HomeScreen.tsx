import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { colors, weights } from "../config/variables";
import { useAuthContext } from "../contexts/AuthContext";
import { AuthNavigatorProps } from "../navigators/AuthNavigator";

type Props = NativeStackScreenProps<AuthNavigatorProps, "Home">;

const HomeScreen: FC<Props> = ({ navigation }) => {
  const { user } = useAuthContext()!;
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={require("../assets/splash.png")}
    >
      {user && (
        <View style={styles.textBox}>
          <AppText>hello </AppText>
          <AppText
            style={{
              color: colors.primary,
              fontWeight: weights.primary,
              textTransform: "uppercase",
            }}
          >
            {user.name.split(" ")[0]}
          </AppText>
        </View>
      )}
      <View style={styles.buttons}>
        {!user && (
          <AppButton onPress={() => navigation.navigate("Register")}>
            Register
          </AppButton>
        )}
        {user && (
          <AppButton
            marginTop={30}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AppButton>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    borderWidth: 1,
  },
  buttons: {
    marginBottom: 30,
    padding: 16,
    marginTop: "auto",
  },
  textBox: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "center",
    fontWeight: weights.primary,
    color: colors.primary,
  },
});

export default HomeScreen;
