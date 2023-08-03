import { StyleSheet, Text, View , Pressable } from 'react-native'
import React from 'react'
import Undo from '../Icons/Undo'
import { Wp } from '@app/helper/CustomResponsive'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'
const Undobtn = ({CanvasRef}) => {
  const  handleFunction = () => {
    CanvasRef.current.Undo_Last_Stroke();
  }
  return (
    <Pressable onPress={handleFunction}>
        <Undo height={Wp(35)} width={Wp(35)} color={NoteAppcolor.MenuText} />
    </Pressable>
  )
}

export default Undobtn

const styles = StyleSheet.create({})