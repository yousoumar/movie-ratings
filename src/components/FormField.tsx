import { FormikValues, useFormikContext } from "formik";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { colors, sizes } from "../config/variables";
import AppImagePicker from "./AppImagePicker";
import AppText from "./AppText";

interface Props extends TextInputProps {
  name: string;
  label: string;
}
const FormField: React.FC<Props> = ({ name, label, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext<FormikValues>();

  return (
    <View style={styles.container}>
      {name === "image" ? (
        <AppImagePicker />
      ) : (
        <TextInput
          placeholderTextColor={colors.white}
          placeholder={label}
          style={styles.input}
          onChangeText={(text) => {
            setFieldTouched(name);
            setFieldValue(name, text);
          }}
          value={values[name]}
          {...otherProps}
        />
      )}

      {touched[name] && (
        <AppText style={{ color: colors.error, fontSize: sizes.small }}>
          {errors[name]}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: colors.black,
    padding: 16,
    borderRadius: 10,
  },

  input: {
    marginVertical: 10,
    backgroundColor: colors.black,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    color: colors.white,
    fontSize: sizes.normal,
  },
});

export default FormField;
