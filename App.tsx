import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";
import Home from "./src/screens/Home";
import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
  Inter_300Light,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_400Regular,
    Inter_300Light,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="inverted" translucent backgroundColor="#0F0F0F" />
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
