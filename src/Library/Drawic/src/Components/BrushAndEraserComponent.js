import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import {useNonInitialEffect} from "@hooks/useNonIntialEffect"
import { Wp } from '@app/helper/CustomResponsive'

import { useSelector , useDispatch } from 'react-redux'
import { UPDATE_BoxOpacity, UPDATE_CanBeTouched, UPDATE_EraserState } from '../../utils/features/ChooseEraser/ChooseEraser'



const BrushAndEraserComponent = ({CanvasRef}) => {

    const [Brush , setBrush] = React.useState(true)
    const [Eraser , setEraser] = React.useState(false)




    const ChangeType = () =>{
        if(Brush === true){
            setBrush(false)
            setEraser(true)
        }
        else{
            setBrush(true)
            setEraser(false)
        }
    }

    const dispatch = useDispatch()
    const { EraserSelected} = useSelector(state => state.ChooseEraser)
  



    const UpdatePanelState = (bool)=>{
      if(bool){
        dispatch(UPDATE_EraserState(true))
        dispatch(UPDATE_BoxOpacity(0.3));
        dispatch(UPDATE_CanBeTouched(false))
        CanvasRef.current.toggleEraser()
        
       } else{
        dispatch(UPDATE_EraserState(false))
        dispatch(UPDATE_BoxOpacity(1));
        dispatch(UPDATE_CanBeTouched(true))
        CanvasRef.current.toggleBrush()
      }
    
    }



useNonInitialEffect(()=>{
  if(Brush==false){
    UpdatePanelState(true)

  }
  else{
    UpdatePanelState(false)
  }
},[Brush])





  return (
    <TouchableOpacity style={styles.Cont} onPress={ChangeType}>
  {Brush &&  <Image source={require('../Icons/Brush.png')} style={{width:Wp(30),height:Wp(30)}} />}
    {Eraser && <Image source={require('../Icons/Eraser.png')} style={{width:Wp(30),height:Wp(30)}} />}
    </TouchableOpacity>
  )
}

export default BrushAndEraserComponent

const styles = StyleSheet.create({
    Cont:{
        borderWidth:1,
        width:Wp(40),
        height:Wp(40),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Wp(35),
        marginLeft:Wp(12)
    }
})