import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Dot } from "@svg";
import { Mulish, Nunito } from "@helper/FontWeight";
import { Plus, Eye } from "@svg";
import { User_Session_notes_pram_object } from "@app/adapters/User_Session_notes_pram_object";
import TypeOfNote from "@app/common/Models/TypeOfNote";
import { DateConstrctor } from "@app/helper/customFunction";
const CardDesign = ({ Data, navigation }) => {
  const [model, setmodel] = useState(false);
  console.log(Data);
  return (
    <View style={styles.cardCont}>
      <TypeOfNote
        visible={model}
        setVisible={setmodel}
        data={new User_Session_notes_pram_object(Data)}
        navigation={navigation}
        routeLoc={"Prac_Session"}
      />

      <View style={styles.CardContet}>
        <View style={styles.Cont1}>
          <Image
            source={{ uri: Data.client_image }}
            style={styles.ClientImage}
          />
        </View>
        <View style={styles.CardTextCont}>
          <Text style={styles.Name}>
            {String(Data.client_full_name).length > 14
              ? String(Data.client_full_name).slice(0, 14) + ".."
              : String(Data.client_full_name)}
          </Text>
          <View style={styles.LastVisitCont}>
            <Text style={styles.LastVisitText}>{Data.appointment_date}</Text>
            <View style={styles.DotMargin}>
              <Dot width={Wp(4)} height={Wp(4)} color={NoteAppcolor.Primary} />
            </View>
            <Text style={styles.LastVisitText}>
              {DateConstrctor(new Date(Data.appointment_date_time)).Time}
            </Text>
          </View>
          <View>
            <Text style={styles.ServiceTaken}>{Data.service_name}</Text>
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
            navigation.navigate("Prac_NotesPreview", {
              ClientData: new User_Session_notes_pram_object(Data),
              routeLoc: "Prac_Session",
            });
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
    resizeMode: Platform.OS === "ios" ? "center" : "contain",
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
    fontSize: FontSize(14),
  },
  LastVisitText: {
    fontFamily: Mulish(600),
    fontSize: FontSize(11),
    color: NoteAppcolor.Primary,
    opacity: 0.7,
  },
  ServiceTaken: {
    fontFamily: Mulish(600),
    fontSize: FontSize(11),
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
