import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  I18nManager,
} from "react-native";
import { useTranslation } from "react-i18next";

const NameModal = ({ modalVisible, setModalVisible, currentName, onSaveName }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState(currentName);

  const handleSave = () => {
    if (inputValue) {
      onSaveName(inputValue);
    }
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.headingText}>{t("common:enter_your_name")}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={t("common:enter_your_name")}
              placeholderTextColor="#CCCCCC"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
              textAlign={I18nManager.isRTL ? "right" : "left"} // RTL support
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>{t("common:cancel")}</Text>
            </Pressable>
            <Pressable onPress={handleSave}>
              <Text style={styles.okaybutton}>{t("common:okay")}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NameModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",      
    backgroundColor: "rgba(0,0,0,0.5)", 
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%", // Width of modal
  },
  inputContainer: {
    marginBottom: 25,
  },
  headingText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
    fontStyle: "normal",
  },
  input: {
    height: 48,
    borderBottomWidth: 2,
    borderBottomColor: "#81AFD9",
    fontSize: 16,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  textStyle: {
    color: "#747474",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
  },
  okaybutton: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 10,
    color: "#7141D2",
  },
});
