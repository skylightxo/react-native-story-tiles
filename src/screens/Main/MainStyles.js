import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#8C8C8C",
    borderStyle: "dashed",
    borderRadius: 1,
    marginVertical: 40,
    marginLeft: "auto",
    marginRight: "auto",
    width: 232,
    height: 180,
  },
  logo: {
    width: 150,
    height: 150,
  },
  mainOptionsContainer: {
    flexDirection: "column",
    marginTop: 200,
  },
  mainOptionsFirstRow: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  mainOptionsSecondRow: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -20,
  },
  playOption: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    width: 107,
    height: 107,
    borderRadius: 107 / 2,
    borderWidth: 1,
  },
  playImage: {
    width: 50,
    height: 68,
  },
  otherOption: {
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    borderWidth: 1,
    marginHorizontal: 50,
  },
});
