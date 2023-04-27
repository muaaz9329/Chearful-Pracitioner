import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { FontSize, Wp } from "../../../../../helper/CustomResponsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NoteAppcolor } from "../../../constants/NoteAppcolor";
import { Dot } from "../../../../../svgs/Index";
import { Mulish, Nunito } from "../../../../../helper/FontWeight";
import { Plus, Eye } from "../../../../../svgs/Index";
import NotesType from "../../Models/NotesType";
import { DateConstrctor } from "../../../../../helper/customFunction";
const CardDesign = ({ Data, navigation }) => {
  const [model, setmodel] = useState(false);
  return (
    <View style={styles.cardCont}>
      <NotesType
        visible={model}
        setVisible={setmodel}
        data={Data}
        navigation={navigation}
      />

      <View style={styles.CardContet}>
        <View style={styles.Cont1}>
          <Image source={Data.Picture} style={styles.ClientImage} />
        </View>
        <View style={styles.CardTextCont}>
          <Text style={styles.Name}>
            {Data.Name.length > 14 ? Data.Name.slice(0, 14) + ".." : Data.Name}
          </Text>
          <View style={styles.LastVisitCont}>
            <Text style={styles.LastVisitText}>{DateConstrctor(new Date(Data.LastVisitDate)).Date}</Text>
            <View style={styles.DotMargin}>
              <Dot width={Wp(4)} height={Wp(4)} color={NoteAppcolor.Primary} />
            </View>
            <Text style={styles.LastVisitText}>{DateConstrctor(new Date(Data.LastVisitDate)).Time}</Text>
          </View>
          <View>
            <Text style={styles.ServiceTaken}>{Data.Service}</Text>
          </View>
        </View>
      </View>
      <View style={styles.CardsButton}>
        <Pressable
          style={styles.btnDesign}
          onPress={() => {
            setmodel(!model);
          }}
        >
          <Plus width={Wp(24)} height={Wp(24)} color={NoteAppcolor.Primary} />
        </Pressable>
        <Pressable
          style={styles.btnDesign}
          onPress={() => {
            navigation.push("NotesPreview",{ClientData:Data});
          }}
        >
          <Eye width={Wp(24)} height={Wp(24)} color={NoteAppcolor.Primary} />
        </Pressable>
      </View>
    </View>
  );
};

export default CardDesign;

const styles = StyleSheet.create({
  cardCont: {
    flexDirection: "row",
    width: wp(91.0),
    justifyContent: "space-between",
    marginBottom: Wp(20),
  },
  CardContet: {
    width: wp(75),

    paddingHorizontal: Wp(16),
    paddingVertical: Wp(10),
    borderRadius: Wp(30),
    backgroundColor: NoteAppcolor.Secondary,
    flexDirection: "row",
    alignItems: "center",

  },
  ClientImage: {
    width: Wp(76),
    height: Wp(76),
    borderRadius: Wp(38),
    resizeMode: "contain",
    marginEnd: Wp(10),
  },
  LastVisitCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: Wp(5),
  },
  Name: {
    fontFamily: Nunito(700),
    color: NoteAppcolor.Primary,
    fontSize: FontSize(16),
  },
  LastVisitText: {
    fontFamily: Mulish(600),
    fontSize: FontSize(12),
    color: NoteAppcolor.Primary,
    opacity: 0.7,
  },
  ServiceTaken: {
    fontFamily: Mulish(600),
    fontSize: FontSize(12),
    color: NoteAppcolor.Primary,
    opacity: 0.7,
  },
  btnDesign: {
    paddingHorizontal: Wp(10),
    paddingVertical: Wp(8),
    backgroundColor: NoteAppcolor.Secondary,
    borderRadius: Wp(10),

  },
  CardsButton: {
    justifyContent: "space-between",
  },
  DotMargin: {
    marginHorizontal: Wp(5),
  },
});
