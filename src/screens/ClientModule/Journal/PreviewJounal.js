import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontSize, Wp } from '@app/helper/CustomResponsive'
import Header from '@CommonComponents/Header'
import { ChevronLeft } from '@app/svgs/Index'
import { IconCalendar } from 'tabler-icons-react-native'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'
import { Mulish, Nunito } from '@app/helper/FontWeight'
import { Contbg, JournalDate, typeOfJournal } from './Components/JournalFunctions'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'

const PreviewJounal = ({navigation,route}) => {
    const data = route.params.JournalData
    const {type,date,content} = data
    console.log(data)
  return (
    <View style={styles.Body}>
      <Header Icon={ChevronLeft} navigation={navigation} pram={"back"} >
      <View style={styles.DateCont} >
        <IconCalendar size={Wp(40)} color={NoteAppcolor.Primary}/>
        <Text style={styles.DateText} >{JournalDate(date)}</Text>
      </View>
      </Header>
      <View style={[styles.ContentCont,{backgroundColor:Contbg(type.toLowerCase())}]} >
        <Text style={styles.Title} >{typeOfJournal(type.toLowerCase())}</Text>
        <Text style={styles.TextCont} >{content}</Text>
        
      </View>
    </View>
  )
}

export default PreviewJounal

const styles = StyleSheet.create({
    Body:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:Wp(16),
        paddingTop:Wp(20)
    },
    DateText:{
        fontFamily:Mulish(700),
        fontSize:FontSize(16),
        color:NoteAppcolor.Primary,
        marginStart:Wp(3)
    },
    DateCont:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    ContentCont:{
        paddingHorizontal:Wp(10),
        paddingVertical:Wp(15),
        marginTop:Wp(20),
        borderRadius:Wp(20),
        position:'relative',
        minHeight:hp(60),
        

    },
    Title:{
        fontFamily:Nunito(800),
        fontSize:FontSize(30),
        color:NoteAppcolor.MenuText,
        marginBottom:Wp(10),
        textAlign:'center'

    },
    TextCont:{
        fontFamily:Mulish(400),
        fontSize:FontSize(20),
        color:NoteAppcolor.MenuText,
        marginTop:Wp(10),
        
    },
    textureBlur:{
        position:'absolute',
        width:wp(100),
        height:wp(13),
        bottom:0,
       
    },
    texture1:{
        height:wp(9),
        width:wp(100),
   
        opacity:0.5,
        

    },
    texture2:{
        height:wp(4),
        width:wp(100),
       
        opacity:1,
       
    },
    JournalCardCont:{
        marginVertical:Wp(15),
    }
})