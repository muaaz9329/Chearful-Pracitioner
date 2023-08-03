import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Wp } from '@helper/CustomResponsive'
import { HappyFace,OkFace,WorseFaceEmoji } from '@svg'

const EmojiCont = ({feeling='ok' , size='md'}) => {
 if(feeling.toLowerCase() === 'happy'){
    return (
        <HappyFace
        eyelashesColor={"#917524"}
        eyesColor={"#664E27"}
        faceColor={"#FFDD67"}
        mouthColor={"#664E27"}
        height={size ==='md' ? Wp(45):Wp(70)}
        width={size ==='md' ? Wp(45):Wp(70)} 
      />
      )
 }
 else if(feeling.toLowerCase() === 'sad'){
    return (
        <WorseFaceEmoji
        eyelashesColor={"#917524"}
        eyesColor={"#664E27"}
        faceColor={"#FFDD67"}
        mouthColor={"#664E27"}
        height={size ==='md' ? Wp(45):Wp(80)}
        width={size ==='md' ? Wp(45):Wp(80)} />
      )
 }
 else if(feeling.toLowerCase() === 'ok'){
    return (
        <OkFace
        eyelashesColor={"#917524"}
        eyesColor={"#664E27"}
        faceColor={"#FFDD67"}
        mouthColor={"#664E27"}
        height={size ==='md' ? Wp(45):Wp(80)}
        width={size ==='md' ? Wp(45):Wp(80)}  />
      )
 }
}

export default EmojiCont

const styles = StyleSheet.create({})