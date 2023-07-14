import { FlatList, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import HistoryCardDesign from './HistoryCardDesign'
import { Wp } from '@app/helper/CustomResponsive'
const HistoryCoursalComponent = ({Data}) => {
  return (
   <FlatList
   data={Data}
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