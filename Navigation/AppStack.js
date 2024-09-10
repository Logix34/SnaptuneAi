import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashLoading from "../Screens/startUp/SplashLoading";
import Language from "../Screens/startUp/Language";
import SwipperList from "../Screens/startUp/Swipper/SwipperList";
import BottomTabs from "./BottomTabs";
import Settings from "../Screens/startUp/Settings";


function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="SplashLoading" component={SplashLoading} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="SwipperList" component={SwipperList} />
      <Stack.Screen name="Settings" component={Settings} />
      
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
}

export default AppStack;
