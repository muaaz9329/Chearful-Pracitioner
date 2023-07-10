import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DocIcon } from "@app/screens/NoteTakingApp/Images/Doc-Icons";
import { Wp } from '@app/helper/CustomResponsive';
import { Mulish } from '@app/helper/FontWeight';
import Header from './Components/Header';
import DocumentPicker from 'react-native-document-picker';
import LoadingScreen from '@app/common/Module/Loading-Screen/LoadingScreen';
const DocxUpload = ({ route, navigation }) => {
  const { mode, content, ClientData, NoteId, ComingFor, TypeOfNote } =
    route.params;
  const LoadingRef = useRef();
    const [singleFile, setSingleFile] =useState(null);
    const UploadDocs = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.docx],
        });
        //Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        //Setting the state to show single file attributes
        setSingleFile(res);
      }
      catch (err) {
        setSingleFile(null);
        //Handling any exception (If any)
        if (DocumentPicker.isCancel(err)) {
          //If user canceled the document selection
          alert('Canceled from single doc picker');
        } else {
          //For Unknown Error
          alert('Unknown Error: ' + JSON.stringify(err));
          throw err;
        }
      }
    }
  return (
   <SafeAreaView style={styles.Container}>
        <LoadingScreen type={'loader'} ref={LoadingRef}/>
     <Header
          navigation={navigation}
          mode={mode}
          data={ClientData}
          NoteId={NoteId}
          ComingFor={ComingFor}
          TypeOfNote={TypeOfNote}
          Content={content}
          LoadingRef={LoadingRef}
        />
      <Pressable style={styles.Cont} onPress={UploadDocs} >
        <View style={styles.ImgIcon}>
          <Image source={DocIcon.docx} style={styles.Icon} /> 
          <Text style={styles.UploadText} >Tap to effortlessly upload Docx documents, simplifying the process of sharing and managing your files.</Text>
        </View>

      </Pressable>
   </SafeAreaView>
  )
}

export default DocxUpload

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