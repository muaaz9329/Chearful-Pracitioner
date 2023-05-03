import { FlatList, StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { PractitionerData } from '../../Data/PractitonerData'
import UpcomingCardDesign from './UpcomingCardDesign'
import { Wp } from '@app/helper/CustomResponsive'
const UpcomingCoursalComponent = () => {
  return (
//    <FlatList
//    data={PractitionerData}
//     renderItem={({ item, index }) => {
//         return(
//             <UpcomingCardDesign data={item} key={index} />
//         )
//     }}
//     contentContainerStyle={{
//         paddingHorizontal: Wp(16),
//     }}
//     showsVerticalScrollIndicator={false}
   
//    />
<ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:Wp(16)}} >
{
    PractitionerData.map((item,index)=>{
        return(
            <UpcomingCardDesign
            key={index}
            data={item}
            />
        )
    })
}
</ScrollView>
  )
}

export default UpcomingCoursalComponent

const styles = StyleSheet.create({})