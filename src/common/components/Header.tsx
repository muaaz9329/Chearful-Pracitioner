import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactComponentElement, ReactNode, useContext } from "react";
import { Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { ChearfulLogo } from "@svg";
import { NavigationProp } from "@react-navigation/native";
import { IconComponent } from "@app/types";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
interface HeaderProps {
  Icon: IconComponent;
  children?: ReactNode;
  navigation?: any;
  pram: string;
  setVisible?: (State: boolean) => void;
  visible?: boolean;
  RightIcon?: any;
  ShowRightIcon?: boolean;
  justifyContent?:
    | "space-between"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-evenly";
  HeaderType?: "New" | "Old";
}

const Header = ({
  Icon,
  children,
  navigation,
  pram,
  setVisible,
  visible,
  RightIcon=null,
  ShowRightIcon = false,
  justifyContent = "space-between",
  HeaderType = "Old",
}: HeaderProps) => {
  const { deviceType } = useContext(DeviceContext);

  const handleNavigation = () => {
    if (pram === "back") {
      navigation.goBack();
    } else if (pram === "model") {
      setVisible?.(!visible);
    } else {
      navigation.navigate(pram);
    }
  };
  return HeaderType === "Old" ? (
    <View style={[styles.HeaderCont, { justifyContent: justifyContent }]}>
      <View>
        <Pressable
          style={[
            styles.HeaderIconStyles,
            deviceType === "tablet" && styles.HeaderIconStyles_tablet,
          ]}
          onPress={handleNavigation}
        >
          <Icon
            width={deviceType === "mobile" ? Wp(20) : Wp(15)}
            height={deviceType === "mobile" ? Wp(20) : Wp(15)}
            color={NoteAppcolor.Primary}
          />
        </Pressable>
      </View>

      <View>{children}</View>
      {ShowRightIcon == false ? (
        <View style={styles.HeaderIconStyle2}>
          <View style={styles.box}></View>
        </View>
      ) : (
        RightIcon
      )}
    </View>
  ) : (
    <View style={[styles.HeaderCont]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          style={[
            styles.HeaderIconStyles,
            {
              marginRight: Wp(10),
              borderRadius: Wp(10),
            },
            deviceType === "tablet" && styles.HeaderIconStyles_tablet,
          ]}
          onPress={handleNavigation}
        >
          <Icon
            width={deviceType === "mobile" ? Wp(25) : Wp(15)}
            height={deviceType === "mobile" ? Wp(25) : Wp(15)}
            color={NoteAppcolor.Primary}
          />
        </Pressable>
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:justifyContent,
          
          flex:1

        }}>{children}</View>
      </View>

      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  HeaderIconStyles_tablet: {
    padding: Wp(10),
    borderRadius: Wp(8),
    marginRight: Wp(6),
  },
  HeaderCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderIconStyles: {
    padding: Wp(14),
    backgroundColor: NoteAppcolor.BtnCont,
    borderRadius: Wp(14),
  },
  HeaderIconStyle2: {
    padding: Wp(14),
  },
  box: {
    width: Wp(20),
    height: Wp(20),
  },
});
