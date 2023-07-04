import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DocIcon } from "@app/screens/NoteTakingApp/Images/Doc-Icons";
import { Wp } from '@app/helper/CustomResponsive';
import { Mulish } from '@app/helper/FontWeight';
import Header from './Components/Header';

const PdfUpload = ({ route, navigation }) => {
  const { mode, content, ClientData, NoteId, ComingFor, TypeOfNote } =
    route.params;
  return (
   <SafeAreaView style={styles.Container}>
     <Header
          navigation={navigation}
          mode={mode}
          data={ClientData}
          NoteId={NoteId}
          ComingFor={ComingFor}
          TypeOfNote={TypeOfNote}
          Content={content}
        />
      <View style={styles.Cont} >
        <View style={styles.ImgIcon}>
          <Image source={DocIcon.pdf} style={styles.Icon} /> 
          <Text style={styles.UploadText} >Tap to effortlessly upload PDF documents, simplifying the process of sharing and managing your files.</Text>
        </View>

      </View>
   </SafeAreaView>
  )
}

export default PdfUpload

const styles = StyleSheet.create({
  Container:{
    flex:1 , 
    backgroundColor:'#fff',
    
  },
  Icon:{
    width:Wp(180),
    height:Wp(200),
  },
  ImgIcon:{
    width:Wp(180),
    height:Wp(200),
  },
  UploadText:{
    fontSize:Wp(15),
    textAlign:'center',
    marginTop:Wp(10),
    fontFamily:Mulish(500),

  },
  Cont:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:Wp(100),
    flex:1
  }
})