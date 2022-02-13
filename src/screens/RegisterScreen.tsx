import { Formik } from "formik";
import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import FormField from "../components/FormField";
import { useAuthContext } from "../contexts/AuthContext";

interface Props {}

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  passwordConfirm: Yup.string().test(
    "passwords-match",
    "Passwords must match",
    function (value) {
      return this.parent.password === value;
    }
  ),
});

const RegisterScreen: FC<Props> = () => {
  const { register } = useAuthContext()!;

  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: "",
          name: "",
        }}
        onSubmit={async (values) => {
          setIsRegistering(true);
          await register(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormField
              name="name"
              autoCapitalize="none"
              autoCorrect={false}
              label="Name"
            ></FormField>
            <FormField
              name="email"
              autoCapitalize="none"
              label="Email"
              keyboardType="email-address"
            ></FormField>
            <FormField
              name="password"
              label="Password"
              secureTextEntry={true}
            ></FormField>
            <FormField
              name="passwordConfirm"
              label="Password confirmation"
              secureTextEntry={true}
            ></FormField>

            <AppButton onPress={() => handleSubmit()} disabled={isRegistering}>
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
