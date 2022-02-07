import { Formik } from "formik";
import React, { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import * as Yup from "yup";
import AppText from "../components/AppText";
import { colors } from "../config/variables";
import Screen from "./Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label("Title"),
  resume: Yup.string().required().min(4).label("Resume"),
  rate: Yup.number().required().min(0).label("Rate"),
});

interface CreateScreenPropos {}

const CreateMovieScreen: FC<CreateScreenPropos> = (props) => {
  return (
    <Screen>
      <Formik
        initialValues={{ title: "", resume: "", rate: "" }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        <View style={styles.container}>
          <TextInput
            placeholder="Title"
            style={styles.input}
            placeholderTextColor={colors.white}
          />
        </View>
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    marginVertical: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    color: colors.primary,
  },
});

export default CreateMovieScreen;
