import { Formik } from "formik";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import FormField from "../components/FormField";
import { useAuthContext } from "../contexts/AuthContext";

interface Props {}

const validationSchema = Yup.object().shape({
  password: Yup.string().required().label("Password"),
});

const LoginScreen: FC<Props> = (props) => {
  const { login, setIsLogged } = useAuthContext()!;
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          password: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          const result = await login(values.password);

          if (!result) {
            setErrors({ password: "Password incorect" });
          } else {
            setIsLogged(true);
          }
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, resetForm }) => (
          <>
            <FormField
              name="password"
              label="Password"
              secureTextEntry={true}
            ></FormField>

            <AppButton outline onPress={() => handleSubmit()}>
              Login
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

export default LoginScreen;
