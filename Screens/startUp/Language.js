import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  I18nManager,
} from "react-native";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LANGUAGES = [
  {
    code: "en",
    label: "English ( Auto )",
    image: require("../../assets/flags/us.png"),
  },
  { code: "ko", label: "한국인", image: require("../../assets/flags/kr.png") },
  { code: "es", label: "Español", image: require("../../assets/flags/es.png") },
  { code: "ja", label: "日本語", image: require("../../assets/flags/jp.png") },
  {
    code: "id",
    label: "Indonesian",
    image: require("../../assets/flags/id.png"),
  },
  {
    code: "pt",
    label: "Portuguese",
    image: require("../../assets/flags/pt.png"),
  },
  {
    code: "vi",
    label: "Tiếng Việt",
    image: require("../../assets/flags/vn.png"),
  },
  { code: "ru", label: "Русский", image: require("../../assets/flags/ru.png") },
  { code: "tr", label: "Türkçe", image: require("../../assets/flags/tr.png") },
  { code: "ms", label: "Melayu", image: require("../../assets/flags/my.png") },
  { code: "th", label: "แบบไทย", image: require("../../assets/flags/th.png") },
  { code: "pl", label: "Polski", image: require("../../assets/flags/pl.png") },
];

const Language = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage = (code) => {
    I18nManager.forceRTL(code === "ar");
    let currlang = i18n.language;

    i18n.changeLanguage(code);
    if (currlang === code) {
      // navigation.navigate("SwiperList");
    } else {
      AsyncStorage.setItem(
        "lang",
        JSON.stringify({ lang: code, restarted: false })
      ).then((val) => {
        return;
      });
    }
  };

  return (
    <View style={styles.TopContainer}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.title}>{t("common:language")}</Text>
          <Pressable
            style={styles.nextButton}
            onPress={() => navigation.navigate("SwipperList")}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </Pressable>
        </View>
        <View style={styles.languagesContainer}>
          {LANGUAGES.map((language) => {
            const selectedLanguage = language.code === selectedLanguageCode;

            return (
              <Pressable
                key={language.code}
                style={[
                  styles.buttonContainer,
                  selectedLanguage && styles.selectedButtonContainer,
                ]}
                onPress={() => setLanguage(language.code)}
              >
                <Image source={language.image} style={styles.flag} />
                <Text style={styles.text}>{language.label}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  TopContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headingContainer: {
    flexDirection: "row",
    marginHorizontal: 25,
    marginTop: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  title: {
    color: "#000",
    fontSize: 20,
    marginTop: 8,
    fontWeight: "600",
    alignSelf: "center",
  },
  languagesContainer: {
    flexDirection: "row",
    marginTop: 30,
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  buttonContainer: {
    width: "47%",
    backgroundColor: "#F0F0F0",
    height: 90,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 12,
    padding: 10,
    margin: 5,
    alignItems: "center",
  },
  selectedButtonContainer: {
    borderColor: "#8134E3",
  },
  flag: {
    width: 40,
    height: 30,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
  selectedText: {
    color: "#8134E3",
    fontWeight: "600",
  },
  nextButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#8134E3",
    borderRadius: 50,
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 13,
  },
});
