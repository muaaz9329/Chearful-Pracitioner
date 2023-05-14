import { StyleSheet, Text, View ,TouchableOpacity, Platform, Keyboard } from 'react-native'
import React, {forwardRef , useImperativeHandle} from 'react'
import ActionSheet from 'react-native-actions-sheet'
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { FontSize, Wp } from '@app/helper/CustomResponsive'
import { useRef } from 'react'
import { Mulish } from '@app/helper/FontWeight'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'
import AddDiaryForm from '../../MoodDiary/components/AddDiaryForm'
import AddTaskForm from './AddTaskForm'
import KeyboardDismiss from '@app/common/components/KeyboardDismiss'
const AddTask = forwardRef( (props,ref) => {
    const actionSheetRef = useRef(null)
useImperativeHandle(ref, () => ({
    HandleOpen() {
        actionSheetRef.current?.show();
    }
}))

const CloseSheet = () => {
  actionSheetRef.current?.hide();
}
  return (
    <ActionSheet
    ref={actionSheetRef}
      containerStyle={{
        height:Wp(480),
        paddingVertical: Wp(20),
        borderTopRightRadius: Wp(20),
        borderTopLeftRadius: Wp(20),
        backgroundColor:"#fff"
      }}
      
    >
      <KeyboardDismiss>
      <View>

     
      <View style={styles.Heder} >
        <Text style={styles.HeaderTitle}>Add Task</Text>

      </View>
      <View style={styles.form} >
        <AddTaskForm/>
      </View>
      <TouchableOpacity style={styles.AddBtn} onPress={CloseSheet} >
        <Text style={styles.AddBtnText} >Add Task</Text>
        </TouchableOpacity>
        </View>
        </KeyboardDismiss>
       

        
    </ActionSheet>
  )
})

export default AddTask

const styles = StyleSheet.create({
  HeaderTitle:{
    fontFamily:Mulish(700),
    fontSize:FontSize(24),
    color:NoteAppcolor.Primary,
    textAlign:'center'
  },
  Heder:{
    marginBottom:Wp(20)
  },
  AddBtn:{
    backgroundColor:NoteAppcolor.Primary,
    paddingVertical:Wp(10),
    borderRadius:Wp(10),
    marginHorizontal:Wp(20),
    marginTop:Wp(20),
    justifyContent:'center',
    alignItems:'center'
  },
  AddBtnText:{
    fontFamily:Mulish(700),
    fontSize:FontSize(16),
    color:NoteAppcolor.White

  }
})