import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
import React, { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import FormField from "../components/FormField";
import Screen from "../components/Screen";
import { useDataContext } from "../contexts/DataContext";
import { MoviesStackNavigatorProps } from "../navigators/MoviesNavigator";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(2).label("Title"),
  resume: Yup.string().required().min(30).label("Resume"),
  rate: Yup.number().required().min(1).label("Rate"),
  image: Yup.string().required().min(30).label("Image"),
});

type Props = NativeStackScreenProps<MoviesStackNavigatorProps, "CreateMovie">;

const CreateMovieScreen: FC<Props> = ({ navigation }) => {
  const { addNewMovie, flatListRef } = useDataContext()!;

  return (
    <Screen>
      <ScrollView>
        <Formik
          initialValues={{
            title: "",
            resume: "",
            image: "",
            rate: "" as unknown as number,
          }}
          onSubmit={(values, { resetForm, setErrors }) => {
            const result = addNewMovie(
              values.title,
              values.rate,
              values.resume,
              values.image
            );
            if (!result) {
              setErrors({ title: "This title exits alrady" });
              return;
            }
            resetForm();
            flatListRef.current?.scrollToIndex({ animated: true, index: 0 });
            navigation.navigate("Movies");
          }}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, resetForm }) => (
            <View style={styles.container}>
              <FormField name="image" label="Image"></FormField>
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
                  Submit
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
    marginTop: 10,
  },
  container: {
    padding: 10,
  },
});

export default CreateMovieScreen;
