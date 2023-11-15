import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

const ButtonCreate = () => {
  return (
    <AntDesign
      name="pluscircleo"
      size={24}
      color="black"
      style={styles.buttonCreate}
    />
  );
};

export default ButtonCreate;
