import {

    widthPercentageToDP,
    heightPercentageToDP,
  } from "react-native-responsive-screen";
  import {

    scale
  } from "react-native-size-matters"

  import React from 'react'
  
  export const Wp = (number) => {
    return widthPercentageToDP(2.5*(number/10))
  }

  export const Hp = (number)=>{
    return heightPercentageToDP(1.5*(number/10))
  }
  export const FontSize = (number)=>{
    return scale(number) 
  }
  export const CircularBorderRadius = (width,height)=>{
    return (Wp(width)+Hp(height))/2
  }

  export const wp = (num)=>{
    return widthPercentageToDP(num)
  }

  export const hp = (num)=>{
    return heightPercentageToDP(num)
  }
