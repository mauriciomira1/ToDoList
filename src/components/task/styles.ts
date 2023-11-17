import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#333333",
    borderRadius: 6,
    borderColor: "#808080",
    borderWidth: 0.3,
    minWidth: "100%",
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginTop: 8,
  },
  description: {
    maxWidth: "100%",
    color: "#FFF",
    lineHeight: 20,
  },
  descriptionDone: {
    color: "#808080",
    lineHeight: 20,
    textDecorationLine: "line-through",
    fontStyle: "italic",
  },
});
