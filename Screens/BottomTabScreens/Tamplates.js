import { StyleSheet, Text, View,SafeAreaView } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import AppHeader from "../../Components/AppHeader";

const Tamplates = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.topContainer}>
      <AppHeader title={t("common:tamplate")} />
    </SafeAreaView>
  );
};

export default Tamplates;

const styles = StyleSheet.create({
  topContainer:{
    flex:1,
    backgroundColor:'#FFF'
  }
});
