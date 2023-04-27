import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconCheck, IconPointFilled, IconTrash } from 'tabler-icons-react-native'
import { Wp } from '@app/helper/CustomResponsive'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'
import { Mulish, Nunito } from '@app/helper/FontWeight'
import { useState } from 'react'
import { Divider } from 'react-native-paper'

const NotifCard = ({data}) => {

    const UnReadDesign = {
        state:false,
        color:NoteAppcolor.OffWhiteCont,
        

    }
    const ReadDesign = {
        state:true,
        color:NoteAppcolor.White,
    }

    const [read,setRead] = useState(data.Read ? ReadDesign : UnReadDesign)
    const HandleRead = () => {
        setRead(ReadDesign)
    }
  return (
    <>
    <View style={[styles.container,{backgroundColor:read.color}]}>

        <View style={styles.HeadText} >
        <Text style={styles.HeadTextStyles} >{data.title}</Text>
        </View>
        <View style={styles.ContentCont} > 

       
      <View style={styles.TextCont}>
        <Text style={styles.Text}>{data.text}</Text>
      </View>
      <View style={styles.TimeAndDate} >
        <Text style={styles.Time}>12:00 PM</Text>
        <View style={styles.Dot} >
        <IconPointFilled size={Wp(10)} fill={NoteAppcolor.Primary} color={NoteAppcolor.Primary} />
        </View>
        
        <Text style={styles.Date}>12/12/2020</Text>
      </View>
       <View style={[styles.btnCont,{justifyContent:(read.state) ? 'flex-end':'flex-start'}]} >
       {!(read.state) && <Pressable style={[styles.btn,styles.read]} onPress={()=>HandleRead()}>
            <IconCheck size={Wp(20)} color={NoteAppcolor.White} />
        </Pressable>}
        <Pressable style={[styles.btn,styles.delete]}>
            <IconTrash size={Wp(20)} color="#fff" />
        </Pressable>
      </View>
      </View>
    </View>
    { (read.state) && <Divider style={{marginVertical:Wp(8)}} bold  />}
    </>
  )
}

export default NotifCard

const styles = StyleSheet.create({
    container:{
        padding:Wp(16),
        borderRadius:Wp(15),
    },
    TextCont:{
        marginBottom:Wp(8),
        marginLeft:Wp(10),

    },
    Text:{
        fontSize:Wp(14),
        fontFamily:Nunito(700),
        color:NoteAppcolor.Primary

    },
    TimeAndDate:{
        flexDirection:"row",
        
        alignItems:"center",
        marginBottom:Wp(8),

    },
    Time:{
        fontSize:Wp(14),
        fontFamily:Nunito(400),
        color:NoteAppcolor.Primary

    },
    Date:{
        fontSize:Wp(14),
        fontFamily:Nunito(400),
        color:NoteAppcolor.Primary
    },
    btnCont:{
        flexDirection:"row",
        
        alignItems:"center",

    },
    btn:{
        width:Wp(40),
        height:Wp(40),
        borderRadius:Wp(10),
        justifyContent:"center",
        alignItems:"center",
    },
    read:{
        backgroundColor:NoteAppcolor.Primary,
        marginRight:Wp(16)

    },
    delete:{
        backgroundColor:"#FF8383"

    },
    Dot:{
        marginHorizontal:Wp(8)
    },
    HeadTextStyles:{
        fontFamily:Nunito(700),
        fontSize:Wp(16),
        color:NoteAppcolor.Primary,

    },
    ContentCont:{
        
    }
})