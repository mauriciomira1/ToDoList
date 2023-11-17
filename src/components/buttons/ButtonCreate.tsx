import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

interface ButtonCreateProps {
  addTask: () => void;
}

const ButtonCreate = ({ addTask }: ButtonCreateProps) => {
  return (
    <AntDesign
      name="pluscircleo"
      size={24}
      color="black"
      style={styles.buttonCreate}
      onPress={addTask}
    />
  );
};

export default ButtonCreate;
