import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AlertScreen from '@app/common/Module/Alert/AlertScreen'
import Alerts from '../../Data/AlertData'

const Notification = () => {
  return (
    <AlertScreen Alerts={Alerts}/>
  )
}

export default Notification

const styles = StyleSheet.create({})