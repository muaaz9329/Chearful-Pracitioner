import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AppImages } from "../Images/index";
import { Wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Mulish } from "@app/helper/FontWeight";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";

type Props = {
  Title?: string;
  Content?: string;
}

const NotAvil = ({ Title, Content }:Props) => {
  const { deviceType } = useContext(DeviceContext);
  return (
    <View style={styles.Cont}>
      <View style={styles.cont2}>
        <Image style={[styles.ImgCont,deviceType==='tablet'&&styles.ImgCont_Tablet]} source={AppImages.NotAvail} />
        <Text style={[styles.Title,deviceType==='tablet'&&{
          fontSize: Wp(10),
          marginTop: Wp(10)
        }]}>{Title}</Text>
        <Text style={[styles.Content,deviceType==='tablet'&&{
          fontSize: Wp(8)
        }]}>{Content}</Text>
      </View>
    </View>
  );
};

export default NotAvil;

const styles = StyleSheet.create({
  ImgCont_Tablet: {
    width: Wp(100),
    height: Wp(100),
  },
  Cont: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ImgCont: {
    width: Wp(200),
    height: Wp(200),
  },
  Title: {
    fontSize: Wp(20),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: Wp(20),
    color: NoteAppcolor.Primary,
    fontFamily: Mulish(800),
  },
  cont2: {
    alignItems: "center",
  },
  Content: {
    fontSize: Wp(15),
    fontWeight: "bold",
    textAlign: "center",
    color: NoteAppcolor.Primary,
    fontFamily: Mulish(700),
    opacity: 0.7,
  },
});
