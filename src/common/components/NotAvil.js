import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppImages } from '../Images/index'
import { Wp } from '@app/helper/CustomResponsive'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'
import { Mulish } from '@app/helper/FontWeight'

const NotAvil = ({Title,Content}) => {
  return (
    <View style={styles.Cont}>
        <View style={styles.cont2}>

       
      <Image
      style={styles.ImgCont}
      source={AppImages.NotAvail}
      />
      <Text style={styles.Title} >{Title}</Text>
        <Text style={styles.Content} >{Content}</Text>
        </View>
    </View>
  )
}

export default NotAvil

const styles = StyleSheet.create({
    Cont:{

        flex:0.5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    ImgCont:{
        width:Wp(200),
        height:Wp(200)
    },
    Title:{
        fontSize:Wp(20),
        fontWeight:'bold',
        textAlign:'center',
        marginTop:Wp(20),
        color:NoteAppcolor.Primary,
        fontFamily:Mulish(800)
    },
    cont2:{
        alignItems:'center',
    },
    Content:{
        fontSize:Wp(15),
        fontWeight:'bold',
        textAlign:'center', 
        color:NoteAppcolor.Primary,
        fontFamily:Mulish(700),
        opacity:0.7,
    }
})