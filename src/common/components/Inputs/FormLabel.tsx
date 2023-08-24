import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Wp } from '@app/helper/CustomResponsive'
import { Mulish } from '@app/helper/FontWeight'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'
import { DeviceType } from '@app/context/Device-Type/DeviceTypeProvider'

type Props = {
    label:string,
    children:React.ReactNode,
    deviceType?:DeviceType
}

const FormLabel = ({label,children,deviceType='mobile'}: Props) => {
  return (
    <View>
      <Text style={[styles.Label,deviceType==='tablet'&&{
        fontSize: Wp(10),
        marginBottom: Wp(4),
      }]}>{label}</Text>
      <View style={{marginLeft:deviceType ==='mobile'?Wp(10):Wp(6)}}>
        {children}
      </View>
      </View>
  )
}

export default FormLabel

const styles = StyleSheet.create({
    Label: {
        fontSize: Wp(16),
        fontFamily: Mulish(700),
        color: NoteAppcolor.Primary,
        marginBottom: Wp(8),
      },})