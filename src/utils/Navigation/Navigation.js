import React from "react";
import { MainContainer } from "../../screens/Main/MainContainer";
import ModeContainer from "../../screens/Mode/ModeContainer";
import ModeDescriptionContainer from "../../screens/ModeDescription/ModeDescriptionContainer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Main"
      >
        <Stack.Screen name="Main" component={MainContainer} />
        <Stack.Screen name="Mode" component={ModeContainer} />
        <Stack.Screen
          name="ModeDescription"
          component={ModeDescriptionContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
