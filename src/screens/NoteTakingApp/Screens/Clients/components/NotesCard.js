import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import React, { useContext } from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontSize, Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { Mulish, Nunito } from "@helper/FontWeight";
import User_Session_Notes_Editor_Pram_object from "@app/adapters/User_Session_Notes_Editor_Pram_object";
import { DateConstrctor } from "@app/helper/customFunction";
import { IconClockHour3 } from "tabler-icons-react-native";
import { ClockIcon } from "@app/svgs/Index";
import FileIconGenrator from "@app/screens/NoteTakingApp/Screens/Session/components/FileIconGenrator";
import { NotesCardAdapterFunction } from "./adapters/NotesCardAdapter";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";

const NotesCard = ({ Arr, navigation, ClientData }) => {
  const VIEW_MODE = "view";
  const EDIT_MODE = "edit";
  const {deviceType} = useContext(DeviceContext)

  const HandleNavigation = (item) => {
    const Pram = new User_Session_Notes_Editor_Pram_object(
      NotesCardAdapterFunction(item),
      item,
      item.Apptype,
      VIEW_MODE
    );

    switch (item.Apptype) {
      case "text":
        navigation.push("Prac_NotesEditor", Pram);
        break;
      case "img":
        navigation.push("Prac_ImageViewer", Pram);
        break;
      case "canvas":
        navigation.push("Prac_WrittenEditor", Pram);
        break;
      case "pdf":
        navigation.push("Prac_PDFEditor", Pram);
        break;
      case "docx":
        navigation.push("Prac_DocsEditor", Pram);
    }
  };

  

  return (
    <View
    style={[styles.Parent, deviceType === "tablet" && styles.Parent_tablet]}
  >
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
                deviceType === "tablet" && {
                  width: Wp(32),
                  height: Wp(32),

                  borderRadius: Wp(3),
                },
              ]}
            >
              <Image
                source={FileIconGenrator(item.Apptype)}
                style={[
                  styles.DocIconSize,
                  deviceType === "tablet" && {
                    width: Wp(19),
                    height: Wp(24),
                  },
                ]}
              />
            </View>
            <View
              style={[
                styles.Content,
                deviceType === "tablet" && {
                  width: Wp(140),
                  paddingVertical: Wp(4),
                  justifyContent: "space-between",
                  paddingHorizontal: Wp(1),
                  
                },
              ]}
            >
              <View style={styles.TopText}>
                <Text style={[styles.Date,deviceType==='tablet'&&{
                  fontSize:Wp(8)
                }]}>
                  {DateConstrctor(new Date(item.created_at)).Date}
                </Text>
                {!(item.created_at === item.updated_at) && (
                  <View style={styles.TimeCont}>
                    <View style={styles.iconCont}>
                      <ClockIcon
                        color={"#90A3A7"}
                        width={deviceType==='mobile'?Wp(15):Wp(7)}
                        height={deviceType==='mobile'?Wp(15):Wp(7)}
                      />
                    </View>
                    <View style={[styles.IconText, deviceType==='tablet'&&{
                       width: Wp(33)
                    }]}>
                      <Text style={[styles.Time,deviceType==='tablet'&&{
                        fontSize:Wp(7)
                      }]}>
                        {DateConstrctor(new Date(item.created_at)).Time}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
              <View style={styles.BottomCont}>
                <Text style={[styles.Time,deviceType==='tablet'&&{
                  fontSize:Wp(8)
                }]}>
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
  IconText: {
    marginHorizontal: Wp(3),
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
