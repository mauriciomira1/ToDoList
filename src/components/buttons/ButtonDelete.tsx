import React from "react";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

interface ButtonDeleteProps {
  handleDelete: () => void;
}

const ButtonDelete = ({ handleDelete }: ButtonDeleteProps) => {
  return (
    <Feather
      name="trash-2"
      size={18}
      color="black"
      style={styles.buttonDelete}
      onPress={handleDelete}
    />
  );
};

export default ButtonDelete;
