import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DocIcon } from "@app/screens/NoteTakingApp/Images/Doc-Icons";
import { Wp } from '@app/helper/CustomResponsive';
import { Mulish } from '@app/helper/FontWeight';
import Header from './Components/Header';
import DocumentPicker from 'react-native-document-picker';

const PdfUpload = ({ route, navigation }) => {
  const { mode, content, ClientData, NoteId, ComingFor, TypeOfNote } =
    route.params;

    const [singleFile, setSingleFile] = React.useState(null);

    const selectOneFile = async () => {
      //Opening Document Picker for selection of one file
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
        });
        //Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        //Setting the state to show single file attributes
        setSingleFile(res);
      } catch (err) {
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
        <Pressable style={styles.ImgIcon} onPress={selectOneFile}>
          <Image source={DocIcon.pdf} style={styles.Icon} /> 
          <Text style={styles.UploadText} >Tap to effortlessly upload PDF documents, simplifying the process of sharing and managing your files.</Text>
        </Pressable>

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