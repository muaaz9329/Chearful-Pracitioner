import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import { Mulish } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Modal, Portal } from "react-native-paper";
import Carousel from "react-native-reanimated-carousel";
import { DocIcon } from "@app/screens/practioner-admin-panel/Images/Doc-Icons";
import { User_Session_Add_Notes_Editor_Pram_object } from "@app/adapters/User_Session_Add_Notes_Editor_Pram_object";
import {
  IconSquareRoundedArrowLeft,
  IconSquareRoundedArrowRight,
} from "tabler-icons-react-native";

import PagerView from "react-native-pager-view";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
const TypeOfNote = ({
  visible = true,
  setVisible,
  navigation,
  data,
  routeLoc,
}) => {
  // data is the object consistig of client data in object {Client_ID:number ,Session_ID:number }
  const { deviceType } = useContext(DeviceContext);

  const NotesTypeData = [
    {
      name: "Write",
      icon: DocIcon.canvas,
      type: "canvas",
      Loc: "Prac_WrittenEditor",
    },
    {
      name: "Text",
      icon: DocIcon.text,
      type: "text",
      Loc: "Prac_NotesEditor",
    },
    {
      name: "Pdf",
      icon: DocIcon.pdf,
      type: "pdf",
      Loc: "Prac_PdfUpload",
    },
    {
      name: "Docx",
      icon: DocIcon.docx,
      type: "docx",
      Loc: "Prac_DocxUpload",
    },
    {
      name: "Image",
      icon: DocIcon.img,
      type: "img",
      Loc: "Prac_ImageUpload",
    },
  ];

  const [text, setText] = useState("Write");
  const MODE = "edit";
  const hideModal = () => {
    setVisible(false);
    setText("Write");
  };

  const CoursalRef = useRef(null);

  //* Logic for IOS Component
  const HandleCoursalMovement = (direction) => {
    if (direction == "left") {
      CoursalRef.current.prev();
    } else {
      CoursalRef.current.next();
    }
  };

  // logic for handling navigation based on name

  const HandleNavigation = (name) => {
    console.log(name);
    NotesTypeData.map((item) => {
      if (item.name == name) {
        console.log(item.Loc);
        navigation.push(
          item.Loc,
          new User_Session_Add_Notes_Editor_Pram_object(
            MODE,
            data,
            item.type,
            "upload",
            routeLoc
          )
        );
      }
    });

    hideModal();
    setTimeout(() => {
      setText("Write");
    }, 1000);
  };

  //* Logic for Android Component

  const pagerRef = useRef(null);
  const pageCount = 5; // Replace this with the total number of pages
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleNextPage = () => {
    const nextPageIndex = Math.min(currentPageIndex + 1, pageCount - 1);
    pagerRef.current.setPage(nextPageIndex);
  };

  // Function to handle moving to the previous page
  const handlePrevPage = () => {
    const prevPageIndex = Math.max(currentPageIndex - 1, 0);
    pagerRef.current.setPage(prevPageIndex);
  };

  const handlePageSelected = (event) => {
    const { position } = event.nativeEvent;
    const index = Math.round(position);
    setText(NotesTypeData[index].name);
    setCurrentPageIndex(event.nativeEvent.position);
  };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={[
          styles.containerStyle,
          deviceType === "tablet" && styles.containerStyle_Tablet,
        ]}
      >
        <View style={styles.TitleCont}>
          <Text
            style={[
              styles.title,
              deviceType === "tablet" && {
                fontSize: FontSize(12),
              },
            ]}
          >
            Choose Note Type
          </Text>
        </View>

        <View style={[styles.Coursal, styles.BtnCont]}>
          <Pressable
            style={[
              styles.btn,
              {
                opacity:
                  Platform.OS == "ios" ? 1 : currentPageIndex == 0 ? 0.5 : 1,
              },
            ]} // opacity logic for android
            onPress={() => {
              if (Platform.OS == "ios") {
                HandleCoursalMovement("left");
              } else {
                handlePrevPage();
              }
            }}
          >
            <IconSquareRoundedArrowLeft
              size={deviceType === "mobile" ? Wp(30) : Wp(20)}
              color={NoteAppcolor.Primary}
            />
          </Pressable>
          {Platform.OS == "ios" ? (
            <Carousel
              loop
              width={deviceType === "mobile" ? Wp(250) : Wp(150)}
              height={deviceType === "mobile" ? Wp(200) : Wp(100)}
              data={NotesTypeData}
              onSnapToItem={(index) => setText(NotesTypeData[index].name)}
              autoPlay={false}
              enabled={true}
              scrollAnimationDuration={500}
              mode={"parallax"}
              ref={CoursalRef}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.icon}
                    style={[
                      styles.icon,
                      deviceType === "tablet" && styles.icon_tablet,
                    ]}
                  />
                </View>
              )}
            />
          ) : (
            <PagerView
              style={{
                width: deviceType === "mobile" ? Wp(250) : Wp(150),
                height: deviceType === "mobile" ? Wp(200) : Wp(100),
                borderWidth: 1,
                borderColor: "#000",
              }}
              initialPage={0}
              overdrag={true}
              onPageSelected={handlePageSelected}
              ref={pagerRef}
            >
              {NotesTypeData.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image
                      source={item.icon}
                      style={[styles.icon, { marginLeft: Wp(8) }, deviceType==='tablet'&& {width: Wp(80),
                        height: Wp(100), marginLeft:Wp(0)}]}
                    />
                  </View>
                );
              })}
            </PagerView>
          )}

          <Pressable
            style={[
              styles.btn,
              {
                opacity:
                  Platform.OS == "ios" ? 1 : currentPageIndex == 4 ? 0.5 : 1,
              },
            ]} // opacity logic for android
            onPress={() => {
              if (Platform.OS == "ios") {
                HandleCoursalMovement("right");
              } else {
                handleNextPage();
              }
            }}
          >
            <IconSquareRoundedArrowRight
              size={deviceType === "mobile" ? Wp(30) : Wp(20)}
              color={NoteAppcolor.Primary}
            />
          </Pressable>
        </View>

        <View style={{ alignSelf: "center" }}>
          <Pressable
            style={[
              styles.btnStyles,
              deviceType === "tablet" && styles.btnStyles_Tablet,
            ]}
            onPress={() => {
              setTimeout(() => {
                HandleNavigation(text);
              }, 300);
            }}
          >
            <Text
              style={[
                styles.btnText,
                deviceType === "tablet" && {
                  fontSize: FontSize(10),
                },
              ]}
            >
              {text.toUpperCase()}
            </Text>
          </Pressable>
        </View>
      </Modal>
    </Portal>
  );
};

