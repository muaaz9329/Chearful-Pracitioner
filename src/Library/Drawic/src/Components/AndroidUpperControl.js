import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Wp } from '@app/helper/CustomResponsive'
import BrushPreview from '../Icons/BrushPreview'
import BrushBtn from './BrushBtn'
import Slider from '@react-native-community/slider'
import { UpdateOpacity, UpdateStrokeWidth } from '../../utils/features/Brush-Control/BrushControl'
import { Mulish } from '@app/helper/FontWeight'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'

const AndroidUpperControl = () => {
    const { Opacity,
        Color,
        strokeWidth} = useSelector((state)=> state.BrushControl)


    const Dispatch = useDispatch()
  return (
    <View style={styles.Container}>
        <View style={styles.BrushPreview}>

       
       <BrushPreview color={Color} width={Wp(80)} height={Wp(80)} Opacity={Opacity} StrokeWidth={strokeWidth} />
       </View>

       <View>
       <View style={styles.StrokeWidthControl} >
        <Text style={styles.StrokeColor} >Stroke Width</Text>
        <Slider
          minimumValue={1}
          maximumValue={100}
          value={strokeWidth}
          onValueChange={(value) => Dispatch(UpdateStrokeWidth(value))}
          style={{ marginTop: Wp(10) }}
        />
      </View>
      <View style={styles.StrokeWidthControl} >
        <Text style={styles.StrokeColor} >Opacity</Text>
        <Slider
          minimumValue={0.1}
          maximumValue={1}
          value={Opacity}
          onValueChange={(value) => Dispatch(UpdateOpacity(value))}
          style={{ marginTop: Wp(10) }}
        />
      </View>
       </View>
    </View>
  )
}

export default AndroidUpperControl

const styles = StyleSheet.create({
    Container:{
        paddingVertical:Wp(10),
        paddingHorizontal:Wp(16)
    },
    BrushPreview:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:Wp(10),
    },
    StrokeColor: {
        fontSize: Wp(20),
        fontFamily: Mulish(700),
        color: NoteAppcolor.Primary,
        textAlign: "center",
      },
      StrokeWidthControl: {
        marginTop: Wp(10),
      },
})
