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
import DeleteModel from "@app/common/Models/DeleteModel";
import { useSelector } from "react-redux";
import { DateConstrctor } from "@app/helper/customFunction";
import { IconTrash } from "tabler-icons-react-native";
import HeaderInfo from "./HeaderInfo";
const HeaderWithDeleteBtn = ({ navigation, mode, data , NoteId , LoadingRef }) => {
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
      <DeleteModel
        visible={model2}
        setVisible={setmodel2}
        navigation={navigation}
        NoteId={NoteId}
      />
      <Pressable
        style={styles.Listbtn}
        onPress={() => {
          navigation.goBack()
        }}
      >
        <ChevronLeft
          width={wp(2.5 * 2.4)}
          height={wp(2.5 * 2.4)}
          color={NoteAppcolor.btnColor}
        />
      </Pressable>
      <HeaderInfo data={data} LoadingRef={LoadingRef} />

      {mode === "view" && (
        <Pressable
          style={[styles.Listbtn, { backgroundColor: "#FF8383" }]}
          onPress={() => {
            setmodel2(!model2);
          }}
        >
          <IconTrash size={wp(2.5 * 2.4)} color={"white"} />
        </Pressable>
      )}
    </View>
  );
};

export default HeaderWithDeleteBtn;

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
