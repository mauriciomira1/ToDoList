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
    paddingTop: 20,
    paddingBottom: 60,
    backgroundColor: "#0F0E0E",
    width: "100%",
    alignItems: "center",
  },
  viewTasks: {
    paddingHorizontal: 20,
    marginTop: -32,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  badgeView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 12,
  },
  badge: {
    flexDirection: "row",
    gap: 5,
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
