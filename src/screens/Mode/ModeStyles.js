import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modeContainer: { marginTop: 30 },
  backNav: { width: 22, height: 25, marginTop: 24, marginLeft: 25 },
  title: {
    fontSize: 36,
    fontFamily: "JosefinSans_700Bold",
    marginTop: 29,
    width: 220,
    marginRight: 50,
  },
  modeSelectionContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  modeSelection: {
    marginLeft: 19,
    marginRight: 22,
    marginBottom: 25,
    marginTop: 21,
    flexDirection: "row",
  },
  firstColumn: {
    marginRight: 17,
  },
  classicModeContainer: {
    width: 126,
    height: 226,
    backgroundColor: "#6850FF",
    borderRadius: 14,
  },
  forKidsModeContainer: {
    backgroundColor: "#FF5050",
    borderRadius: 14,
    width: 136,
    height: 105,
  },
  timeBattleModeContainer: {
    backgroundColor: "#35BC42",
    marginTop: 16,
    borderRadius: 14,
    width: 136,
    height: 105,
  },
  emojiModeContainer: {
    width: 279,
    height: 137,
    backgroundColor: "#FFA450",
    borderRadius: 14,
    marginLeft: 19,
  },
  classicText: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
    paddingTop: 170,
    paddingLeft: 10,
  },
  forKidsText: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
    paddingTop: 60,
    paddingLeft: 10,
  },
  timeBattleText: {
    fontSize: 24,
    width: 80,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
    paddingTop: 40,
    paddingLeft: 10,
  },
  emojiText: {
    fontSize: 48,
    color: "#fff",
    fontFamily: "JosefinSans_400Regular",
    paddingTop: 60,
    paddingLeft: 20,
  },
});
