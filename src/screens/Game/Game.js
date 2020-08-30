import React from "react";
import emojis from "emoji.json/emoji-compact.json";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { styles } from "./GameStyles";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/dev";

export const Game = ({ navigation, title, description }) => {
  const getRandomEmoji = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min)) + min;
    emojisCopy.splice(result, 1);
    return emojisCopy[result];
  };

  const emojisCopy = [...emojis];

  const leftTopCell = { ...styles.gameCell, borderTopLeftRadius: 15 };
  const rightTopCell = { ...styles.gameCell, borderTopRightRadius: 15 };
  const leftBottomCell = { ...styles.gameCell, borderBottomLeftRadius: 15 };
  const rightBottomCell = { ...styles.gameCell, borderBottomRightRadius: 15 };

  const [fontsLoaded, error] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <LinearGradient
        colors={["#6850FF", "#FF6FC5"]}
        style={{ width: "100%", height: "100%" }}
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("ModeDescription")}
        >
          <Image
            style={styles.backNav}
            source={require("../../images/back_nav_white.png")}
          />
        </TouchableWithoutFeedback>
        <View style={styles.gameContainer}>
          <View style={styles.gameRow}>
            <Text style={leftTopCell}>
              {getRandomEmoji(0, emojisCopy.length + 1)}
            </Text>
            <Text style={styles.gameCell}>
              {getRandomEmoji(0, emojisCopy.length + 1)}
            </Text>
            <Text style={rightTopCell}>
              {getRandomEmoji(0, emojisCopy.length + 1)}
            </Text>
          </View>
          <View style={styles.gameRow}>
            <Text style={styles.gameCell}>
              {getRandomEmoji(0, emojisCopy.length + 1)}
            </Text>
            <Text style={styles.gameCell}>
              {getRandomEmoji(0, emojisCopy.length + 1)}
            </Text>
            <Text style={styles.gameCell}>
              {getRandomEmoji(0, emojisCopy.length + 1)}
            </Text>
          </View>
          <View style={styles.gameRow}>
            <Text style={leftBottomCell}>
              {getRandomEmoji(0, emojisCopy.length + 1)}
            </Text>
            <Text style={styles.gameCell}>
              {getRandomEmoji(0, emojisCopy.length + 1)}
            </Text>
            <Text style={rightBottomCell}>
              {getRandomEmoji(0, emojisCopy.length + 1)}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => navigation.push("Game")}
          >
            <Text style={styles.continueBtnText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};
