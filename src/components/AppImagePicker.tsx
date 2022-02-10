import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { FormikValues, useFormikContext } from "formik";
import React, { FC, useEffect, useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { colors } from "../config/variables";

interface Props {}

const AppImagePicker: FC<Props> = (props) => {
  const [image, setImage] = useState("");
  const { setFieldValue } = useFormikContext<FormikValues>();

  useEffect(() => {
    return setImage("");
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.cancelled) {
      setFieldValue("image", result.uri);
      setImage(result.uri);
    }
  };
  return (
    <Pressable style={styles.container} onPress={() => pickImage()}>
      {!image ? (
        <MaterialCommunityIcons name="camera" size={40} color={colors.white} />
      ) : (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
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
