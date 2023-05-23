import { Pressable, StyleSheet, View , Text} from 'react-native'
import React, { useEffect } from 'react'
import Header from './Header'
import PractitionerNotes from '@app/screens/NoteTakingApp/Data/PractitionerNotes'
import { SafeAreaView } from 'react-native-safe-area-context'
import Drawic from '@Library/Drawic/Drawic'
import { IconPencil, IconTrash } from 'tabler-icons-react-native'
import { Wp } from '@app/helper/CustomResponsive'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'
import DeleteModel from '@app/common/Models/DeleteModel'
import { useState, useRef } from 'react'
import { RefFunctions } from '@helper/CanvasFunction'
const DrawingEditor = ({navigation , route}) => {
  const { mode, content,ClientData } = route.params;
  const [Mode, setMode] =useState(mode);
  const [model, setModel] = useState(false);
  const DrawicRef = useRef()
  const CanvasFunc = new RefFunctions(DrawicRef); // Consists of all the Required Function to work with the Drawic Component 
  return (
    <SafeAreaView edges={['top']} style={styles.Continer} >
      <Header data={PractitionerNotes[0]} mode={Mode} navigation={navigation} />
      <DeleteModel navigation={navigation} visible={model} setVisible={setModel} />
        
        
      <Drawic view={Mode} CanvasRef={DrawicRef}/>
      {Mode === "view" && (
        <View style={styles.editBar}>
          <Pressable
            style={[styles.Btn, { backgroundColor: "#FF8383" }]}
            onPress={() => {
              setModel(!model);
            }}
          >
            <IconTrash size={Wp(30)} color={"white"} />
          </Pressable>
          <Pressable
            style={[styles.Btn]}
            onPress={() => {
              setMode("edit");
            }}
          >
            <IconPencil size={Wp(30)} color={NoteAppcolor.Primary} />
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  )
}

export default DrawingEditor

const styles = StyleSheet.create({
  Continer: {
    flex: 1,
    backgroundColor: '#fff'

  },
  Btn: {
    paddingVertical: Wp(12),
    paddingHorizontal: Wp(12),
    backgroundColor: NoteAppcolor.Secondary,
    borderRadius: Wp(10),
  },
  editBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    paddingHorizontal: Wp(16),
    bottom: 0,
    marginBottom: Wp(15),
  },
})