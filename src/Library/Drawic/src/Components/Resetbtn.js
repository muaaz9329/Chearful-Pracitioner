import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import { Wp } from '@app/helper/CustomResponsive'

const Resetbtn = ({CanvasRef}) => {
  const HandleReset = () =>{
    CanvasRef.current.Reset_Whole_Canvas()
  }


  return (
    <TouchableOpacity onPress={HandleReset}>
      <Image source={require('../Icons/Reset.png')} style={{width:Wp(30),height:Wp(30)}} />
    </TouchableOpacity>
  )
}

export default Resetbtn

const styles = StyleSheet.create({})