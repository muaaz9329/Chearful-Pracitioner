import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontSize, Wp } from "@app/helper/CustomResponsive";
import Header from "@CommonComponents/Header";
import { ChearfulLogo, ChevronLeft } from "@app/svgs/Index";
import { NoteAppcolor } from "@app/constants/NoteAppcolor";
import { Mulish, Nunito } from "@app/helper/FontWeight";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import AnimatedLoginBtn from "@app/common/components/AnimatedLoginbtn";
import { ApiServices } from "@app/services/Apiservice";
import {
  ResetPasswordFailed,
  ResetPasswordRequest,
  ResetPasswordSuccess,
} from "@app/features/Reset-Password-Reducers/ResetReducers";
import ResetPassModel from "@app/common/Models/ResetPassModel";

const ForgetPass = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const Dispatch = useDispatch();
  const { Success , error} = useSelector((state) => state.ResetPass);
  const [model, setModel] = React.useState(false);
  useEffect(() => {
    if (Success) {
      setModel(true);
    }
  }, [Success]);


  useEffect(()=>{
    Dispatch(ResetPasswordRequest())
  },[])



  const ResetEmailRequest = async () => {
    ApiServices.UserResetPass(
      ResetPasswordSuccess,
      ResetPasswordFailed,
      ResetPasswordRequest,
      Dispatch,
      email
    );
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ResetPassModel
        navigation={navigation}
        visible={model}
        setVisible={setModel}
      />
      <View style={styles.headerCont}>
        <Header Icon={ChevronLeft} pram={'back'} navigation={navigation}>
          <ChearfulLogo
            height={Wp(27)}
            width={Wp(122)}
            color={NoteAppcolor.Primary}
          />
        </Header>
      </View>
      <View style={styles.MainCont}>
        <Text style={styles.mainTitle}>Reset password</Text>
        <Text style={styles.TextContent}>
          Lost your password? No problem! Simply enter the associated
          email/username, and we'll send you a password reset link to regain
          access to your account hassle-free.{" "}
        </Text>
        <View style={styles.InputArea}>
          <TextInput
            placeholder="Email/Username"
            placeholderTextColor={NoteAppcolor.MenuText}
            style={[styles.TaskInput,{borderColor:  error.status ? NoteAppcolor.Error : NoteAppcolor.OffWhiteCont , borderWidth:2}]}
            onChangeText={(text) => setEmail(text)}
          />
          <AnimatedLoginBtn
            HandleFunc={ResetEmailRequest}
            ReducerAction={"ResetPass"}
            Text={"Reset"}
          />
        {error.status && <Text style={styles.errorTxt} >
        {error.message}
        </Text>}

        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPass;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: Wp(16),
    paddingHorizontal: Wp(20),
  },
  headerCont: {
    marginBottom: Wp(20),
  },
  mainTitle: {
    fontSize: Wp(30),
    fontFamily: Nunito(800),
    color: NoteAppcolor.Primary,
    marginVertical: Wp(10),
  },
  TextContent: {
    fontSize: Wp(16),
    fontFamily: Mulish(600),
    color: "black",
    opacity: 0.7,
  },
  TaskInput: {
    fontFamily: Mulish(400),
    fontSize: FontSize(14),
    color: NoteAppcolor.MenuText,
    paddingVertical: Platform.OS == "android" ? Wp(10) : Wp(13),
    paddingHorizontal: Wp(10),
    backgroundColor: NoteAppcolor.OffWhiteCont,
    borderRadius: Wp(10),
    width: widthPercentageToDP(85),
    height: heightPercentageToDP(6),
    marginTop: Wp(20),
    marginBottom: Wp(20),
  },
  InputArea: {
    alignItems: "center",
    justifyContent: "center",
  },
  errorTxt:{
    fontSize:FontSize(12),
    color:NoteAppcolor.Error,
    marginVertical:Wp(20)
  }
});
