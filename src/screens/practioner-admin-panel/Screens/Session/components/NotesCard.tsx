import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Nunito } from "@helper/FontWeight";
import User_Session_Notes_Editor_Pram_object from "@app/adapters/User_Session_Notes_Editor_Pram_object";
import { DateConstrctor } from "@app/helper/customFunction";

import { ClockIcon } from "@app/svgs/Index";
import FileIconGenrator from "./FileIconGenrator";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
import { CommonSessionNote, DocTypes } from "@app/types/Modules/Session";
import { NavigationHelpers } from "@react-navigation/native";
import { User_Session_notes_pram_object } from "@app/adapters/User_Session_notes_pram_object";
interface ArrType extends CommonSessionNote {
  Apptype: DocTypes;
}
interface Props {
  Arr: ArrType[];
  navigation: NavigationHelpers<any, any>;
  ClientData: User_Session_notes_pram_object;
}

const NotesCard = ({ Arr, navigation, ClientData }: Props) => {
  const VIEW_MODE = "view";

  const { deviceType } = useContext(DeviceContext);
  console.log("Arr:", Arr);
  const HandleNavigation = (item: ArrType) => {
    const Pram = new User_Session_Notes_Editor_Pram_object(
      ClientData,
      item,
      item.Apptype,
      VIEW_MODE
    );

    switch (item.Apptype) {
      case "text":
        navigation.navigate("Prac_NotesEditor", Pram);
        break;
      case "img":
        navigation.navigate("Prac_ImageViewer", Pram);
        break;
      case "canvas":
        navigation.navigate("Prac_WrittenEditor", Pram);
        break;
      case "pdf":
        navigation.navigate("Prac_PDFEditor", Pram);
        break;
      case "docx":
        navigation.navigate("Prac_DocsEditor", Pram);
    }
  };

  return (
    <View style={[deviceType === "tablet" && styles.Parent_tablet]}>
      {Arr.map((item, index) => {
        return (
          <Pressable
            onPress={() => {
              HandleNavigation(item);
            }}
            key={index}
          >
            <View
              style={[
                styles.cont,
                deviceType === "tablet" && styles.cont_Tablet,
              ]}
            >
              <View
                style={[
                  styles.ImageCont,
                  deviceType === "tablet" && styles.ImageCont_tablet,
                ]}
              >
                <Image
                  source={FileIconGenrator(item.Apptype)}
                  style={[
                    styles.DocIconSize,
                    deviceType === "tablet" && styles.DocIconSize_Tablet
                  ]}
                />
              </View>
              <View
                style={[
                  styles.Content,
                  deviceType === "tablet" && styles.Content_Tablet,
                ]}
              >
                <View style={styles.TopText}>
                  <Text
                    style={[
                      styles.Date,
                      deviceType === "tablet" && styles.Date_Tablet
                    ]}
                  >
                    {DateConstrctor(new Date(item.created_at)).Date}
                  </Text>
                  {!(item.created_at === item.updated_at) && (
                    <View style={styles.TimeCont}>
                      <View>
                        <ClockIcon
                          color={"#90A3A7"}
                          width={deviceType === "mobile" ? Wp(15) : Wp(7)}
                          height={deviceType === "mobile" ? Wp(15) : Wp(7)}
                        />
                      </View>
                      <View
                        style={[
                          styles.IconText,
                          deviceType === "tablet" && {
                            width: Wp(33),
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.Time,
                            deviceType === "tablet" && {
                              fontSize: Wp(8),
                            },
                          ]}
                        >
                          {DateConstrctor(new Date(item.created_at)).Time}
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
                <View>
                  <Text
                    style={[
                      styles.Time,
                      deviceType === "tablet" && {
                        fontSize: Wp(8),
                      },
                    ]}
                  >
                    {`Last Edit ${
                      DateConstrctor(new Date(item.updated_at)).Time
                    }, ${DateConstrctor(new Date(item.updated_at)).Date}`}
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default NotesCard;

const styles = StyleSheet.create({
  Date_Tablet: {
    fontSize: Wp(8),
  },
  DocIconSize_Tablet: {
    width: Wp(19),
    height: Wp(24),
  },
  Content_Tablet: {
    width: Wp(140),
    paddingVertical: Wp(4),
    justifyContent: "space-between",
    paddingHorizontal: Wp(1),
  },
  ImageCont_tablet: {
    width: Wp(32),
    height: Wp(32),
    borderRadius: Wp(3),
  },
  cont: {
    height: Wp(82),
    flexDirection: "row",
    paddingVertical: Wp(8),
    paddingHorizontal: Wp(8),
    backgroundColor: "#F5F5F5",
    borderRadius: Wp(12),
    justifyContent: "space-between",
    marginVertical: Wp(8),
  },
  ImageCont: {
    width: Wp(63),
    height: Wp(65),
    backgroundColor: "white",
    borderRadius: Wp(8),
    alignItems: "center",
    justifyContent: "center",
  },
  TopText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TimeCont: {
    flexDirection: "row",
    alignItems: "center",
  },

  Content: {
    width: Wp(280),
    paddingVertical: Wp(8),
    justifyContent: "space-between",
    paddingHorizontal: Wp(3),
  },
  Date: {
    fontSize: Wp(14),
    fontFamily: Nunito(800),
    color: NoteAppcolor.Primary,
  },
  Time: {
    fontFamily: Nunito(500),
    fontSize: Wp(12),
    color: NoteAppcolor.Primary,
  },
  IconText: {
    width: Wp(65),

    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: Wp(3),
  },
  DocIconSize: {
    width: Wp(38),
    height: Wp(48),
  },
  Parent_tablet: {
    width: wp(48),
    alignSelf: "center",
  },
  cont_Tablet: {
    height: Wp(41),
    paddingVertical: Wp(3),
    paddingHorizontal: Wp(5),
    borderRadius: Wp(8),
    marginVertical: Wp(4),
  },
});
