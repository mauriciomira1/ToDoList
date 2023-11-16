import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";

const WithoutTasks = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "#808080",
          borderBottomWidth: 0.2,
          minWidth: "100%",
        }}
      ></View>

      <View style={styles.informationArea}>
        <Image source={require("../../../assets/Clipboard.png")} />
        <Text style={styles.informationAreaTitle}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.informationAreaSubtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
};

export default WithoutTasks;
