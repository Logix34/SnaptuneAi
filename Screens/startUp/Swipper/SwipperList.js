import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  Pressable,
  Animated,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { useTranslation } from "react-i18next";
import LeftIcon from "react-native-vector-icons/AntDesign";
import CaretUpIcon from "react-native-vector-icons/AntDesign";

const { width: screenWidth } = Dimensions.get("window");

const SwipperList = ({navigation}) => {
  const { t } = useTranslation();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lineAnimation = useRef(new Animated.Value(screenWidth)).current;

  const handlePress = () => {
    if (activeIndex === 1) {
      navigation.navigate("BottomTabs");
    } else {
      // Scroll to next slide
      if (swiperRef.current) {
        swiperRef.current.scrollBy(1, true);
      }
    }
  };

  useEffect(() => {
    // Reset animation value
    lineAnimation.setValue(screenWidth);

    // Animate from right to center every time activeIndex changes
    Animated.timing(lineAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [activeIndex]);

  // Define text and background based on active index
  const footerText =
    activeIndex === 0 ? "Remove Image Background" : "Change background color";

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerView}>
        <Pressable style={styles.skipButton} onPress={()=> navigation.navigate("BottomTabs")}>
          <Text style={styles.skipText}>{t("common:skip")}</Text>
        </Pressable>
      </View>
      <Swiper
        loop={false}
        index={0}
        onIndexChanged={(index) => setActiveIndex(index)}
        style={styles.wrapper}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        ref={swiperRef}
      >
        {/* Slide 1 */}
        <View style={styles.slide}>
          <ImageBackground
            source={require("../../../assets/images/background-image.jpg")}
            style={styles.backgroundImage}
          >
            <View style={styles.overlay}>
              <Image
                source={require("../../../assets/images/girl-image-removebg-preview.png")}
                style={styles.girlImage}
              />
              <Animated.View
                style={[
                  styles.slider,
                  {
                    transform: [{ translateX: lineAnimation }],
                  },
                ]}
              >
                <View style={styles.leftIcon}>
                  <LeftIcon name="left" size={16} color={"#7141D2"} />
                </View>
                <View style={styles.line} />
                <View style={styles.rightIcon}>
                  <LeftIcon name="right" size={16} color={"#7141D2"} />
                </View>
                <View style={styles.sliderTextContainer}>
                  <CaretUpIcon
                    name="caretup"
                    size={20}
                    color={"#FFF"}
                    style={styles.caretUpIcon}
                  />
                  <Text style={styles.sliderText}>{t("common:move_this_slider")}</Text>
                </View>
              </Animated.View>
            </View>
          </ImageBackground>
        </View>

        {/* Slide 2 */}
        <View style={styles.slide}>
          <ImageBackground
            source={require("../../../assets/images/background2.jpg")}
            style={styles.backgroundImage}
          >
            <View style={styles.overlay}>
              <Image
                source={require("../../../assets/images/boys1.png")}
                style={styles.girlImage}
              />
              <Animated.View
                style={[
                  styles.slider,
                  {
                    transform: [{ translateX: lineAnimation }],
                  },
                ]}
              >
                <View style={styles.leftIcon}>
                  <LeftIcon name="left" size={16} color={"#7141D2"} />
                </View>
                <View style={styles.line} />
                <View style={styles.rightIcon}>
                  <LeftIcon name="right" size={16} color={"#7141D2"} />
                </View>
                <View style={styles.sliderTextContainer}>
                  <CaretUpIcon
                    name="caretup"
                    size={20}
                    color={"#FFF"}
                    style={styles.caretUpIcon}
                  />
                  <Text style={styles.sliderText}>Move this slider</Text>
                </View>
              </Animated.View>
            </View>
          </ImageBackground>
        </View>
      </Swiper>
      <View style={styles.footer}>
        <View style={styles.footerTextView}>
          <Text style={styles.footerText}>{footerText}</Text>
        </View>
        <View style={styles.paginationContainer}>
          <View style={styles.pagination}>
            <View
              style={[
                styles.dot,
                activeIndex === 0 ? styles.activeDot : styles.inactiveDot,
              ]}
            />
            <View
              style={[
                styles.dot,
                activeIndex === 1 ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          </View>
          <Pressable style={styles.nextButtonContainer} onPress={handlePress}>
            <Text style={styles.nextButtonText}>Next</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SwipperList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerView: {
    height: 80,
    justifyContent: "center",
  },
  skipButton: {
    alignSelf: "flex-end",
    padding: 7,
    backgroundColor: "#999999",
    marginHorizontal: 20,
    borderRadius: 6,
  },
  skipText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    fontStyle: "normal",
  },
  slide: {
    flex: 1,
    maxHeight: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  girlImage: {
    flex: 1,
  },
  slider: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: "100%",
  },
  line: {
    height: "100%",
    width: 5,
    backgroundColor: "white",
  },
  leftIcon: {
    width: 30,
    height: 30,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  rightIcon: {
    width: 30,
    height: 30,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  sliderTextContainer: {
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: "63%",
    left: "55%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  caretUpIcon: {
    marginBottom: -8,
  },
  sliderText: {
    fontSize: 15,
    color: "#000",
    backgroundColor: "white",
    padding: 14,
    borderRadius: 10,
    textAlign: "center",
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: "#7141D2",
    width: 20,
  },
  inactiveDot: {
    backgroundColor: "#DBDBDB",
  },
  footer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 42,
  },
  footerTextView: {
    marginBottom: 60,
  },
  footerText: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  nextButtonContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  nextButtonText: {
    color: "#7141D2",
    fontWeight:'bold',
    fontSize: 16,
  },
});
