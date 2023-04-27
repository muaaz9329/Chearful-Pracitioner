import { FlatList, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import { PractitionerData } from '../../../Data/PractitonerData'
import HistoryCardDesign from './HistoryCardDesign'
import { Wp } from '@app/helper/CustomResponsive'
const HistoryCoursalComponent = () => {
  return (
   <FlatList
   data={PractitionerData}
    renderItem={({ item, index }) => {
        return(
            <HistoryCardDesign data={item} key={index} />
        )
    }}
    contentContainerStyle={{
        paddingHorizontal: Wp(16),
    }}
    showsVerticalScrollIndicator={false}
   
   />

  )
}

export default HistoryCoursalComponent

const styles = StyleSheet.create({})