import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Categories } from "../../../Components/Categories"; // Adjust the import path
import React from "react";
import CameraImage from "../../../assets/images/photo.png";
import { useTranslation } from "react-i18next";

const AiCreatorFlatLists = () => {
  const { t } = useTranslation();
  const BackGroundRemoverImages =
    Categories.CreatorCategories.find((item) => item.id === 1)?.images || [];

  const profilePhotos =
    Categories.CreatorCategories.find((item) => item.id === 2)?.images || [];

    // const photoEditingClassic =
    // Categories.CreatorCategories.find((item) => item.id === 3)?.images || [];

    // const wings =
    // Categories.CreatorCategories.find((item) => item.id === 4)?.images || [];

  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={styles.image} />
    </View>
  );
  // profile Images Renders
  const profileImageItem = ({ item }) => (
    <View style={styles.imageContainer1}>
      <Image source={item} style={styles.profileImage} />
    </View>
  );

  const renderSeeAll = () => (
    <View style={styles.seeAllContainer}>
      <View style={styles.circleNext}>
        <AntDesign name="arrowright" size={20} color={"#8950FF"} />
      </View>
      <Text style={styles.seeAll}>{t("common:see_all")}</Text>
    </View>
  );

  return (
    <View>
      {/* Remove BackGround Section */}
      <View style={styles.topContentContainer}>
        <Text style={styles.headingText}>{t("common:remove_background")}</Text>
        <Feather name="chevron-right" size={20} color={"#000000"} />
      </View>
      <FlatList
        data={[...BackGroundRemoverImages, { seeAll: true }]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 5 }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          item.seeAll ? renderSeeAll() : renderImageItem({ item })
        }
      />
      {/* Profile Photo Section */}
      <View style={styles.topContentContainer}>
        <Text style={styles.headingText}>{t("common:profile_photo")}</Text>
        <Feather name="chevron-right" size={20} color={"#000000"} />
      </View>
      <FlatList
        data={[...profilePhotos, { seeAll: true }]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 5 }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          item.seeAll ? renderSeeAll() : profileImageItem({ item })
        }
      />
    </View>
  );
};

export default AiCreatorFlatLists;

const styles = StyleSheet.create({
  topContentContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "600",
  },
  imageContainer: {
    marginHorizontal: 5,
    height: 85,
    width: 85,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom:15
  },
  seeAllContainer: {
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 85,
    width: 85,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    height: 85,
    width: 85,
    borderRadius: 15,
    alignSelf: "center",
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },
  circleNext: {
    backgroundColor: "#EDE5FD",
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  seeAll: {
    color: "#8950FF",
    fontWeight: "500",
    fontStyle: "normal",
  },
  imageContainer1: {
    marginHorizontal: 5,
    height: 85,
    width: 85,
    borderRadius: 15,
    marginBottom:15,
    justifyContent: "center",
    overflow: "hidden",
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },
  profileImage: {
    height: 83,
    width: 83,
    borderRadius: 45,
    alignSelf: "center",
  },
  cameraImage:{
    height:30,
    width:30,
    marginLeft:10
  }
});
