import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  backNav: {
    width: 22,
    height: 25,
    marginTop: 54,
    marginLeft: 25,
  },
  topSection: {
    backgroundColor: "#6850FF",
    height: 281,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
  },
  title: {
    fontSize: 48,
    fontFamily: "JosefinSans_700Bold",
    marginLeft: 20,
    marginTop: 35,
    color: "#000",
  },
  description: {
    fontSize: 18,
    fontFamily: "JosefinSans_400Regular",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    color: "#000",
  },
  continueBtnContainer: {
    width: 600,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  continueBtn: {
    width: "50%",
    borderRadius: 9,
    height: 56,
    marginTop: 170,
    marginRight: "30%",
  },
  continueBtnText: {
    paddingTop: 10,
    fontSize: 24,
    fontFamily: "JosefinSans_400Regular",
    color: "#fff",
    textAlign: "center",
  },
});
