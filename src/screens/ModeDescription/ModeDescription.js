import React from "react";
import BackNav from "../../images/back_nav_white.svg";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { styles } from "./ModeDescriptionStyles";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/dev";

export const ModeDescription = ({ navigation, title, description }) => {
  const [fontsLoaded, error] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  const handleOnPress = () => {
    title === "Emoji"
      ? navigation.navigate("Game")
      : alert("Please choose emoji game mode");
  };

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <BackNav style={styles.backNav} />
        </TouchableWithoutFeedback>
      </View>

      <View style={{ width: "100%" }}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity
          style={styles.continueBtnContainer}
          onPress={() => handleOnPress()}
        >
          <LinearGradient
            colors={["#6850FF", "#FF6FC5"]}
            style={styles.continueBtn}
          >
            <Text style={styles.continueBtnText}>Continue &gt;</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
