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
      style={styles.black}
      resizeMode="cover"
      source={require("../assets/splash.png")}
    >
      {user && <AppText style={styles.text}>Hello {user.name}</AppText>}
      <View style={styles.buttons}>
        {!user && (
          <AppButton onPress={() => navigation.navigate("Register")}>
            Register
          </AppButton>
        )}
        {user && (
          <AppButton
            marginTop={30}
            outline
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
  black: {
    width: "100%",
    height: "100%",
  },
  buttons: {
    marginBottom: 30,
    padding: 16,
    marginTop: "auto",
  },
  text: {
    marginTop: "auto",
    textAlign: "center",
    fontWeight: weights.primary,
    color: colors.primary,
  },
});

export default HomeScreen;
