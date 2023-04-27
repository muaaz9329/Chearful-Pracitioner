import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Header from "@app/common/components/Header";
import { ChevronLeft } from "@app/svgs/Index";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import { Mulish } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";

import NotifCard from "./Components/NotifCard";

const AlertScreen = ({Alerts, navigation}) => {
  return (
    <View style={{flex:1 , backgroundColor:"#fff"}}>
    <View style={styles.body}>
      <Header Icon={ChevronLeft} navigation={navigation} pram={'back'}  >
        <Text style={styles.HeaderTitle}>Notifications</Text>
      </Header>
     
    </View>
     <FlatList
     style={{backgroundColor:"#fff"}}
     data={Alerts}
     keyExtractor={(item,index) => index}
     renderItem={({ item }) => (
         <NotifCard data={item} />
     )}
   
   />
   </View>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({
    body: {
        
        backgroundColor: "#fff",
        paddingVertical: Wp(20),
        paddingHorizontal:Wp(16)
    },
    HeaderTitle: {
        fontFamily: Mulish(700),
    color: NoteAppcolor.Primary,
    fontSize: FontSize(24),
    }
});
