import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import BackIcon from "react-native-vector-icons/AntDesign";
import PrivacyPolicy from "../../assets/images/file.png";
import DeleteBin from "../../assets/images/delete.png";
import RateImage from "../../assets/images/like.png";
import ShareImage from "../../assets/images/share.png";
import InstagramImage from "../../assets/images/instagram.png";
import FacebookImage from "../../assets/images/facebook.png";
import YoutubeImage from "../../assets/images/youtube.png";
import TwitterImage from "../../assets/images/twitter.png";
import React from "react";
import { useTranslation } from "react-i18next";
import SettingsCard from "../../Components/SettingsCard";

const Settings = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.topContainer}>
      <View style={styles.topHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackIcon name="arrowleft" size={22} style={styles.backArrow} />
        </Pressable>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{t("common:setting")}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SettingsCard />
        <Text style={styles.genraltext}>General</Text>
        <View style={{ marginHorizontal: 15 }}>
          <Pressable style={styles.topBtn}>
            <Image
              source={PrivacyPolicy}
              resizeMode="contain"
              style={styles.buttonImage}
            />
            <Text style={styles.btnText}>Privacy Policy</Text>
          </Pressable>
          <Pressable style={styles.centerBtn}>
            <Image
              source={RateImage}
              resizeMode="contain"
              style={styles.buttonImage}
            />
            <Text style={styles.btnText}>Rate Us</Text>
          </Pressable>
          <Pressable style={styles.endBtn}>
            <Image
              source={DeleteBin}
              resizeMode="contain"
              style={styles.buttonImage}
            />
            <Text style={styles.btnText}>Clear Cache</Text>
          </Pressable>
        </View>
        <Text style={styles.socialText}>Social</Text>
        <View style={{ marginHorizontal: 15 }}>
          <Pressable style={styles.topBtn}>
            <Image
              source={ShareImage}
              resizeMode="contain"
              style={styles.buttonImage}
            />
            <Text style={styles.btnText}>Share App</Text>
          </Pressable>
          <Pressable style={styles.centerBtn}>
            <Image
              source={InstagramImage}
              resizeMode="contain"
              style={styles.buttonImage}
            />
            <Text style={styles.btnText}>Instagram</Text>
          </Pressable>
          <Pressable style={styles.centerBtn}>
            <Image
              source={FacebookImage}
              resizeMode="contain"
              style={styles.buttonImage}
            />
            <Text style={styles.btnText}>Facebook</Text>
          </Pressable>
          <Pressable style={styles.centerBtn}>
            <Image
              source={YoutubeImage}
              resizeMode="contain"
              style={styles.buttonImage}
            />
            <Text style={styles.btnText}>Youtube</Text>
          </Pressable>
          <Pressable style={styles.endBtn}>
            <Image
              source={TwitterImage}
              resizeMode="contain"
              style={styles.buttonImage}
            />
            <Text style={styles.btnText}>Twitter</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  topHeader: {
    paddingBottom: 15,
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
  genraltext: {
    marginHorizontal: 16,
    marginBottom:10,
    fontSize: 15,
    color: "#8C8C8C",
    fontWeight: "400",
  },
  topBtn: {
    padding: 10,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F3F3F5",
    borderBottomColor: "#E1E1E3",
    borderBottomWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  centerBtn: {
    padding: 10,
    alignItems: "center",
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: "#F3F3F5",
    borderBottomColor: "#E1E1E3",
    borderBottomWidth: 1,
  },
  endBtn: {
    padding: 10,
    alignItems: "center",
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: "#F3F3F5",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonImage: {
    height: 22,
    width: 22,
  },
  btnText: {
    fontSize: 15,
    color: "#000000",
    fontWeight: "400",
    marginLeft: 10,
  },
  socialText: {
    margin: 10,
    fontSize: 16,
    color: "#8C8C8C",
    fontWeight: "400",
  },
});
