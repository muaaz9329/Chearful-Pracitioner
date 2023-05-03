import { FlatList, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import { PractitionerData } from '../../Data/PractitonerData'
import HistoryCardDesign from './HistoryCardDesign'
import { Wp } from '@app/helper/CustomResponsive'
const HistoryCoursalComponent = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:Wp(16)}} >
        {
            PractitionerData.map((item,index)=>{
                return(
                    <HistoryCardDesign
                    key={index}
                    data={item}
                    />
                )
            })
        }
        </ScrollView>

  )
}

export default HistoryCoursalComponent

const styles = StyleSheet.create({})