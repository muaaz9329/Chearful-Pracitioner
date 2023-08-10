import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { Modal, Portal } from "react-native-paper";
import Lottie from "lottie-react-native";

import { FontSize, Wp } from "@helper/CustomResponsive";
import { Mulish } from "@helper/FontWeight";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { ApiServices } from "@app/services/Apiservice";
import LoadingAndSuccess from "../animatedComponents/Success/LoadingAndSuccess";
import { useDispatch } from "react-redux";
import { RefreshSessionNotes } from "@app/features/SessionNotes/SessionNotes";
import { setRefresh } from "@app/features/utils-States/utilsReducers";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
const DeleteModel = ({ navigation, visible, setVisible, NoteId }) => {
  const Dispatch = useDispatch();
  const { deviceType } = useContext(DeviceContext);

  const [loading, setLoading] = useState(false);
  const animationControl = React.useRef();
  const HandleApi = async () => {
    setLoading(true);
    const response = await ApiServices.Delete_Session_Note(NoteId);
    if (response) {
      animationControl.current.LoadingEnds();
      Dispatch(RefreshSessionNotes(true)); // State to make THe Session Screen Refresh
      Dispatch(setRefresh(true)); // util state to control Refresh on Client details screen as well as on Screen where refresh Required
      setTimeout(() => {
        setLoading(false);
        hideModal();
        navigation.goBack();
      }, 1000);
    }
  };

  const hideModal = () => setVisible(false);

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
        <View style={styles.animationCont}>
          {loading ? (
            <LoadingAndSuccess
              ref={animationControl}
              TypeOfDevice={deviceType}
            />
          ) : (
            <Lottie
              source={require("./animation/Delete2.json")}
              autoPlay
              style={[
                styles.animationSize,
                deviceType === "tablet" && styles.animationSize_tablet,
              ]}
            />
          )}
        </View>

        <View style={styles.content}>
          <Text
            style={[
              styles.contentText,
              deviceType === "tablet" && {
                fontSize: FontSize(12),
              },
            ]}
          >
            Are You Sure You Want To Delete This Note?
          </Text>
          <View style={styles.btnCont}>
            <TouchableOpacity
              style={[
                styles.btnStyles,
                styles.DeleteBtn,
                deviceType === "tablet" && styles.btnStyle_tablet,
              ]}
              onPress={() => {
                HandleApi();
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
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnStyles,
                styles.btnCancel,
                deviceType === "tablet" && styles.btnStyle_tablet,
              ]}
              onPress={() => {
                hideModal();
              }}
            >
              <Text
                style={[
                  styles.btnText,
                  styles.cancelText,
                  deviceType === "tablet" && {
                    fontSize: FontSize(10),
                  },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default DeleteModel;

const styles = StyleSheet.create({
  containerStyle: {
    width: Wp(363),
    alignSelf: "center",
    backgroundColor: "white",
    height: Wp(363),
    justifyContent: "flex-start",
    paddingVertical: Wp(15),
    borderRadius: Wp(30),
    paddingHorizontal: Wp(10),
  },
  animationSize: {
    width: Wp(160),
    height: Wp(160),
  },
  animationCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: FontSize(22),
    textAlign: "center",
    paddingHorizontal: Wp(40),
    fontFamily: Mulish(700),
    color: "#1D1A0E",
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
  btnCancel: {
    backgroundColor: "white",
    borderWidth: Wp(1),
    borderColor: NoteAppcolor.Primary,
  },
  cancelText: {
    color: NoteAppcolor.Primary,
  },
  DeleteBtn: {
    backgroundColor: "#FF8383",
  },
  btnCont: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Wp(15),
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
  animationSize_tablet: {
    width: Wp(80),
    height: Wp(80),
  },
  btnStyle_tablet: {
    width: Wp(70),
    height: Wp(35),
    borderRadius: Wp(8),
  },
});
// hideModal()
//               navigation.goBack()
