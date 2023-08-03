import { Pressable, StyleSheet, Text, View ,ScrollView } from "react-native";
import React, { useImperativeHandle, forwardRef, useRef, useState } from "react";
import ActionSheet from "react-native-actions-sheet";
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import { Hp, Wp } from "@app/helper/CustomResponsive";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Nunito } from "@app/helper/FontWeight";
import { Divider } from "react-native-paper";

const SortBaseSheet = forwardRef((props, ref) => {
  const actionSheetRef = useRef(null);

  useImperativeHandle(ref, () => ({
    HandleOpen() {
      actionSheetRef.current?.show();
    },
  }));




  const HandleClose = () => {

    setTimeout(() => {
        actionSheetRef.current?.hide();
    }, 500);
  };

  const selectedDesign = {
    display: "flex",
  };
  const UnselectedDesign = {
    display: "none",
  };

  
  const [displayTick, setDisplayTick] = useState([
    selectedDesign,
    UnselectedDesign,
    UnselectedDesign,
    UnselectedDesign,
    UnselectedDesign,
   
  ]);





  return (
    <ActionSheet
      containerStyle={styles.BaseSheetCont}
      ref={actionSheetRef}
    >
        <BottomSheet HandleFunction={HandleClose} UnselectedDesign={UnselectedDesign} selectedDesign={selectedDesign} displayTick={displayTick} setDisplayTick={setDisplayTick} />
    </ActionSheet>
  );
});



const BottomSheet = ({
    HandleFunction,
    selectedDesign,
    UnselectedDesign,
    displayTick,
    setDisplayTick,
    
  }) => {

    

      




    const menuOption = [
      {
        title: "All Journals",
      },
      {
        title: "Gratitude",
      },
      {
        title: "Self-Compassion",
      },
      {
        title: "Stress",
      },
      {
        title: "Free Writing",
      },

    ];
    const ChangeDesign = (index) => {
      let newDisplayTick = [...displayTick];
  for(let i=0;i<5;i++){
        if(i==index){
            newDisplayTick[i] = selectedDesign;
        }
        else{
            newDisplayTick[i] = UnselectedDesign;
        }
  }
      setDisplayTick(newDisplayTick);
    };
  
    return (
      <View>
        <View style={styles.ContTitle}>
          <Text style={styles.ContTitleText}>Sort</Text>
        </View>
        <Divider bold={true} style={{marginVertical:Wp(5)}} />
        <View style={styles.SelectionCont}>
            <ScrollView contentContainerStyle={{paddingTop: Wp(20),paddingVertical:Wp(20)}}>
          {menuOption.map((item, index) => {
            return (
              <Pressable
                key={index}
                style={styles.MainCont}
                onPress={() => {
                  ChangeDesign(index);
                  HandleFunction(item.title);
                }}
              >
                <View style={styles.SelectionContainer}>
                  <Text style={styles.textTitle}>{item.title}</Text>
                </View>
                <View
                  style={[
                    styles.icon,
                    displayTick[index],
                    {
                      position: "absolute",
                      backgroundColor: NoteAppcolor.Primary,
                      width: wp(90),
                      height: wp(10),
                      borderRadius: Wp(12),
                      opacity: 0.2,
                    },
                  ]}
                >
                  {/* <Tick
                    width={Wp(12)}
                    height={Wp(12)}
                    color={NoteAppcolor.Primary}
                  /> */}
                </View>
              </Pressable>
            );
          })}
          </ScrollView>
        </View>
      </View>
    );
  };






export default SortBaseSheet;

const styles = StyleSheet.create({
  BaseSheetCont: {
    backgroundColor: "#fff",
    height: hp(30),
    borderTopLeftRadius: Wp(25),
    borderTopRightRadius: Wp(25),
  },
  ContTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Hp(15),
  },
  ContTitleText: {
    fontFamily: Nunito(800),
    fontSize: Wp(20),
    color: NoteAppcolor.Primary,
  },
  SelectionCont: {
    
    height: hp(20),
  },
  textTitle: {
    color: NoteAppcolor.Primary,
    fontFamily: Nunito("600"),
    fontSize: Wp(18),
    textAlign: "center",
  },
  MainCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Hp(20),
  },
});
