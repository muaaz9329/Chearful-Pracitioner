import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { ChearfulLogo } from "@svg";

const Header = ({ Icon, children,navigation , pram ,setVisible , visible , RightIcon , ShowRightIcon=false}) => {
  return (
    <View style={styles.HeaderCont}>
      <View style={styles.HeaderIcon}>
        <Pressable style={styles.HeaderIconStyles} onPress={()=>{
          if(pram==="back"){
            navigation.goBack()
          }
          else if(pram==="model"){
            setVisible(!(visible))
          } 
        }} >
          <Icon width={Wp(20)} height={Wp(20)} color={NoteAppcolor.Primary} />
        </Pressable>
      </View>

      <View style={styles.content}>
        {children}
      </View>
        {
          ShowRightIcon == false ? <View style={styles.HeaderIconStyle2}>
          <View style={styles.box} >
            
          </View>
        </View> : RightIcon
        }
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeaderCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  HeaderIconStyles: {
    padding: Wp(16),
    backgroundColor: NoteAppcolor.BtnCont,
    borderRadius:Wp(14)
  },
  HeaderIconStyle2: {
    padding: Wp(14),
  },
  box:{
    width:Wp(20),
    height:Wp(20)
  }
});
