import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik, FormikHelpers } from "formik";
import React, { FC } from "react";
import { Button, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import FormField from "../components/FormField";
import { colors, sizes } from "../config/variables";
import { useAddNewMovie } from "../hooks/api";
import { MoviesStackNavigatorProp } from "../navigators/MoviesStackNavigator";
import Screen from "./Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label("Title"),
  resume: Yup.string().required().min(4).label("Resume"),
  rate: Yup.number().required().min(1).label("Rate"),
});

type Props = NativeStackScreenProps<MoviesStackNavigatorProp, "CreateMovie">;

const CreateMovieScreen: FC<Props> = ({ navigation }) => {
  return (
    <Screen>
      <Formik
        initialValues={{ title: "", resume: "", rate: 0 }}
        onSubmit={(values, { resetForm }) => {
          useAddNewMovie(
            values.title,
            values.rate,
            values.resume,
            Math.random().toString()
          );
          resetForm();
          navigation.navigate("Movies");
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, resetForm }) => (
          <View style={styles.container}>
            <FormField name="title" label="Title"></FormField>
            <FormField
              keyboardType="numeric"
              name="rate"
              label="Rate"
            ></FormField>
            <FormField
              numberOfLines={4}
              multiline={true}
              name="resume"
              label="Resume"
            ></FormField>
            <View style={styles.buttons}>
              <AppButton
                style={{ marginRight: 10 }}
                outline={true}
                onPress={() => resetForm()}
              >
                Cancel
              </AppButton>
              <AppButton onPress={() => handleSubmit()}>
                Add to the list
              </AppButton>
            </View>
          </View>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  container: {
    padding: 10,
  },
  label: {
    fontSize: sizes.secondary,
  },
  input: {
    marginVertical: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    color: colors.primary,
    fontSize: sizes.normal,
  },
});

export default CreateMovieScreen;
