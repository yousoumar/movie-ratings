import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import AppText from "./AppText";
import { colors, sizes } from "../config/variables";

interface Props extends TextInputProps {
  name: string;
  label: string;
}
const FormField: React.FC<Props> = ({ name, label, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext<any>();

  return (
    <View style={styles.container}>
      <AppText style={styles.label}>{label}</AppText>
      <TextInput
        style={styles.input}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
      {touched[name] && (
        <AppText style={{ color: colors.error }}>{errors[name]}</AppText>
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
  label: {
    fontSize: sizes.secondary,
  },
  input: {
    marginVertical: 10,
    borderColor: colors.black,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    color: colors.white,
    fontSize: sizes.normal,
  },
});

export default FormField;
