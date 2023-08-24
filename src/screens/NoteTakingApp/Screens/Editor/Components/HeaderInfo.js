import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ApiServices } from "@app/services/Apiservice";
import { Image } from "react-native-animatable";
import { Dot } from "@app/svgs/Index";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import { Mulish, Nunito } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { ClientDataObj } from "@app/adapters/ClientDataObj";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";
function UserInfo(props) {
  const { deviceType } = useContext(DeviceContext);
  return (
    <View>
      <View style={styles.CardContet}>
        <View style={styles.Cont1}>
          <Image
            source={{
              uri: props.ClientData.Client_image,
            }}
            style={[
              styles.ClientImage,
              deviceType === "tablet" &&styles.ClientImage_Tablet,
            ]}
          />
        </View>
        <View style={styles.CardTextCont}>
          <Text
            style={[
              styles.Name,
              deviceType === "tablet" && {
                fontSize: FontSize(8),
              },
            ]}
          >
            {props.ClientData.Client_fullName}{" "}
          </Text>
          <View
            style={[
              styles.LastVisitCont,
              deviceType === "tablet" && styles.LastVisitCont_Tablet,
            ]}
          >
            <Text
              style={[
                styles.LastVisitText,
                deviceType === "tablet" && {
                  fontSize: FontSize(6),
                },
              ]}
            >
              {props.ClientData.appointment.date}
            </Text>
            <View style={styles.DotMargin}>
              <Dot
                width={deviceType === "mobile" ? Wp(4) : Wp(2)}
                height={deviceType === "mobile" ? Wp(4) : Wp(2)}
                color={NoteAppcolor.Primary}
              />
            </View>
            <Text
              style={[
                styles.LastVisitText,
                deviceType === "tablet" && {
                  fontSize: FontSize(6),
                },
              ]}
            >
              {props.ClientData.appointment.time}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const HeaderInfo = ({ data, LoadingRef = null }) => {
  const [ClientData, setClientData] = useState(null); // for storing the data of the header
  const HandleApi = async () => {
    const res = await ApiServices.Get_User_Session_Info(
      data.Session_ID,
      data.Client_ID
    );

    if (res) {
      console.log(res.data.session_info);
      const Data = new ClientDataObj(res.data.session_info);

      setClientData(Data);
    }
  }; // fetching data from api
  useEffect(() => {
    HandleApi();
    if (LoadingRef !== null) {
      LoadingRef.current?.LoadingEnds();
    }
  }, []); // side effect function to stop loading 
  return ClientData && <UserInfo ClientData={ClientData} />;
};

export default HeaderInfo;

const styles = StyleSheet.create({
  LastVisitCont_Tablet: {
    justifyContent: "flex-start",
    marginVertical: Wp(3),
  },
  ClientImage_Tablet: {
    width: Wp(23),
    height: Wp(23),
    borderRadius: Wp(12),
    marginEnd: Wp(4),
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