export default TypeOfNote;

const styles = StyleSheet.create({
  btnStyles_Tablet: {
    width: Wp(78),
    height: Wp(32),
    borderRadius: Wp(6),
  },
  icon_tablet: {
    width: Wp(80),
    height: Wp(100),
  },
  containerStyle_Tablet: {
    width: Wp(220),
    alignSelf: "center",
    backgroundColor: "white",
    height: Wp(220),
    justifyContent: "space-between",
    paddingVertical: Wp(8),
    borderRadius: Wp(18),
    paddingHorizontal: Wp(5),
  },
  containerStyle: {
    width: Wp(363),
    alignSelf: "center",
    backgroundColor: "white",
    height: Wp(363),
    justifyContent: "space-between",
    paddingVertical: Wp(15),
    borderRadius: Wp(30),
    paddingHorizontal: Wp(10),
  },
  title: {
    textAlign: "center",
    fontSize: FontSize(24),
    fontFamily: Mulish(700),
    color: "#1D1A0E",
  },
  animationSize: {
    width: Wp(160),
    height: Wp(160),
  },
  animationCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Wp(20),
  },
  btnStyles: {
    width: Wp(135),
    height: Wp(55),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: NoteAppcolor.Primary,
    borderRadius: Wp(12),
  },
  btnText: {
    fontFamily: Mulish(700),
    fontSize: FontSize(14),
    color: "white",
  },
  animationDiv: {
    justifyContent: "center",
    alignItems: "center",
  },
  Coursal: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: Wp(160),
    height: Wp(200),
  },
  BtnCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    height: Wp(100),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Wp(5),
  },
  wrapper: {},
  slide1: {
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
