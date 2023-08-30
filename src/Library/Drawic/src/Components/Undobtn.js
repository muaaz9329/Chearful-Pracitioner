import { StyleSheet, Text, View , Pressable } from 'react-native'
import React from 'react'
import Undo from '../Icons/Undo'
import { Wp } from '@app/helper/CustomResponsive'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'
const Undobtn = ({CanvasRef,deviceType}) => {
  
  const  handleFunction = () => {
    CanvasRef.current.Undo_Last_Stroke();
  }
  return (
    <Pressable onPress={handleFunction}>
        <Undo height={deviceType==='mobile'?Wp(35):Wp(22)} width={deviceType==='mobile'?Wp(35):Wp(22)} color={NoteAppcolor.MenuText} />
    </Pressable>
  )
}

export default Undobtn

const styles = StyleSheet.create({})