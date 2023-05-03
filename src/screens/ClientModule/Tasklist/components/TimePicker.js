import { StyleSheet, Text, View , Pressable } from 'react-native'
import React from 'react'
import { IconClock } from 'tabler-icons-react-native'
import { FontSize, Wp } from '@app/helper/CustomResponsive'
import { NoteAppcolor } from '@app/constants/NoteAppcolor'
import { Mulish } from '@app/helper/FontWeight'
import DatePicker from 'react-native-date-picker'
import { useState } from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen'
const TimePicker = ({label}) => {
  const [date, setDate] = useState(label)
  const [open, setOpen] = useState(false)
  const SetTime=(date)=>{
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    setDate(strTime)
  }
  return (
    <Pressable style={styles.timeCont} onPress={()=>setOpen(true)}>
      <IconClock size={Wp(30)} color={NoteAppcolor.Primary}/>
      <Text style={styles.TextStyle} >
        {date}
      </Text>
      <DatePicker
        modal
        open={open}
        date={new Date()}
        onConfirm={(date) => {
          setOpen(false)
          SetTime(date)
        }}
        mode='time'
        onCancel={() => {
          setOpen(false)
        }}
      />
    </Pressable>
  )
}

export default TimePicker

const styles = StyleSheet.create({
  timeCont:{
    paddingHorizontal:Wp(10),
    paddingVertical:Wp(10),
    backgroundColor:NoteAppcolor.OffWhiteCont,
    alignSelf:'flex-start',
    borderRadius:Wp(10),
    width:widthPercentageToDP(40),
    flexDirection:'row',
    alignItems:'center',
    
    borderColor:NoteAppcolor.MenuText,
    borderWidth:Wp(0.8),
    zIndex:0
  },
  TextStyle:{
    fontSize:FontSize(16),
    color:NoteAppcolor.Primary,
    marginLeft:Wp(10),
    fontFamily:Mulish(400),
    textAlign:'center',
  }
})