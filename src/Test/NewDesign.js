import { StyleSheet, Text, TextInput, View , Keyboard} from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const NewDesign = () => {
  return (
    <>
    <Button icon="camera" mode="contained" onPress={Keyboard.dismiss} style={{marginTop:100}} />
   <TextInput
   placeholder='Enter your name'
   
   />
   </>

  )
}

export default NewDesign

const styles = StyleSheet.create({})