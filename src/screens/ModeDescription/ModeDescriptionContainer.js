import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { ModeDescription } from "./ModeDescription";
import { styles } from "./ModeDescriptionStyles";

const ModeDescriptionContainer = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <ModeDescription
        navigation={navigation}
        title={route.params.title}
        description={route.params.description}
      />
    </SafeAreaView>
  );
};

export default ModeDescriptionContainer;
