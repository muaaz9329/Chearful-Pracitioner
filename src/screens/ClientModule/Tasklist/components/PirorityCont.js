import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Wp } from '@app/helper/CustomResponsive'
import { Mulish } from '@app/helper/FontWeight'

const PirorityCont = ({pirority}) => {
if(pirority.toLocaleLowerCase()==="high"){
    return (
        <View style={[styles.cont,{ backgroundColor:"#FFACAC"}]}>
            <Text style={styles.text}>High</Text>
        </View>
      )
}
else if(pirority.toLocaleLowerCase()==="medium"){
    return (
        <View style={[styles.cont,{ backgroundColor:"#FFD6A5"}]}>
            <Text style={styles.text}>Medium</Text>
        </View>
      )
}
else if(pirority.toLocaleLowerCase()==="low"){
    return (
        <View style={[styles.cont,{ backgroundColor:"#CAFFBF"}]}>
            <Text style={[styles.text,{color:"#539165"}]}>Low</Text>
        </View>
      )
}
}

export default PirorityCont

const styles = StyleSheet.create({
    cont:{
        paddingHorizontal:Wp(10),
        paddingVertical:Wp(5),
       
        alignSelf:'flex-start',
        borderRadius:Wp(7),
    },
    text:{
        fontFamily:Mulish(700),
        color:"white",
        fontSize:Wp(13),
    }
})