import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {Svg , Path ,G ,Rect ,ClipPath , Defs} from 'react-native-svg'
const FaceBookLogo = ({width,height,color}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M24 12C24 5.376 18.624 0 12 0C5.376 0 0 5.376 0 12C0 17.808 4.128 22.644 9.6 23.76V15.6H7.2V12H9.6V9C9.6 6.684 11.484 4.8 13.8 4.8H16.8V8.4H14.4C13.74 8.4 13.2 8.94 13.2 9.6V12H16.8V15.6H13.2V23.94C19.26 23.34 24 18.228 24 12Z" fill={color}/>
</Svg>

  )
}

export default FaceBookLogo

const styles = StyleSheet.create({})