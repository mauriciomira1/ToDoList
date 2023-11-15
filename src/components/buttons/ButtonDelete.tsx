import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

const ButtonDelete = () => {
  return (
    <Feather
      name="trash-2"
      size={24}
      color="black"
      style={styles.buttonDelete}
    />
  );
};

export default ButtonDelete;
