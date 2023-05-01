import { StyleSheet, Text, View,ScrollView,Pressable } from 'react-native'
import React from 'react'
import { FontSize, Wp } from '@helper/CustomResponsive'
import { Mulish } from '@helper/FontWeight'
import CardDesign from './CardDesign'
import BlogsData from '../../Data/BlogsData'

const BlogsAndArticle = ({navigation}) => {
  const HandleNavigtion = (url) => {
    navigation.navigate('WebPreview',{url:url})
  }
  return (
    <View>
      <Text style={styles.Title}>Research</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
        <View style={{marginHorizontal:Wp(16) , flexDirection:'row'}}>
        {
            BlogsData.map((item,index) => {
                return (
                  <Pressable onPress={()=>HandleNavigtion(item.url)}>
                    <CardDesign key={index} Data={item}  />
                    </Pressable>
                )
            }
            )
        }
        </View>
        
      </ScrollView>
    </View>
  )
}

export default BlogsAndArticle

const styles = StyleSheet.create({
    Title: {
        fontSize: FontSize(20),
        fontFamily: Mulish(700),
        color: "#1D1A0E",
        marginBottom:Wp(20),
        paddingHorizontal: Wp(16),
    }
})