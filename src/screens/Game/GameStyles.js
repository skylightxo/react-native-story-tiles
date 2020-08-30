import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backNav: {
    width: 22,
    height: 25,
    marginTop: 54,
    marginLeft: 25,
  },
  gameContainer: {
    marginTop: 62,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "column",
    alignItems: "center",
  },
  gameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  gameCell: {
    width: 100,
    height: 80,
    backgroundColor: "#fff",
    textAlign: "center",
    margin: 0,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    padding: 15,
    fontSize: 32,
  },
  continueBtn: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fff",
    marginHorizontal: 30,
    marginTop: 150,
    height: 56,
    borderRadius: 9,
  },
  continueBtnText: {
    paddingTop: 10,
    fontSize: 24,
    fontFamily: "JosefinSans_400Regular",
    color: "#000",
    textAlign: "center",
  },
});
