import { StyleSheet, Text, View , Pressable } from 'react-native'
import React, { useEffect } from 'react'
import BrushPreview from '../Icons/BrushPreview.jsx'
import { useDispatch , useSelector } from 'react-redux'
import { Wp } from '@app/helper/CustomResponsive.js'
const BrushBtn = ({CanvesRef , OpenControlFunc , deviceType}) => {
  const  {strokeWidth , Opacity, Color} = useSelector((state)=> state.BrushControl)
  const {BoxOpacity , CanBeTouched } = useSelector((state)=> state.ChooseEraser)
  const ChangeCanvasBrushState = ()=>{
    CanvesRef.current.HandelStrokeWidth(strokeWidth);
    CanvesRef.current.HandleOpacity(Opacity);
  }

  useEffect(()=>{
    ChangeCanvasBrushState()
  },[strokeWidth , Opacity ])

  return (
    <Pressable onPress={OpenControlFunc} style={{opacity:BoxOpacity}} disabled={!(CanBeTouched)}  >
      <BrushPreview color={Color} width={deviceType==='mobile'?Wp(48):Wp(28)} height={deviceType==='mobile'?Wp(48):Wp(28)} Opacity={Opacity} StrokeWidth={strokeWidth} />
    </Pressable>
  )
}

export default BrushBtn

const styles = StyleSheet.create({})