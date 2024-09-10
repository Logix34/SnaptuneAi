import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CrownImage from "../assets/images/crown.png";
import BackIcon from "react-native-vector-icons/AntDesign";
const AppHeader = ({ title }) => {
  return (
    <View style={styles.topHeader}>
      <BackIcon name="arrowleft" size={22} style={styles.backArrow} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <Image source={CrownImage} style={styles.crownImage} />
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginHorizontal: 10,
  },
  headerContainer: {
    flex: 1,
    height: 55,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  crownImage: {
    height: 20,
    width: 20,
    marginBottom: 8,
    resizeMode: "contain",
  },
  backArrow: {
    marginBottom: 4,
  },
});
