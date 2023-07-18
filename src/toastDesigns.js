import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Hp, Wp } from "./helper/CustomResponsive";
import { IconAlertCircle, IconAlertTriangle, IconX } from "tabler-icons-react-native";
import { NoteAppcolor } from "./constants/NoteAppcolor";
import { Mulish } from "./helper/FontWeight";

const toastDesigns = () => {
  return (
    <View
      style={{
        width: wp(95),
        backgroundColor: "tomato",
        marginTop: 100,
        borderRadius: Wp(12),
        paddingVertical: Wp(10),
        paddingHorizontal: Wp(10),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
      
        }}
      >
        <View style={{flexDirection:'row' ,alignItems:'center'}}>
        <View style={{paddingEnd:Wp(10)}}>
            <IconAlertCircle color={'white'} size={Wp(30)} stroke={3} />
          </View>
          <View>
            <Text style={{ color: "white", fontSize: Wp(16) , fontFamily:Mulish(700) }}>Title</Text>
            <Text style={{ color: 'white', fontSize: Wp(12) , fontFamily:Mulish(400) }}>
                Error COde $04
              </Text>
          </View>
        </View>
        <View
          style={{
            padding: Wp(10),
            borderRadius: Wp(12),
            backgroundColor: "#fff",
          }}
        >
          <IconX
            name="x"
            color={NoteAppcolor.Primary}
            size={Wp(20)}
            stroke={3}
          />
        </View>
      </View>
    </View>
  );
};

export default toastDesigns;

const styles = StyleSheet.create({});
