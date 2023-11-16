import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";
import ButtonCreate from "../buttons/ButtonCreate";

const NewTask = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        style={styles.newTaskName}
        placeholderTextColor="#808080"
      />
      <ButtonCreate />
    </View>
  );
};

export default NewTask;
