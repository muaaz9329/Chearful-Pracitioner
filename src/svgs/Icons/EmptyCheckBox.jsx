import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Svg , Path ,G ,Rect ,ClipPath , Defs} from 'react-native-svg'

const EmptyCheckBox = ({width,height,fill,stroke}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10Z" fill={fill} stroke={stroke}/>
</Svg>

  )
}

export default EmptyCheckBox

const styles = StyleSheet.create({})