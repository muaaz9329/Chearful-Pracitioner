import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
import ActionSheet from "react-native-actions-sheet";
import { FontSize, Hp, Wp } from "@helper/CustomResponsive";
import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MoodSelection from "./MoodSelection";
import Carousel from "react-native-reanimated-carousel";
import { useEffect } from "react";
import { Nunito } from "@helper/FontWeight";
import { NoteAppcolor } from "@constants/NoteAppcolor";
import { IconX } from "tabler-icons-react-native";
import SpheresSelection from "./SpheresSelection";
import { useNonInitialEffect } from "@hooks/useNonIntialEffect";
import AddDiaryForm from "./AddDiaryForm";
import KeyboardDismiss from "@app/common/components/KeyboardDismiss";

const AddDiary = forwardRef((props, ref) => {
  const { width } = useWindowDimensions();
 

  const actionSheetRef = useRef(null);
  const [height, setHeight] = useState(54);
  const [feeling, setFeeling] = useState("");
  const [Sphere, setSphere] = useState(null);
  const intialShowStage = {
    mood:true,
    sphere:false,
    btn:false
  }
  const [show , setShow] = useState(intialShowStage)
  useImperativeHandle(ref, () => ({
    HandleOpen() {
      actionSheetRef.current?.show();
    },
  }));


  const HandleClose = () => {
    setFeeling("");
    setSphere(null);

    setHeight(54);
    setShow(intialShowStage)
    setTimeout(() => {
      actionSheetRef.current?.hide();
    }, 500);
  };

useEffect(()=>{
  console.log(show)
},[show])

  const HandleClose2 = () => {
    setFeeling("");
    setSphere(null);

    setHeight(54);
    setShow(intialShowStage)
    
  };

   const handleNext = () => {
    
    CorasalRef.current?.next();
    setHeight(
      185
    
      )
   }


  const HandleSheetHeight = (Selec) => {
    if (Selec == 1) {
      if (feeling !== "" || undefined || null) {
        setShow({mood:true,sphere:true,btn:false})
        setHeight(115);
      } else {
        setHeight(54);
        setShow(intialShowStage) 
      }
    } else if (Selec == 2) {
      if (Sphere !== null) {
        setShow({mood:true,sphere:true,btn:true})
        setHeight(137);
      } else {
        HandleSheetHeight(1);
      }
    }
    
  };

  useEffect(() => {
    HandleSheetHeight(1);
    console.log(feeling);
  }, [feeling]);

  useNonInitialEffect(() => {
    HandleSheetHeight(2);
    console.log(Sphere);
  }, [Sphere]);
 

  const CorasalRef = useRef(null);

  return (
    <ActionSheet
      ref={actionSheetRef}
      containerStyle={{
        height: wp(height),
        paddingVertical: Wp(20),
        borderTopRightRadius: Wp(20),
        borderTopLeftRadius: Wp(20),
      }}
      onClose={HandleClose2}
    >
      <Carousel
        ref={CorasalRef}
        loop={false}
        width={width}
        style={{}}
        autoPlay={false}
        data={[...new Array(2).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => {
          if (index == 0) {
            return (
              <View style={[{ width }, { paddingHorizontal: Wp(16) }]}>
                <View style={styles.header}>
                  <Pressable style={styles.closeBtn} onPress={HandleClose}>
                    <IconX size={Wp(20)} color={NoteAppcolor.Primary} />
                  </Pressable>
                </View>
                { show.mood && <View style={styles.MoodCont}>
                  <Text style={styles.TitleText}>
                    What is your Mood right now?
                  </Text>
                  <MoodSelection value={feeling} setValue={setFeeling} />
                </View>}
                {show.sphere && <View style={styles.SpheresSelectionCont}>
                  <Text style={styles.TitleText}>
                    In which Sphere of life?
                  </Text>
                  <View style={styles.Sphere}>
                    <SpheresSelection setSphere={setSphere} />
                  </View>
                </View>}
                { show.sphere && <View style={styles.btn}>
                  <View style={styles.Nextbtn}>
                    <TouchableOpacity
                      style={styles.btnCont}
                      onPress={handleNext}
                    >
                      <Text style={styles.btnText}>Next</Text>
                    </TouchableOpacity>
                  </View>
                </View>}
              </View>
            );
          } else {
            return (
              <View style={[{ width }, { paddingHorizontal: Wp(16) }]}>
                <KeyboardDismiss>
                <View>
                  <Text style={styles.TitleText}>Add a note</Text>
                  <View style={styles.FormCont}>
                    <AddDiaryForm />
                    <View style={styles.btn}>
                      <View style={styles.Nextbtn}>
                        <TouchableOpacity
                          style={styles.btnCont}
                          onPress={HandleClose}
                        >
                          <Text style={styles.btnText}>Save</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                </KeyboardDismiss>
              </View>
            );
          }
        }}
      />
    </ActionSheet>
  );
});

export default AddDiary;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: Wp(16),
    paddingVertical: Wp(20),
  },
  TitleText: {
    textAlign: "center",
    fontSize: FontSize(16),
    fontFamily: Nunito(700),
    color: NoteAppcolor.Primary,
  },
  closeBtn: {
    padding: Wp(10),
    backgroundColor: NoteAppcolor.BtnCont,
    borderRadius: Wp(10),
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: Wp(10),
  },
  SpheresSelectionCont: {
    marginTop: Hp(15),
  },
  Sphere: {
    marginTop: Wp(20),
  },
  btnCont: {
    backgroundColor: NoteAppcolor.Primary,
    paddingVertical: Wp(10),
    borderRadius: Wp(40),
    width: wp(90),
  },
  btnText: {
    textAlign: "center",
    fontSize: FontSize(16),
    fontFamily: Nunito(700),
    color: NoteAppcolor.White,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Wp(40),
  },
  FormCont: {
    justifyContent: "space-between",
    alignItems: "center",
    height: Platform.OS =='ios'? hp(80):hp(85)
  },
});
