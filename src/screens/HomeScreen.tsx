import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import { AutenticationNavigatorProps } from "../navigators/AuthenticationNavigator";

type Props = NativeStackScreenProps<AutenticationNavigatorProps, "Home">;

const HomeScreen: FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.black}
      resizeMode="cover"
      source={require("../assets/splash.png")}
    >
      <View style={styles.buttons}>
        <AppButton onPress={() => navigation.navigate("Register")}>
          Register
        </AppButton>
        <AppButton
          marginTop={30}
          outline
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AppButton>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  black: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  buttons: {
    marginBottom: 30,
    padding: 16,
  },
});

export default HomeScreen;
