import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AlertScreen from '@app/common/Module/Alert/AlertScreen'
import Alerts from '../Data/AlertTypes'

const Notifications = ({navigation}) => {
  return (
   <AlertScreen Alerts={Alerts} navigation={navigation} />
  )
}

export default Notifications

const styles = StyleSheet.create({})