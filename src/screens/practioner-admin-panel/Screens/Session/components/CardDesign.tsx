import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
} from "react-native";
import React, { useContext, useState } from "react";
import { FontSize, Wp } from "@helper/CustomResponsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Dot } from "@svg";
import { Mulish, Nunito } from "@helper/FontWeight";
import { Plus, Eye } from "@svg";
import { UserSessionNotesParamObj } from "@app/adapters/User_Session_Notes_Pram_object";
import TypeOfNote from "@app/common/Models/TypeOfNote";
import {
  DateConstrctor,
  capitalizeFirstLetter,
} from "@app/helper/customFunction";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
import { NavigationHelpers } from "@react-navigation/native";
import { SessionData } from "@app/types/Modules/Session";
interface Props {
  Data: SessionData;
  navigation: NavigationHelpers<any, any>;
}
export default function CardDesign({ Data, navigation }: Props) {
  const [model, setmodel] = useState(false);

  const { deviceType } = useContext(DeviceContext);
  return (
    <View
      style={[
        styles.cardCont,
        deviceType === "tablet" && styles.cardCont_Tablet,
      ]}
    >
      <TypeOfNote
        visible={model}
        setVisible={setmodel}
        data={new UserSessionNotesParamObj(Data)}
        // data={{}}
        navigation={navigation}
        routeLoc={"Prac_Session"}
      />

      <View
        style={[
          styles.CardContet,
          deviceType === "tablet" && styles.cardContent_tablet,
        ]}
      >
        <View>
          <Image
            source={{ uri: Data.client_image }}
            style={[
              styles.ClientImage,
              deviceType === "tablet" && styles.ClientImage_tablet,
            ]}
          />
        </View>
        <View>
          <Text
            style={[
              styles.Name,
              deviceType === "tablet" && {
                fontSize: FontSize(8),
              },
            ]}
          >
            {deviceType === "mobile"
              ? String(Data.client_full_name).length > 14
                ? String(Data.client_full_name).slice(0, 14) + ".."
                : String(Data.client_full_name)
              : String(Data.client_full_name).length > 20
              ? String(Data.client_full_name).slice(0, 20) + ".."
              : String(Data.client_full_name)}
          </Text>
          <View
            style={[
              styles.LastVisitCont,
              deviceType === "tablet" && styles.LastVisitCont_tablet,
            ]}
          >
            <Text
              style={[
                styles.LastVisitText,
                deviceType === "tablet" && {
                  fontSize: FontSize(6),
                },
              ]}
            >
              {Data.appointment_date}
            </Text>
            <View
              style={[
                styles.DotMargin,
                deviceType === "tablet" && {
                  marginHorizontal: Wp(3),
                },
              ]}
            >
              <Dot
                width={deviceType === "mobile" ? Wp(4) : Wp(2)}
                height={deviceType === "mobile" ? Wp(4) : Wp(2)}
                color={NoteAppcolor.Primary}
              />
            </View>
            <Text
              style={[
                styles.LastVisitText,
                deviceType === "tablet" && {
                  fontSize: FontSize(6),
                },
              ]}
            >
              {DateConstrctor(new Date(Data.appointment_date_time)).Time}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.ServiceTaken,
                deviceType === "tablet" && {
                  fontSize: FontSize(6),
                },
              ]}
            >
              {Data.service_name}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.CardsButton}>
        <Pressable
          style={[
            styles.btnDesign,
            deviceType === "tablet" && styles.btnDesign_Tablet,
          ]}
          onPress={() => {
            setmodel(!model);
          }}
        >
          <Plus
            width={deviceType === "mobile" ? Wp(24) : Wp(12)}
            height={deviceType === "mobile" ? Wp(24) : Wp(12)}
            color={NoteAppcolor.Primary}
          />
        </Pressable>
        <Pressable
          style={[
            styles.btnDesign,
            deviceType === "tablet" && styles.btnDesign_Tablet,
          ]}
          onPress={() => {
            navigation.navigate("Prac_NotesPreview", {
              ClientData: new UserSessionNotesParamObj(Data),
              routeLoc: "Prac_Session",
            });
          }}
        >
          <Eye
            width={deviceType === "mobile" ? Wp(24) : Wp(12)}
            height={deviceType === "mobile" ? Wp(24) : Wp(12)}
            color={NoteAppcolor.Primary}
          />
        </Pressable>
      </View>
    </View>
  );
}

// export default CardDesign;

const styles = StyleSheet.create({
  btnDesign_Tablet: {
    paddingHorizontal: Wp(5),
    paddingVertical: Wp(4),
    borderRadius: Wp(6),
    alignSelf: "flex-start",
  },
  LastVisitCont_tablet: {
    marginVertical: Wp(2),
    justifyContent: "flex-start",
  },
  ClientImage_tablet: {
    width: Wp(38),
    height: Wp(38),
    borderRadius: Wp(19),
    resizeMode: "cover",
    marginEnd: Wp(5),
  },
  cardContent_tablet: {
    width: wp(38),
    paddingHorizontal: Wp(8),
    paddingVertical: Wp(5),
    borderRadius: Wp(15),
  },
  cardCont_Tablet: {
    width: wp(48),
    marginBottom: Wp(10),
  },
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
