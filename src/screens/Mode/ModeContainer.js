import React from "react";
import { SafeAreaView } from "react-native";
import { Mode } from "./Mode";
import { styles } from "./ModeStyles";

const ModeContainer = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Mode navigation={navigation} />
    </SafeAreaView>
  );
};

export default ModeContainer;
