import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { styles } from "./ModeStyles";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/dev";

export const Mode = ({ navigation }) => {
  const [fontsLoaded, error] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  const description = "In development...";

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.modeContainer}>
      <View>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Image
            style={styles.backNav}
            source={require("../../images/back_nav.png")}
          />
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Text style={styles.title}>Choose your mode</Text>
      </View>

      <View style={styles.modeSelectionContainer}>
        <View style={styles.modeSelection}>
          <View style={styles.firstColumn}>
            <TouchableOpacity
              style={styles.classicModeContainer}
              onPress={() =>
                navigation.navigate("ModeDescription", {
                  title: "Classic",
                  description: description,
                })
              }
            >
              <Text style={styles.classicText}>Classic</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondColumn}>
            <TouchableOpacity
              style={styles.forKidsModeContainer}
              onPress={() =>
                navigation.navigate("ModeDescription", {
                  title: "For Kids",
                  description: description,
                })
              }
            >
              <Text style={styles.forKidsText}>For Kids</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.timeBattleModeContainer}
              onPress={() =>
                navigation.navigate("ModeDescription", {
                  title: "Time Battle",
                  description: description,
                })
              }
            >
              <Text style={styles.timeBattleText}>Time Battle</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.emojiModeContainer}
            onPress={() =>
              navigation.navigate("ModeDescription", {
                title: "Emoji",
                description: "This one should work 🤔",
              })
            }
          >
            <Text style={styles.emojiText}>E-Moji</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
