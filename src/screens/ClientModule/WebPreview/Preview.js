import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import Header from "@CommonComponents/Header";
import { ChearfulLogo, ChevronLeft } from "@svg";
import { Wp } from "@helper/CustomResponsive";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { ActivityIndicator } from "react-native-paper";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
const Preview = ({navigation , route}) => {
  const [alreadyInjected, setAlreadyInjected] = React.useState(false);
  const {url} = route.params
  const WebviewRef = React.useRef(null);
  const BoilerPlateCode = `
    document.querySelectorAll('.container')[0].innerHTML=null
document.querySelectorAll('.container')[1].innerHTML=null
document.querySelectorAll('.dc-breadcrumbarea')[0].innerHTML=null
document.querySelectorAll('.sidebarsticky')[0].innerHTML=null
document.querySelectorAll('.labelslist')[0].innerHTML=null
document.getElementsByTagName('footer')[0].remove();
    `;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingVertical: Wp(20),
        paddingHorizontal: Wp(16),
      }}
    >
      <View style={{ marginBottom: Wp(10) }}>
        <Header Icon={ChevronLeft} pram={'back'} navigation={navigation} >
          <ChearfulLogo
            height={Wp(27)}
            width={Wp(122)}
            color={NoteAppcolor.Primary}
          />
        </Header>
      </View>
      <View style={{position:"absolute", top:heightPercentageToDP(50) , left:widthPercentageToDP(45)}}>
          <ActivityIndicator animating={alreadyInjected === false} size={"large"}  color={NoteAppcolor.Primary} />
        </View>
      <View style={{ flex: 1, opacity: alreadyInjected === true ? 1 : 0 }}>
       
        <WebView
          ref={WebviewRef}
          source={{
            uri: url,
          }}
          style={{ flex: 1 }}
          // injectedJavaScript={BoilerPlateCode}
          originWhitelist={[]}
          onLoadStart={(e) => {
            setAlreadyInjected(false);

            console.log("load start");
          }}
          onLoadEnd={(e) => {
            if (!alreadyInjected) {
              WebviewRef.current.injectJavaScript(BoilerPlateCode);

              console.log("injected");
              setTimeout(() => {
                setAlreadyInjected(true);
              }, 700);
            }
          }}
        />
      </View>
    </View>
  );
};

export default Preview;

const styles = StyleSheet.create({});
