import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ProgressBar } from "@react-native-community/progress-bar-android";
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';

const progressProps = {
  styleAttr: "Horizontal",
  indeterminate: false,
};

const SplashLoading = () => {
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(interval);
          navigation.replace('Language'); 
          return 1;
        }
        return prev + 0.01;
      });
    }, 30); 

    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Snaptune</Text>
        <Text style={styles.aiText}>AI</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
        <View style={styles.barContainer}>
          <ProgressBar
            {...progressProps}
            progress={progress}
            color={"#9A1EA0"}
            style={[styles.bar, { transform: [{ scaleY: 1.5 }] }]} // Adjust scale if needed
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashLoading;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 30,
  },
  titleText: {
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "500",
  },
  aiText: {
    color: "#9A1EA0",
    fontSize: 23,
    marginLeft: 3,
    fontStyle: "italic",
    fontWeight: "500",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loadingText: {
    fontSize: 20,
    marginBottom: 50,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
  },
  barContainer: {
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 100,
    height: 30,
  },
  bar: {
    borderRadius: 10,
  },
});
