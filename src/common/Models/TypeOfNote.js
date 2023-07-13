import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import { Mulish } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Modal, Portal } from "react-native-paper";
import Carousel from "react-native-reanimated-carousel";
import { DocIcon } from "@app/screens/NoteTakingApp/Images/Doc-Icons";
import { User_Session_Add_Notes_Editor_Pram_object } from "@app/adapters/User_Session_Add_Notes_Editor_Pram_object";
import {
  IconSquareRoundedArrowLeft,
  IconSquareRoundedArrowRight,
} from "tabler-icons-react-native";
const TypeOfNote = ({
  visible = true,
  setVisible,
  navigation,
  data,
  routeLoc,
}) => {
  // data is the object consistig of client data in object {Client_ID:number ,Session_ID:number }
  const NotesTypeData = [
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
    {
      name: "Text",
      icon: DocIcon.text,
      type: "text",
      Loc: "Prac_NotesEditor",
    },
    {
      name: "Written",
      icon: DocIcon.canvas,
      type: "canvas",
      Loc: "Prac_WrittenEditor",
    },
  ];

  const [text, setText] = useState("Pdf");
  const MODE = "edit";
  const hideModal = () => {
    setVisible(false);
    setText("Pdf");
  };

  const CoursalRef = useRef(null);

  const HandleCoursalMovement = (direction) => {
    if (direction == "left") {
      CoursalRef.current.prev();
    } else {
      CoursalRef.current.next();
    }
  };

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
      setText("Pdf");
    }, 1000);
  };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}
      >
        <View style={styles.TitleCont}>
          <Text style={styles.title}>Choose Note Type</Text>
        </View>

        <View style={[styles.Coursal, styles.BtnCont]}>
          <Pressable
            style={styles.btn}
            onPress={() => HandleCoursalMovement("left")}
          >
            <IconSquareRoundedArrowLeft
              size={Wp(30)}
              color={NoteAppcolor.Primary}
            />
          </Pressable>
          <Carousel
            loop
            width={Wp(250)}
            height={Wp(200)}
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
                <Image source={item.icon} style={styles.icon} />
              </View>
            )}
          />
          <Pressable
            style={styles.btn}
            onPress={() => HandleCoursalMovement("right")}
          >
            <IconSquareRoundedArrowRight
              size={Wp(30)}
              color={NoteAppcolor.Primary}
            />
          </Pressable>
        </View>

        <View style={{ alignSelf: "center" }}>
          <Pressable
            style={styles.btnStyles}
            onPress={() => {
              setTimeout(() => {
                HandleNavigation(text);
              }, 300);
            }}
          >
            <Text style={styles.btnText}>{text.toUpperCase()}</Text>
          </Pressable>
        </View>
      </Modal>
    </Portal>
  );
};

export default TypeOfNote;

const styles = StyleSheet.create({
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
    marginVertical: Wp(10),
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
});
