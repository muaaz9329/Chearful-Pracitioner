import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ApiServices } from '@app/services/Apiservice';
import { Image } from 'react-native-animatable';
import { Dot } from '@app/svgs/Index';
import { FontSize, Wp } from '@app/helper/CustomResponsive';
import { Mulish, Nunito } from '@app/helper/FontWeight';
import { NoteAppcolor } from '@app/constants/NoteAppcolor';
import { ClientDataObj } from '@app/adapters/ClientDataObj';
function UserInfo(props) {

    return (
      <View>
        <View style={styles.CardContet}>
          <View style={styles.Cont1}>
            <Image
              source={{
                uri: props.ClientData.Client_image,
              }}
              style={styles.ClientImage}
            />
          </View>
          <View style={styles.CardTextCont}>
            <Text style={styles.Name}>{props.ClientData.Client_fullName} </Text>
            <View style={styles.LastVisitCont}>
              <Text style={styles.LastVisitText}>
                {props.ClientData.appointment.date}
              </Text>
              <View style={styles.DotMargin}>
                <Dot width={Wp(4)} height={Wp(4)} color={NoteAppcolor.Primary} />
              </View>
              <Text style={styles.LastVisitText}>
                {props.ClientData.appointment.time}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  

const HeaderInfo = ({data  , LoadingRef}) => {
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
      };
      useEffect(() => {
        HandleApi();
        LoadingRef.current?.LoadingEnds();
      }, []);
  return (
  (ClientData && <UserInfo ClientData={ClientData}/>)
  )
}

export default HeaderInfo

const styles = StyleSheet.create({
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
})