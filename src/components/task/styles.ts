import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#333333",
    borderRadius: 6,
    borderColor: "#808080",
    borderWidth: 0.3,
    width: "100%",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },
  description: {
    flex: 1,
    color: "#FFF",
    lineHeight: 20,
  },
  descriptionDone: {
    flex: 1,
    color: "#808080",
    lineHeight: 20,
    textDecorationLine: "line-through",
  },
});
