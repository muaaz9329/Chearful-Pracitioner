import { StyleSheet, Text, View,ScrollView,Pressable } from 'react-native'
import React from 'react'
import { FontSize, Wp } from '@helper/CustomResponsive'
import { Mulish } from '@helper/FontWeight'
import CardDesign from './CardDesign'
import SoundBitesData from '../../Data/SoundBitesData'


const InterviewAndSound = ({navigation}) => {
  const HandleNavigtion = (url) => {
    navigation.navigate('WebPreview',{url:url})
  }
  
  return (

    <View>
      <Text style={styles.Title}>Interviews & Sound Bites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingStart:Wp(16)}} >
        {
            SoundBitesData.map((item,index) => {
                return (
                  <Pressable onPress={()=>HandleNavigtion(item.url)} key={index}>
                    <CardDesign Data={item}  />
                    </Pressable>
                )
            }
            )
        }
      </ScrollView>
    </View>
  )
}

export default InterviewAndSound

const styles = StyleSheet.create({
    Title: {
        fontSize: FontSize(20),
        fontFamily: Mulish(700),
        color: "#1D1A0E",
        marginBottom:Wp(20),
        paddingHorizontal: Wp(16),
    }
})