import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NoteAppcolor } from '@constants/NoteAppcolor'
import { Wp } from '@helper/CustomResponsive'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Mulish} from '@helper/FontWeight'
import { useState } from 'react'
import { useRef } from 'react'

const AddDiaryForm = () => {
    const [textLength,setTextLength] = useState(0)
    const ContentFocusRef = useRef(null)

    const [title,setTitle] = useState("")
    const HandleText = (e) => {{
        if(e.nativeEvent.text.length <= 50){
            setTextLength(e.nativeEvent.text.length)
            setTitle(e.nativeEvent.text)
        }
    }}


  return (
    <View style={styles.body}>
      <View style={styles.FormCont} >
        <View style={styles.formTitleCont} >
            <View style={styles.LengthCount} >
                <Text style={styles.LengthCountText} >{`${textLength}/50`}</Text>
            </View>
            <TextInput style={styles.formTitle} placeholder="Title" onChange={HandleText} value={title} />
        </View>
        <View style={styles.formContentCont}  onTouchStart={()=>{
            ContentFocusRef.current.focus()
        }}  >
            <TextInput style={styles.formContent} placeholder="Description" multiline ref={ContentFocusRef} />

        </View>
      </View>
    </View>
  )
}

export default AddDiaryForm

const styles = StyleSheet.create({
    
    FormCont:{
        justifyContent:"center",
        alignItems:"center",
        
    },
    formTitleCont:{
        
        width:wp(80),
        backgroundColor:NoteAppcolor.BtnCont,
        borderRadius:Wp(12),
        paddingHorizontal: Platform.OS=='android'?  Wp(10):Wp(15),
        paddingVertical: Platform.OS =='android'? Wp(2):Wp(13),
        marginVertical:Wp(20),
        position:"relative"
    },
    formTitle:{
        fontSize:Wp(16),
        fontFamily:Mulish(700),
        color:NoteAppcolor.Primary
    },
    formContentCont:{
        width:wp(80),
        height:wp(70),
        backgroundColor:NoteAppcolor.BtnCont,
        borderRadius:Wp(12),
        paddingHorizontal: Platform.OS=='android'?  Wp(10):Wp(15),
        paddingVertical: Platform.OS =='android'? Wp(2):Wp(6),
        
        
    },
    formContent:{
        fontSize:Wp(16),
        fontFamily:Mulish(400),
        color:NoteAppcolor.Primary
    },
    LengthCount:{
        position:"absolute",
        right:Wp(15),
        top:Wp(-10),
        backgroundColor:NoteAppcolor.Primary,
        width:Wp(40),
        height:Wp(25),
        borderRadius:Wp(6),
        justifyContent:"center",
        alignItems:"center"

    },
    LengthCountText:{
        fontSize:Wp(13),
        color:NoteAppcolor.White,
    }
})