import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ImageBackground,
  FlatList,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Images } from "./Components/Avatators";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SettingsIcon from "react-native-vector-icons/Feather";
import CameraIcon from "react-native-vector-icons/Feather";
import PencilIcon from "react-native-vector-icons/SimpleLineIcons";
import CheckIcon from "react-native-vector-icons/FontAwesome6";
import { useTranslation } from "react-i18next";
import CoverImage from "../../assets/images/coverbackground.jpg";
import PlaceHolderImage from "../../assets/images/anime.jpg";
import SortDown from "react-native-vector-icons/FontAwesome";
import NameModal from "./Components/NameModal";
import SortModal from "./Components/SortModal";
import FileManagerImage from "../../assets/images/FileManager.png";

const Me = ({ navigation }) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [name, setName] = useState(t("common:name"));
  const [sortOption, setSortOption] = useState("");
  const [userImage, setUserImage] = useState(PlaceHolderImage);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["90%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedAvatar = await AsyncStorage.getItem("selectedAvatar");
        const storedName = await AsyncStorage.getItem("userName");

        if (storedAvatar !== null) {
          setUserImage(JSON.parse(storedAvatar));
        }
        if (storedName !== null) {
          setName(storedName);
        }
      } catch (error) {
        console.error("Failed to load data from storage.", error);
      }
    };

    loadData();
  }, []);

  const avatarImages = Images.Avatars[0].images;

  const selectAvatar = async (image) => {
    try {
      await AsyncStorage.setItem("selectedAvatar", JSON.stringify(image));
      setSelectedAvatar(image);

      setTimeout(() => {
        setUserImage(image);
        bottomSheetModalRef.current?.dismiss();
      }, 500);
    } catch (error) {
      console.error("Failed to save the image to storage.", error);
    }
  };

  // Save the updated name to AsyncStorage
  const saveName = async (newName) => {
    try {
      await AsyncStorage.setItem("userName", newName);
      setName(newName);
      setModalVisible(false); // Close the modal
    } catch (error) {
      console.error("Failed to save the name to storage.", error);
    }
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <ImageBackground source={CoverImage} style={styles.coverImage}>
            <Pressable
              style={styles.editIconContainer}
              onPress={() => navigation.navigate("Settings")}
            >
              <SettingsIcon name="settings" size={20} color="#FFFFFF" />
            </Pressable>
          </ImageBackground>
          <View style={styles.userImageContainer}>
            <Image source={userImage} style={styles.userImage} />
            <Pressable
              style={styles.cameraIconContainer}
              onPress={handlePresentModalPress}
            >
              <CameraIcon name="camera" size={16} color="#000000" />
            </Pressable>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.pencilIconContainer}>
              <Pressable onPress={() => setModalVisible(true)}>
                <PencilIcon name="pencil" size={15} color={"#6A6A6A"} />
                <View style={styles.underline} />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.myWorkContainer}>
          <Text style={styles.nameText}>{t("common:my_work")}</Text>
          <Pressable
            style={styles.sortContainer}
            onPress={() => setSortModalVisible(true)}
          >
            <Text style={styles.sortText}>
              {sortOption || t("common:sort_by")} {}
            </Text>
            <SortDown name="sort-down" size={16} color={"#7E7E7E"} />
          </Pressable>
        </View>
        <View style={styles.mainContainer}>
          <Image source={FileManagerImage} style={styles.fileImage} />
          <Text style={styles.emptyDescription}>
            You haven't created any image yet
          </Text>
        </View>
        <NameModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          currentName={name}
          onSaveName={saveName}
        />
        <SortModal
          visible={sortModalVisible}
          onClose={() => setSortModalVisible(false)}
          onSelect={setSortOption}
        />
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={styles.backgroundStyle}
        handleIndicatorStyle={styles.oct}
        enableDismissOnClose={true}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleBottomSheet}>Select Avatar</Text>
          </View>
          <View style={styles.avatarMainContainer}>
            <FlatList
              data={avatarImages}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              numColumns={4}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => selectAvatar(item)}
                  style={[
                    styles.imageContainer,
                    selectedAvatar === item && {
                      borderColor: "purple",
                      borderWidth: 2,
                    },
                  ]}
                >
                  <Image source={item} style={styles.avatarImage} />
                  {selectedAvatar === item && (
                    <View style={styles.tickMarkContainer}>
                      <CheckIcon
                        name="check"
                        size={20}
                        color="#FFFFFF"
                        style={styles.tickIcon}
                      />
                    </View>
                  )}
                </Pressable>
              )}
              contentContainerStyle={styles.flatListContent}
              removeClippedSubviews={false}
              renderToHardwareTextureAndroid={true}
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default Me;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  profileContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  coverImage: {
    height: 100,
    width: "100%",
  },
  editIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#AAAAAA",
    borderRadius: 20,
    padding: 4,
  },
  userImageContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: "center",
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 5,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 4,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 8,
  },
  pencilIconContainer: {
    alignItems: "center",
  },
  underline: {
    height: 1,
    backgroundColor: "#6A6A6A",
    width: 20,
    marginTop: 2,
  },
  myWorkContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    borderBottomColor: "#E8E8E8",
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  sortContainer: {
    flexDirection: "row",
    backgroundColor: "#F7F7F9",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
  },
  sortText: {
    marginRight: 5,
    fontSize: 14,
    color: "#7E7E7E",
    fontWeight: "400",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fileImage: {
    height: 120,
    width: 120,
    opacity: 0.4,
  },
  emptyDescription: {
    fontSize: 11,
    color: "#747474",
    fontWeight: "400",
    fontStyle: "normal",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  oct: {
    width: 50,
    backgroundColor: "#CBCBCB",
  },
  backgroundStyle: {
    elevation: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 4,
  },
  textContainer: {
    paddingVertical: 10,
    alignItems: "center",
    borderBottomColor: "#C9C9C9",
    borderBottomWidth: 2,
  },
  titleBottomSheet: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
    fontStyle: "normal",
  },
  avatorMainContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    maxHeight: 74,
    maxWidth: 74,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  tickMarkContainer: {
    position: "absolute",
    top: "35%",
    left: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  tickIcon: {
    textAlign: "center",
  },
  flatListContent: {
    justifyContent: "center",
  },
});
