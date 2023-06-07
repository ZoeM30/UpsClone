import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="Main"
          component={TabNavigator}
        ></RootStack.Screen>
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default TabNavigator;
