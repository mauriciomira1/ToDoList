import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Logotipo = () => {
  return (
    <View style={styles.logo}>
      <FontAwesome
        name="tasks"
        size={24}
        color="black"
        style={styles.logoIcon}
      />
      <Text style={styles.logoText01}>to</Text>
      <Text style={styles.logoText02}>do</Text>
    </View>
  );
};

export default Logotipo;
