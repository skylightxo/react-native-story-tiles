import React from "react";
import { SafeAreaView } from "react-native";
import { Main } from "./Main";
import { styles } from "./MainStyles";

export const MainContainer = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Main navigation={navigation} />
    </SafeAreaView>
  );
};
