import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import FormField from "../components/FormField";
import Screen from "../components/Screen";
import { useDataContext } from "../context/DataContextProvider";
import { MoviesStackNavigatorProp } from "../navigators/MoviesStackNavigator";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label("Title"),
  resume: Yup.string().required().min(30).label("Resume"),
  rate: Yup.number().required().min(1).label("Rate"),
});

type Props = NativeStackScreenProps<MoviesStackNavigatorProp, "CreateMovie">;

const CreateMovieScreen: FC<Props> = ({ navigation }) => {
  const { addNewMovie } = useDataContext();
  return (
    <Screen>
      <ScrollView>
        <Formik
          initialValues={{ title: "", resume: "", rate: 0 }}
          onSubmit={(values, { resetForm }) => {
            addNewMovie(
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
                  Reset
                </AppButton>
                <AppButton marginLeft={30} onPress={() => handleSubmit()}>
                  Add to the list
                </AppButton>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
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
});

export default CreateMovieScreen;
