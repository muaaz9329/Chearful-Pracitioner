import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppImages } from "@app/common/Images";
import { Wp } from "@app/helper/CustomResponsive";
import { IconPlayerPause, IconPlayerPlay } from "tabler-icons-react-native";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DeviceContext } from "@app/context/Device-Type/DeviceTypeProvider";

type Props = {
  source?: ImageSourcePropType;
};

const DEFAULT_VALUE = {
  source: AppImages.defaultSoundImage,
};

const SoundbitesCard = ({ source = DEFAULT_VALUE.source }: Props) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const { deviceType } = useContext(DeviceContext);
  return (
    <ImageBackground source={source} style={[styles.ImageBg,deviceType==='tablet'&&styles.ImageBg_tablet]} resizeMode="cover">
      
       
    
    </ImageBackground>
  );
};

export default SoundbitesCard;

const styles = StyleSheet.create({
  ImageBg_tablet: {
    width: Wp(120),
    height: Wp(150),
    borderRadius: Wp(5),
  },
  controlBtn: {
    borderWidth: Wp(2),
    width: Wp(30),
    height: Wp(30),
    borderRadius: Wp(15),
    borderColor: NoteAppcolor.OffWhiteCont,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageBg: {
    width: Wp(240),
    height: Wp(300),
    borderRadius: Wp(10),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
