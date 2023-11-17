import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import CheckboxTask from "../checkbox/CheckboxTask";
import ButtonDelete from "../buttons/ButtonDelete";

interface TaskProps {
  description: string;
  id: string;
  handleDelete: (id: string) => void;
  handleToogle: (id: string) => void;
}

const Task = ({ description, id, handleDelete, handleToogle }: TaskProps) => {
  const [taskDone, setTaskDone] = useState(false);

  const changeTaskState = (state: boolean) => {
    setTaskDone(state);
    handleToogle(id);
  };

  return (
    <View style={styles.container}>
      <CheckboxTask functionToSetTask={changeTaskState} />
      <Text style={taskDone ? styles.descriptionDone : styles.description}>
        {description}
      </Text>
      <ButtonDelete handleDelete={() => handleDelete(id)} />
    </View>
  );
};

export default Task;
