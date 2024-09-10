import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AppHeader from "../../Components/AppHeader";

const Collage = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.topContainer}>
       <AppHeader title={t("common:collage")} />
    </SafeAreaView>
  );
};

export default Collage;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  
});
