import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";
import ButtonCreate from "../buttons/ButtonCreate";

interface NewTaskProps {
  onAddTask: (taskDescription: string) => void;
}

const NewTask = ({ onAddTask }: NewTaskProps) => {
  const [taskDescription, setTaskDescription] = useState("");

  const addTask = () => {
    onAddTask(taskDescription);
    setTaskDescription("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        style={styles.newTaskName}
        onChangeText={setTaskDescription}
        value={taskDescription}
        placeholderTextColor="#808080"
      />
      <ButtonCreate addTask={addTask} />
    </View>
  );
};

export default NewTask;
