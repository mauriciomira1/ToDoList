import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import CheckboxTask from "../checkbox/CheckboxTask";
import ButtonDelete from "../buttons/ButtonDelete";

const Task = () => {
  return (
    <View style={styles.container}>
      <CheckboxTask />
      <Text style={styles.description}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <ButtonDelete />
    </View>
  );
};

export default Task;
