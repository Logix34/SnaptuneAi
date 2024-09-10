import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

const SortModal = ({ visible, onClose, onSelect }) => {
  const { t } = useTranslation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => {
              onSelect(t("common:date"));
              onClose();
            }}
          >
            <Text style={styles.modalText}>{t("common:date")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => {
              onSelect(t("common:name"));
              onClose();
            }}
          >
            <Text style={styles.modalText}>{t("common:name")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",     
  },
  modalView: {
    backgroundColor: "#FFFFFF",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  modalOption: {
    width: "100%",
    backgroundColor:'#f7f7f7',
    padding: 15,
    alignItems: "center",
    marginVertical: 5,
  },
  modalText: {
    fontSize: 16,
    color: "#000000",
  },
});

export default SortModal;
