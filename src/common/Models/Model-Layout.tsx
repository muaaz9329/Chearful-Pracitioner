import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { Modal, Portal } from "react-native-paper";

import { Wp } from "@helper/CustomResponsive";

import { DeviceType } from "../../context/Device-Type/DeviceTypeProvider";


const ModelLayout = ({
  visible,
  setVisible,
  DeviceType = "tablet",
  children,
  MobileWidth = 363,
  MobileHeight = 363,
  TabletWidth = 200,
  TabletHeight = 200,
  CustomStyles,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  DeviceType?: DeviceType;
  children: React.ReactNode;
  MobileWidth?: number;
  MobileHeight?: number;
  TabletWidth?: number;
  TabletHeight?: number;
  CustomStyles?: ViewStyle;
}) => {
  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={[
          styles.containerStyle,
          {
            width: Wp(MobileWidth),
            height: Wp(MobileHeight),
          },
          DeviceType === "tablet" && styles.containerStyle_Tablet,
          DeviceType === "tablet" && {
            width: Wp(TabletWidth),
            height: Wp(TabletHeight),
          },
          CustomStyles,
        ]}
      >
        {children}
      </Modal>
    </Portal>
  );
};

export default ModelLayout;

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

  containerStyle_Tablet: {
    width: Wp(200),
    alignSelf: "center",
    backgroundColor: "white",
    height: Wp(200),
    justifyContent: "space-between",
    paddingVertical: Wp(8),
    borderRadius: Wp(18),
    paddingHorizontal: Wp(5),
  },
});
