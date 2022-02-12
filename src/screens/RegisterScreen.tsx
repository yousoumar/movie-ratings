import { Formik } from "formik";
import React, { FC } from "react";
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
});

const RegisterScreen: FC<Props> = () => {
  const { register } = useAuthContext()!;

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
        }}
        onSubmit={async (values) => {
          await register(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormField
              name="name"
              label="Name"
              autoCapitalize="words"
            ></FormField>
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
