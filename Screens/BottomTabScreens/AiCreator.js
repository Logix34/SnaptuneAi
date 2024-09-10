import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Swiper from "react-native-swiper";
import AiCreatorFlatLists from "./Components/AiCreatorFlatLists";

const AiCreator = () => {
  const { t } = useTranslation();
  const swiperRef = useRef(null);

  // Array of images
  const images = [
    require("../../assets/images/SwiperScreen/media_20240905_144541_6368865886325724422.jpg"),
    require("../../assets/images/SwiperScreen/media_20240905_144541_2057334782464796875-removebg-preview.png"),
    require("../../assets/images/SwiperScreen/media_20240905_144541_5093688076329419060-removebg-preview.png"),
    require("../../assets/images/SwiperScreen/media_20240905_144541_6368865886325724422.jpg"),
    require("../../assets/images/SwiperScreen/media_20240905_144541_6753752762296300569-removebg-preview.png"),
  ];


  return (
    <SafeAreaView style={styles.topContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{t("common:ai_creator")}</Text>
        <Image
          source={require("../../assets/images/crown.png")}
          style={styles.crownImage}
        />
      </View>
      <View style={styles.mainContainer}>
        <Swiper
          loop={true}
          autoplay={true}
          autoplayTimeout={5}
          index={0}
          ref={swiperRef}
          style={styles.wrapper}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          {images.map((image, index) => (
            <View style={styles.slide} key={index}>
              <Pressable>
                <Image source={image} style={styles.girlImage} />
              </Pressable>
            </View>
          ))}
        </Swiper>
      </View>
      <AiCreatorFlatLists />
    </SafeAreaView>
  );
};

export default AiCreator;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    height: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginHorizontal: 20,
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
  mainContainer: {
    flex: 1,
    maxHeight: 220,
  },
  slide: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  girlImage: {
    height: 180,
    resizeMode: "contain",
  },
  dot: {
    backgroundColor: "#DBDBDB",
    width: 6,
    height: 6,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#7141D2",
    width: 20,
    height: 5,
    borderRadius: 4,
    marginHorizontal: 3,
  },
 
});
