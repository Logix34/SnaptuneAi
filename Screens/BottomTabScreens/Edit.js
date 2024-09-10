import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AppHeader from '../../Components/AppHeader'
import { useTranslation } from 'react-i18next';

const Edit = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.topContainer}>
       <AppHeader title={t("common:edit")} />
    </SafeAreaView>
  )
}

export default Edit

const styles = StyleSheet.create({
  topContainer:{
    flex:1,
    backgroundColor:"#FFF"
  }
})