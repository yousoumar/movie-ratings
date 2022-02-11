import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { FormikValues, useFormikContext } from "formik";
import React, { FC } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { colors } from "../config/variables";

interface Props {}

const AppImagePicker: FC<Props> = (props) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.cancelled) {
      setFieldValue("image", result.uri);
    }
  };
  return (
    <Pressable style={styles.container} onPress={() => pickImage()}>
      {!values["image"] ? (
        <MaterialCommunityIcons name="camera" size={40} color={colors.white} />
      ) : (
        <Image
          source={{ uri: values["image"] }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 70,
    height: 70,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default AppImagePicker;
