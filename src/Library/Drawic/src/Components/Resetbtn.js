import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import { Wp } from '@app/helper/CustomResponsive'

const Resetbtn = ({CanvasRef,deviceType}) => {
  const HandleReset = () =>{
    CanvasRef.current.Reset_Whole_Canvas()
  }


  return (
    <TouchableOpacity onPress={HandleReset}>
      <Image source={require('../Icons/Reset.png')} style={{width:deviceType==='mobile'?Wp(30):Wp(18),height:deviceType==='mobile'?Wp(30):Wp(18)}} />
    </TouchableOpacity>
  )
}

export default Resetbtn

const styles = StyleSheet.create({})