import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import Header from "@app/common/components/Header";
import { ChevronLeft } from "@app/svgs/Index";
import { Mulish } from "@app/helper/FontWeight";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import Carousel from "react-native-reanimated-carousel";
import JounalType from "./Components/JounalType";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import AddForm from "./Components/AddForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
const AddJournal = ({navigation}) => {
  const CoursalRef = useRef(null);
  const { width } = useWindowDimensions();
  const [enable, setEnable] = React.useState(false);
  const [typeOfJournal, setTypeofJournal] = useState("gratitude");
  const MoveNext = () => {
    setEnable(true);
    CoursalRef.current?.next();
  };

  return (
   
    <SafeAreaView style={styles.body}>
      <View style={{ paddingHorizontal: Wp(16), paddingVertical: Platform.OS =='android'?Wp(20):Wp(10) }}>
        <Header Icon={ChevronLeft} navigation={navigation} pram={"back"} >
          <Text style={styles.HeaderText}>Add Journal</Text>
        </Header>
      </View>

      <Carousel
        ref={CoursalRef}
        loop={false}
        width={width}
        style={{
          flex: 1,
        }}
        autoPlay={false}
        data={[...new Array(2).keys()]}
        enabled={enable}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) =>
          index == 0 ? setEnable(false) : setEnable(true)
        }
        renderItem={({ index }) => {
          if (index == 0) {
            return (
              <View>
                <Text
                  style={[
                    styles.HeaderText,
                    { color: NoteAppcolor.MenuText, textAlign: "center" , marginTop:Wp(10) },
                  ]}
                >
                  Choose Type Of Journal
                </Text>
                <JounalType setState={setTypeofJournal} />
                <TouchableOpacity style={styles.btn} onPress={MoveNext}>
                  <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
              </View>
            );
          } else {
            return (
              <KeyboardAwareScrollView enableOnAndroid={true}>
              <View>
                <AddForm type={typeOfJournal} />
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    navigation.navigate("Journal");
                  }}
                >
                  <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
              </View>
              </KeyboardAwareScrollView>
            );
          }
        }}
      />
    </SafeAreaView>

  );
};

export default AddJournal;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  HeaderText: {
    fontFamily: Mulish(700),
    color: NoteAppcolor.Primary,
    fontSize: FontSize(24),
  },
  btn: {
    backgroundColor: NoteAppcolor.Primary,
    width: wp(80),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Wp(10),
    borderRadius: Wp(10),
    marginTop: Platform.OS =='android'? Wp(10):Wp(20),
  },
  btnText: {
    fontFamily: Mulish(700),
    color: "#fff",
    fontSize: FontSize(16),
  },
});
