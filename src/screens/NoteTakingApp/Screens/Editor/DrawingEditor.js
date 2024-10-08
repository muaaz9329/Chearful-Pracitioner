import { Pressable, StyleSheet, View, Text, LogBox, Alert } from "react-native";
import React, { useContext, useEffect } from "react";
import Header from "./Components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Drawic from "@Library/Drawic/Drawic";
import { IconPencil, IconTrash } from "tabler-icons-react-native";
import { Wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import DeleteModel from "@app/common/Models/DeleteModel";
import { useState, useRef } from "react";
import { RefFunctions } from "@helper/CanvasFunction";
import HeaderWithFunc from "./Components/HeaderWithFunc";
import { useDispatch } from "react-redux";
import { UpdateHasSaved } from "@app/Library/Drawic/utils/features/Brush-Control/BrushControl";
import LoadingScreen from "@app/common/Module/Loading-Screen/LoadingScreen";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
LogBox.ignoreLogs(["Warning:..."]); // Ignore log notification by message
const DrawingEditor = ({ navigation, route }) => {
  const { mode, content, ClientData, NoteId, ComingFor , routeLoc} = route.params;
  const [Content, setContent] = useState();
  const IntialContent = useRef(content);
  const [file, setFile] = useState();
  const [Mode, setMode] = useState(mode);
  const [model, setModel] = useState(false);
  const DrawicRef = useRef();
  const CanvasFunc = new RefFunctions(DrawicRef); // Consists of all the Required Function to work with the Drawic Component
  const LoadingRef = useRef();
  const dispatch = useDispatch();
  const {deviceType} = useContext(DeviceContext)
  useEffect(() => {
    CanvasFunc.Reset_Canvas();
    if (Mode === "view" && content) {
      if (content.length !== 0) {
        for (let index = 0; index < content.length; index++) {
          CanvasFunc.SetPoint(content[index]);
        }
      } // Set the Points to the Canvas

      IntialContent.current = content;
    }
    dispatch(UpdateHasSaved(false));

  }, []);

  const GetPoint = () => {
    setContent(CanvasFunc.GetPoints());
    setFile(CanvasFunc.GET_IMG_BASE64());
  };
  return (
    <SafeAreaView edges={["top"]} style={styles.Continer}>
      <LoadingScreen ref={LoadingRef} type={'loader'}/>
      <HeaderWithFunc
        data={ClientData}
        mode={Mode}
        navigation={navigation}
        GetPointFunc={GetPoint}
        ComingFor={ComingFor}
        Content={Content}
        NoteId={NoteId}
        TypeOfNote={"canvas"}
        File={file}
        IntialContent={IntialContent}
        CanvasFunc={CanvasFunc}
        LoadingRef={LoadingRef}
        routeLoc={routeLoc}
      />
      <DeleteModel
        navigation={navigation}
        visible={model}
        setVisible={setModel}
        NoteId={NoteId}
      />

      <Drawic view={Mode} CanvasRef={DrawicRef} />
      {Mode === "view" && (
        <View style={styles.editBar}>
          <Pressable
            style={[styles.Btn, { backgroundColor: "#FF8383" }, deviceType==='tablet'&&styles.Btn_Tablet]}
            onPress={() => {
              setModel(!model);
            }}
          >
            <IconTrash size={deviceType==='mobile'?Wp(30):Wp(20)} color={"white"} />
          </Pressable>
          <Pressable
            style={[styles.Btn,deviceType==='tablet'&&styles.Btn_Tablet]}
            onPress={() => {
              setMode("edit");
            }}
          >
            <IconPencil size={deviceType==='mobile'?Wp(30):Wp(20)} color={NoteAppcolor.Primary} />
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default DrawingEditor;

const styles = StyleSheet.create({
  Btn_Tablet: {
    paddingVertical: Wp(8),
    paddingHorizontal: Wp(8),
  },
  Continer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Btn: {
    paddingVertical: Wp(12),
    paddingHorizontal: Wp(12),
    backgroundColor: NoteAppcolor.Secondary,
    borderRadius: Wp(10),
  },
  editBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    paddingHorizontal: Wp(16),
    bottom: 0,
    marginBottom: Wp(15),
  },
});
