import { Formik } from "formik";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import FormField from "../components/FormField";
import { useAuthContext } from "../contexts/AuthContext";

interface Props {}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen: FC<Props> = () => {
  const { registerAndLogin, setUser } = useAuthContext()!;

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await registerAndLogin(values, setUser);
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormField
              name="email"
              autoCapitalize="none"
              label="Email"
            ></FormField>
            <FormField
              name="password"
              label="Password"
              secureTextEntry={true}
            ></FormField>

            <AppButton outline onPress={() => handleSubmit()}>
              Register
            </AppButton>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
});

export default RegisterScreen;
