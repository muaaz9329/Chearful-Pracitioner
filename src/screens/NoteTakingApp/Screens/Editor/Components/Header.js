import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import { ApiServices } from "@app/services/Apiservice";
import { ClientDataObj } from "@app/adapters/ClientDataObj";
import HeaderInfo from "./HeaderInfo";

const Header = ({
  navigation,
  mode,
  data, // this Consist  of the client id and Session id
  NoteId,
  ComingFor,
  TypeOfNote = "",
  Content,
  keyboardDismiss,
  IntailContent,
  LoadingRef,
  routeLoc,
}) => {
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
        IntailContent={IntailContent} // passing so if the content changes and get saved then the back button will work as normal without showing the model
        routeLoc={routeLoc}
      />

      <Pressable
        style={styles.Listbtn}
        onPress={() => {
          if (TypeOfNote.toLowerCase() === "text") {
            keyboardDismiss();
            if (IntailContent.current !== Content) {
              // if the content is changed then show the model
              setModel(!model);
            } else {
              // if the content is not changed then go back
              navigation.goBack();
            }
          } // for Text Note
          else {
            navigation.goBack();
          } // for Image , Docx and Pdf Note
        }}
      >
        <ChevronLeft
          width={wp(2.5 * 2.4)}
          height={wp(2.5 * 2.4)}
          color={NoteAppcolor.btnColor}
        />
      </Pressable>

      <HeaderInfo LoadingRef={LoadingRef} data={data} />

      {mode === "edit" && (
        <Pressable
          style={[styles.Listbtn]}
          onPress={() => {
            if (
              TypeOfNote.toLowerCase() === "img" | "pdf" | "docx" &&
              Content === null 
            ) {
              alert("Please Select a file in order to save the note");
            } else {
              setmodel2(!model2);
              if (TypeOfNote.toLowerCase() === "text") {
                keyboardDismiss();
              }
            }
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

export default Header;

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
