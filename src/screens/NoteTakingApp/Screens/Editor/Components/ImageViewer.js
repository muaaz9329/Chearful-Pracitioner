import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header';

const ImageViewer = ({route,navigation}) => {
  const { mode, content, ClientData } = route.params;

  return (
    <SafeAreaView>
      <Header navigation={navigation} data={ClientData} mode={mode} />
      <Text>ImageViewer</Text>
    </SafeAreaView>
  )
}

export default ImageViewer

const styles = StyleSheet.create({})