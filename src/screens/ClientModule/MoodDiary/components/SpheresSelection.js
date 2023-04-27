import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontSize, Hp, Wp } from '@helper/CustomResponsive'
import { NoteAppcolor } from '@constants/NoteAppcolor'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Mulish, Nunito } from '@helper/FontWeight'
import { capitalizeFirstLetter } from '@helper/customFunction'
import { useState } from 'react'

const SpheresSelection = ({setSphere }) => {

  const Spheres = [
    { name: "personal", SelectionColor:{ backgroundColor:"#FFB5B5"} },
    { name: "friend", SelectionColor:{backgroundColor:"#FFE69F"} , },
    { name: "family", SelectionColor:{backgroundColor:"#FFD6A3"} , },
    { name: "work",  SelectionColor:{ backgroundColor:"#D2BFE3"} ,},
    { name: "health",  SelectionColor:{backgroundColor:"#B5E0BA"} ,},
    { name: "finance",  SelectionColor:{backgroundColor:"#B8B7FF"} ,},
    { name: "love",  SelectionColor:{ backgroundColor:"#FFB5B5"} , },
  ];

 const  UnSelectedColor={color:NoteAppcolor.Primary,borderColor:NoteAppcolor.Primary}

 const [design,setDesign]= useState(
  ()=>{
    let NewArrr = []
    for(let i=0 ; i<Spheres.length ; i++){
      NewArrr.push(UnSelectedColor)
    }
    return NewArrr
  }
 )

 const HandleSelection = (name) => { 
    Spheres.map((item,index)=>{
      if(item.name==name){
        if(design[index].color=='white'){
       handleUnselect()   
      }
      else{
        let NewArrr = []
        for(let i=0 ; i<Spheres.length ; i++){
          if(Spheres[i].name == name){
            NewArrr.push({color:"white",borderColor:Spheres[i].SelectionColor.backgroundColor,...Spheres[i].SelectionColor})
            setSphere(name)
          }else{
            NewArrr.push(UnSelectedColor)
          }
        }
        setDesign(NewArrr)
      }
    }
    })
 }

 const handleUnselect = ()=>{
    setSphere(null)
    let NewArrr = []
      for(let i=0 ; i<Spheres.length ; i++){
        NewArrr.push(UnSelectedColor)
      }
      setDesign(NewArrr)
 }


  return (
    <View>
      <Pressable>
        <View style={styles.Cardcont} >
        {
          Spheres.map((item,index)=>{
            return(
              <Pressable key={index} style={[ {paddingHorizontal: Wp(20), paddingVertical:  Hp(10),borderRadius: Wp(40), marginVertical:Hp(3) , borderWidth:2,},design[index]]} onPress={()=>HandleSelection(item.name)}>
              <Text style={[ {fontSize: FontSize(16), fontFamily: Nunito(700),color:design[index].color},]}>
                {capitalizeFirstLetter(item.name)}
              </Text>
            </Pressable>
            )
          })
        }
        </View>
      </Pressable>
    </View>
  )
}

export default SpheresSelection

const styles = StyleSheet.create({
  Header:{
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"flex-start",
    borderWidth:1,
    width:wp(20),
    height:wp(25),
    borderRadius:Wp(10),
  },
  contText:{
    fontFamily:Mulish(600),
    fontSize:Wp(14),
    color:NoteAppcolor.Primary,
  },
  Cardcont:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    alignItems:"center",
  }
})