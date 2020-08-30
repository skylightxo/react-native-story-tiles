import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "./MainStyles";

export const Main = ({ navigation }) => {
  return (
    <View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png",
          }}
        />
      </View>
      <View style={styles.mainOptionsContainer}>
        <View style={styles.mainOptionsFirstRow}>
          <TouchableOpacity
            style={styles.playOption}
            onPress={() => navigation.navigate("Mode")}
          >
            <Image
              source={require("../../images/play_btn.png")}
              style={styles.playImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainOptionsSecondRow}>
          <TouchableOpacity style={styles.otherOption}>
            <Image />
          </TouchableOpacity>
          <TouchableOpacity style={styles.otherOption}>
            <Image />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
