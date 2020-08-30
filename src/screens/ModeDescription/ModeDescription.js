import React from "react";
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

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <View style={styles.topSection}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Image
            style={styles.backNav}
            source={require("../../images/back_nav_white.png")}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={{ width: 700 }}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.continueBtn}>
            <LinearGradient
              colors={["#6850FF", "#FF6FC5"]}
              style={{ borderRadius: 9, height: 56 }}
            >
              <Text style={styles.continueBtnText}>Continue &gt;</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
