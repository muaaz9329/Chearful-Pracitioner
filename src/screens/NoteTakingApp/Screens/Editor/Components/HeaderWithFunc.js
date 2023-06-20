import {
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
  import { NoteAppcolor } from "@constants/NoteAppcolor";
  import { widthPercentageToDP as wp } from "react-native-responsive-screen";
  import { ChevronLeft, Dot, SaveBtn } from "@svg";
  import {
    moderateScale,
    moderateVerticalScale,
  } from "react-native-size-matters";
  import { Mulish, Nunito } from "@helper/FontWeight";
  import BackStopModel from "@models/BackStopModel";
  import SaveModel from "@models/SaveModel";
  import { useSelector } from "react-redux";
  import { DateConstrctor } from "@app/helper/customFunction";
  const HeaderWithFunc = ({
    navigation,
    mode,
    data,
    NoteId,
    ComingFor,
    TypeOfNote,
    Content,
    GetPointFunc,
    File
  }) => {
    const { SessionInfo } = useSelector((state) => state.SessionNotes);
  
    const [model, setModel] = useState(false);
    const [model2, setmodel2] = useState(false);
    return (
      <View style={styles.header}>
        <BackStopModel
          visible={model}
          setVisible={setModel}
          navigation={navigation}
        />
        <SaveModel
          visible={model2}
          setVisible={setmodel2}
          navigation={navigation}
          ClientData={data}
          ComingFor={ComingFor}
          TypeOfNote={TypeOfNote}
          NoteId={NoteId}
          Content={Content}
          File={File}
        />
        <Pressable
          style={styles.Listbtn}
          onPress={() => {
            setModel(!model);
          }}
        >
          <ChevronLeft
            width={wp(2.5 * 2.4)}
            height={wp(2.5 * 2.4)}
            color={NoteAppcolor.btnColor}
          />
        </Pressable>
        <View>
          <View style={styles.CardContet}>
            <View style={styles.Cont1}>
              <Image
                source={{ uri: data.Client_image }}
                style={styles.ClientImage}
              />
            </View>
            <View style={styles.CardTextCont}>
              <Text style={styles.Name}>{SessionInfo.client_full_name} </Text>
              <View style={styles.LastVisitCont}>
                <Text style={styles.LastVisitText}>{data.appointment.date}</Text>
                <View style={styles.DotMargin}>
                  <Dot
                    width={Wp(4)}
                    height={Wp(4)}
                    color={NoteAppcolor.Primary}
                  />
                </View>
                <Text style={styles.LastVisitText}>{data.appointment.time}</Text>
              </View>
            </View>
          </View>
        </View>
  
        {mode === "edit" && (
          <Pressable
            style={[styles.Listbtn]}
            onPress={() => {
            
                GetPointFunc()
                setmodel2(!model2);
            }}
          >
            <SaveBtn
              width={wp(2.5 * 2.4)}
              height={wp(2.5 * 2.4)}
              color={NoteAppcolor.Primary}
            />
          </Pressable>
        )}
  
        {mode === "view" && (
          <Pressable style={[styles.Listbtn, { backgroundColor: null }]}>
            <SaveBtn width={wp(2.5 * 2.4)} height={wp(2.5 * 2.4)} color={null} />
          </Pressable>
        )}
      </View>
    );
  };
  
  export default HeaderWithFunc;
  
  const styles = StyleSheet.create({
    header: {
      height: Hp(60),
      backgroundColor: NoteAppcolor.Secondary,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: Wp(16),
    },
  
    Listbtn: {
      paddingVertical: moderateVerticalScale(12),
      paddingHorizontal: moderateScale(12),
      backgroundColor: "#ffffff",
      borderRadius: Wp(10),
    },
    ClientImage: {
      width: Wp(43),
      height: Wp(43),
      borderRadius: Wp(25),
      resizeMode: Platform.OS === "ios" ? "center" : "cover",
      marginEnd: Wp(7),
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
      fontSize: FontSize(10),
      color: NoteAppcolor.Primary,
      opacity: 0.7,
    },
    CardContet: {
      flexDirection: "row",
      alignItems: "center",
    },
    DotMargin: {
      marginHorizontal: Wp(5),
    },
  });
  