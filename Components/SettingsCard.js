import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CardBackGround from "../assets/images/Avators/backGround.png";
import RightIcon from "react-native-vector-icons/Entypo";
import { useTranslation } from "react-i18next";
const SettingsCard = () => {
  const { t } = useTranslation();

  return (
    <View>
      <ImageBackground
        source={CardBackGround}
        tintColor={"#EBE6FC"}
        style={styles.topBlueContainer}
      >
        <View style={styles.cardText}>
          <Text style={styles.cardHeadingText}>{t("common:snaptune_pro")}</Text>
          <View style={styles.descContainer}>
            <RightIcon name="check" size={18} color={"#8452F7"} />
            <Text style={styles.descText}>
              {t("common:unlock_premium_frames")}
            </Text>
          </View>
          <View style={styles.descContainer}>
            <RightIcon name="check" size={18} color={"#8452F7"} />
            <Text style={styles.descText}>
              {t("common:unlock_all_ai_features")}
            </Text>
          </View>
          <View style={styles.descContainer}>
            <RightIcon name="check" size={18} color={"#8452F7"} />
            <Text style={styles.descText}>{t("common:no_ads_anymore")}</Text>
          </View>
          <Pressable style={styles.tryProButton}>
            <Text style={styles.buttonText}>Try Pro Now</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SettingsCard;

const styles = StyleSheet.create({
  topBlueContainer: {
    flex: 1,
    maxHeight: 400,
    paddingBottom: 10,
  },
  cardText: {
    margin: 25,
  },
  cardHeadingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1916",
  },
  descContainer: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  descText: {
    color: "#1A1916",
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "500",
  },
  tryProButton: {
    marginTop: 15,
    marginLeft: 10,
    backgroundColor: "#8950FF",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: "flex-start",
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});