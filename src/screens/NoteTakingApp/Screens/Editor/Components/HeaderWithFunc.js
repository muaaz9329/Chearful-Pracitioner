import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { DateConstrctor } from "@app/helper/customFunction";
import { UpdateHasDrawn } from "@app/Library/Drawic/utils/features/Brush-Control/BrushControl";
import HeaderInfo from "./HeaderInfo";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
const HeaderWithFunc = ({
  navigation,
  mode,
  data, // this Consist  of the client id and Session id
  NoteId,
  ComingFor,
  TypeOfNote,
  Content,
  GetPointFunc,
  File,
  IntialContent,
  CanvasFunc,
  LoadingRef,
  routeLoc,
}) => {
  const { hasSaved } = useSelector((state) => state.BrushControl);
  const { deviceType } = useContext(DeviceContext);

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
        routeLoc={routeLoc}
      />
      <Pressable
        style={styles.Listbtn}
        onPress={() => {
          let temp = CanvasFunc.GetPoints();
          if (
            IntialContent.current.length !== temp.length &&
            hasSaved == false
          ) {
            // Checks if the user has Edit or Drawn anythings
            setModel(!model); // Show the Model
          } else {
            navigation.goBack();
          }
        }}
      >
        <ChevronLeft
          width={deviceType === "mobile" ? Wp(24) : Wp(16)}
          height={deviceType === "mobile" ? Wp(24) : Wp(18)}
          color={NoteAppcolor.btnColor}
        />
      </Pressable>
      <HeaderInfo data={data} LoadingRef={LoadingRef} />

      {mode === "edit" && (
        <Pressable
          style={[styles.Listbtn]}
          onPress={() => {
            GetPointFunc();
            setmodel2(!model2);
          }}
        >
          <SaveBtn
            width={deviceType === "mobile" ? Wp(24) : Wp(16)}
            height={deviceType === "mobile" ? Wp(24) : Wp(18)}
            color={NoteAppcolor.Primary}
          />
        </Pressable>
      )}

      {mode === "view" && (
        <Pressable style={[styles.Listbtn, { backgroundColor: null }]}>
          <SaveBtn
            width={deviceType === "mobile" ? Wp(24) : Wp(16)}
            height={deviceType === "mobile" ? Wp(24) : Wp(18)}
            color={null}
          />
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
