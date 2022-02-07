import React, { FC } from "react";
import AppText from "../components/AppText";
import Screen from "./Screen";

interface CreateScreenPropos {}

const CreateMovieScreen: FC<CreateScreenPropos> = (props) => {
  return (
    <Screen>
      <AppText></AppText>
    </Screen>
  );
};

export default CreateMovieScreen;
