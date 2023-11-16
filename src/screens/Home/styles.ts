import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingTop: 28,
    alignItems: "center",
    width: "100%",
  },
  logoArea: {
    paddingTop: 30,
    paddingBottom: 70,
    backgroundColor: "#0F0F0F",
    width: "100%",
    alignItems: "center",
  },
  viewTasks: {
    paddingHorizontal: 20,
    marginTop: -32,
    alignItems: "center",
  },
  badgeView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "yellow",
    marginTop: 25,
  },
  badge: {
    flexDirection: "row",
    gap: 5,
    backgroundColor: "green",
  },
  badgeCounter: {
    backgroundColor: "#333333",
    height: 20,
    paddingHorizontal: 9,
    borderRadius: 10,
    fontFamily: "Inter_700Bold",
    fontSize: 13,
    color: "#FFF",
  },
  badgeTitleCreated: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    color: "#4EA8DE",
  },
  badgeTitleDone: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    color: "#8284FA",
  },
});
