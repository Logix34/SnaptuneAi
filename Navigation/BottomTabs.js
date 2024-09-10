import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TamplateInactiveImage from "../assets/BottomTabImages/Tamplate-inactive.png";
import TamplateActiveImage from "../assets/BottomTabImages/Tamplate-Active.png";
import CollageInactiveImage from "../assets/BottomTabImages/Collage-inactive.png";
import CollageActiveImage from "../assets/BottomTabImages/Collage-Active.png";
import EditInactiveImage from "../assets/BottomTabImages/Edit-inactive.png";
import EditActiveImage from "../assets/BottomTabImages/Edit-Active.png";
import MeInactiveImage from "../assets/BottomTabImages/Me-inactive.png";
import MeActiveImage from "../assets/BottomTabImages/Me-Active.png";
import Tamplates from "../Screens/BottomTabScreens/Tamplates";
import AiCreator from "../Screens/BottomTabScreens/AiCreator";
import Collage from "../Screens/BottomTabScreens/Collage";
import Edit from "../Screens/BottomTabScreens/Edit";
import Me from "../Screens/BottomTabScreens/Me";
import Settings from "../Screens/startUp/Settings";
import { useTranslation } from "react-i18next";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MeStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="Me" component={Me} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
const BottomTabs = () => {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="AiCreator"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#999999",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "400",
          marginBottom: 5,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          height: 60,
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          borderTopWidth: 1,
          borderTopColor: "#FFF",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Tamplates"
        component={Tamplates}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.textLabel,
                { color: focused ? "#7141D2" : "#AAAAAA" },
              ]}
            >
              {t("common:tamplate")}
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? TamplateActiveImage : TamplateInactiveImage}
                style={styles.homeImage}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Collage"
        component={Collage}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.textLabel,
                { color: focused ? "#7141D2" : "#AAAAAA" },
              ]}
            >
              {t("common:collage")}
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? CollageActiveImage : CollageInactiveImage}
                style={styles.homeImage}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="AiCreator"
        component={AiCreator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.textLabel,
                { color: focused ? "#7141D2" : "#AAAAAA" },
              ]}
            >
              {t("common:ai_creator")}
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? CollageActiveImage : CollageInactiveImage}
                style={styles.homeImage}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Edit"
        component={Edit}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.textLabel,
                { color: focused ? "#7141D2" : "#AAAAAA" },
              ]}
            >
              {t("common:edit")}
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? EditActiveImage : EditInactiveImage}
                style={styles.homeImage}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MeStack"
        component={MeStack}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.textLabel,
                { color: focused ? "#7141D2" : "#AAAAAA" },
              ]}
            >
              {t("common:me")}
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? MeActiveImage : MeInactiveImage}
                style={styles.homeImage}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;

const styles = StyleSheet.create({
  homeImage: {
    height: 24,
    marginTop: 7,
    width: 24,
    resizeMode: "contain",
  },
  textLabel: {
    marginBottom: 5,
    fontSize: 11,
    fontWeight: "500",
  },
});
