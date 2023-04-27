import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import {
    moderateScale,
    verticalScale,
    scale
  } from "react-native-size-matters"

  import React from 'react'
  
  export const Wp = (number) => {
    return wp(2.5*(number/10))
  }

  export const Hp = (number)=>{
    return hp(1.5*(number/10))
  }
  export const FontSize = (number)=>{
    return scale(number) 
  }
  export const CircularBorderRadius = (width,height)=>{
    return (Wp(width)+Hp(height))/2
  }
