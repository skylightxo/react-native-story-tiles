import React from "react";
import { SafeAreaView } from "react-native";
import { Game } from "./Game";
import { styles } from "./GameStyles";

const GameContainer = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <Game navigation={navigation} />
    </SafeAreaView>
  );
};

export default GameContainer;
