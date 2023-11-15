import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Checkbox from "./src/components/checkbox/CheckboxTask";
import React from "react";
import ButtonDelete from "./src/components/buttons/ButtonDelete";
import ButtonCreate from "./src/components/buttons/ButtonCreate";

export default function App() {
  return (
    <View style={styles.container}>
      <Checkbox />
      <ButtonDelete />
      <ButtonCreate />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
