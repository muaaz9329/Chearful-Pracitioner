import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React, { useState } from "react";

import {Wp } from "@helper/CustomResponsive";

import { Nunito, Mulish } from "@helper/FontWeight";
import { WorseFaceEmoji, OkFace, HappyFace } from "@svg";
import { DataRendering } from "@helper/customFunction";


const FeelSelectionCont = ({value,setValue}) => {

/**
 * This code is setting various design values for buttons denoting three different moods: "worse", "same" and "better".

The mood variable holds an array of the three possible levels of mood.

The two variables SelectedDesign and UnselectedDesign contain objects that hold styling values specific to a selected or unselected button, respectively. These styling options include width, height, faceColor, eyelashesColor, eyesColor, mouthColorand opacity.

Next, the initial state of the button components (whether they are toggled on or off) is established with the DataRendering function, which takes the mood array as its parameter. This state is then held in the intailState variable.

Two states are then declared using the useState() hook - value and selectedItem. value will hold the user's selected mood, while selectedItem stores the data from the DataRendering function, allowing us to make the buttons toggle and assign the data to the value state.

Finally, the StateChanging function handles making the buttons toggle, as well as setting the design state, dispatching action to a Redux store, and setting the value state. It does this by comparing the index of the currently pressed button to 0, 1 or 2, and running the appropriate logic based on the comparison.
 */


  const mood = ["sad", "fine", "happy"];
  const SelectedDesign = {
    width: Wp(80),
    height: Wp(80),
    faceColor: "#FFDD67",
    eyelashesColor: "#917524",
    eyesColor: "#664E27",
    mouthColor: "#664E27",
    opacity:1
  };

  const UnselectedDesign = {
    width: Wp(50),
    height: Wp(50),
    faceColor: "#DADADA",
    eyelashesColor: "#747474",
    eyesColor: "#515151",
    mouthColor: "#515151",
    opacity:0.5
  };

  const intailState = DataRendering(mood);


  const [design, setDesign] = useState([
    UnselectedDesign,
    UnselectedDesign,
    UnselectedDesign,
  ]);



  
  const [selectedItem, SetSelected] = useState(intailState); // * this state is used to have make the button toggle and assignning the data to the userSelec state



  const StateChanging = (index) => {

    if (index === 0) {
      if (selectedItem[index].isSelected === false) {
        design[index] = SelectedDesign;
        setDesign([...design]);
        design[index + 1] = UnselectedDesign;
        design[index + 2] = UnselectedDesign;
        setDesign([...design]);
        setValue(mood[index]);
        selectedItem[index].isSelected = true;
        selectedItem[index + 1].isSelected = false;
        selectedItem[index + 2].isSelected = false;
        SetSelected([...selectedItem]);
      } else {
        design[index] = UnselectedDesign;
        setDesign([...design]);
        design[index + 1] = UnselectedDesign;
        design[index + 2] = UnselectedDesign;
        setDesign([...design]);
        setValue('');
        selectedItem[index].isSelected = false;
        selectedItem[index + 1].isSelected = false;
        selectedItem[index + 2].isSelected = false;
        SetSelected([...selectedItem]);
      }
    } else if (index === 1) {
      if (selectedItem[index].isSelected === false) {
        design[index] = SelectedDesign;
        setDesign([...design]);
        design[index - 1] = UnselectedDesign;
        design[index + 1] = UnselectedDesign;
        setDesign([...design]);
        setValue(mood[index]);
        selectedItem[index].isSelected = true;
        selectedItem[index + 1].isSelected = false;
        selectedItem[index - 1].isSelected = false;
        SetSelected([...selectedItem]);
      } else {
        design[index] = UnselectedDesign;
        setDesign([...design]);
        design[index - 1] = UnselectedDesign;
        design[index + 1] = UnselectedDesign;
        setDesign([...design]);
        setValue('');
        selectedItem[index].isSelected = false;
        selectedItem[index + 1].isSelected = false;
        selectedItem[index - 1].isSelected = false;
        SetSelected([...selectedItem]);
      }
    } else if (index === 2) {
      if (selectedItem[index].isSelected === false) {
        design[index] = SelectedDesign;
        setDesign([...design]);
        design[index - 1] = UnselectedDesign;
        design[index - 2] = UnselectedDesign;
        setDesign([...design]);
        setValue(mood[index]);
        selectedItem[index].isSelected = true;
        selectedItem[index - 1].isSelected = false;
        selectedItem[index - 2].isSelected = false;
        SetSelected([...selectedItem]);
      } else {
        design[index] = UnselectedDesign;
        setDesign([...design]);
        design[index + 1] = UnselectedDesign;
        design[index + 2] = UnselectedDesign;
        setDesign([...design]);
        setValue('');
        selectedItem[index].isSelected = false;
        selectedItem[index - 1].isSelected = false;
        selectedItem[index - 2].isSelected = false;
        SetSelected([...selectedItem]);
      }
    }
  };
  return (
   
        <View style={styles.EmojiContainer}>
          <TouchableOpacity style={styles.Face} onPress={()=>StateChanging(0)}>
            <WorseFaceEmoji
              width={design[0].width}
              height={design[0].height}
              faceColor={design[0].faceColor}
              eyelashesColor={design[0].eyelashesColor}
              eyesColor={design[0].eyesColor}
              mouthColor={design[0].mouthColor}
            />
            <Text style={[styles.EmojiText,{opacity:design[0].opacity}]}>Sad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Face} onPress={()=>StateChanging(1)}>
            <OkFace
              width={design[1].width}
              height={design[1].height}
              faceColor={design[1].faceColor}
              eyelashesColor={design[1].eyelashesColor}
              eyesColor={design[1].eyesColor}
              mouthColor={design[1].mouthColor}
            />
            <Text style={[styles.EmojiText,{opacity:design[1].opacity}]}>Fine</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Face} onPress={()=>StateChanging(2)}>
            <HappyFace
            width={design[2].width}
            height={design[2].height}
            faceColor={design[2].faceColor}
            eyelashesColor={design[2].eyelashesColor}
            eyesColor={design[2].eyesColor}
            mouthColor={design[2].mouthColor}
            />
            <Text style={[styles.EmojiText,{opacity:design[2].opacity}]}>Happy</Text>
          </TouchableOpacity>
        </View>
     
  );
};

export default FeelSelectionCont;

const styles = StyleSheet.create({

  EmojiContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop:Wp(20)

  },
  EmojiText:{
    fontSize:Wp(14),
    fontFamily:Mulish(600),
    textAlign: "center",
    color:"#1E5542"

  },
    Face:{
        width:Wp(80),
        height:Wp(80),
        alignItems:"center",
        justifyContent:"center"
    }
});

