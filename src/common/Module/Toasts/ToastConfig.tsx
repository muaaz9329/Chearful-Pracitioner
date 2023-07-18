import { View , Text , Pressable } from 'react-native';
import Toast, {ToastConfig, ToastProps} from 'react-native-toast-message'
import { ToastType } from './types/types';
import ToastComponent from './Components/ToastComponent';
import { NoteAppcolor } from '@app/constants/NoteAppcolor';
import { IconAlertCircle, IconAlertTriangle, IconCircleCheck } from 'tabler-icons-react-native';
const HideToast = ()=>{
  Toast.hide();
}



const Config : ToastConfig  = {
    SuccessToast: ({ text1 }) => (
        <ToastComponent 
        Title={text1}
        TitleColor={NoteAppcolor.Primary}
        ContainerBg={'#BDD79D'}
        Hidefunc={HideToast}
        LeftIcon={IconCircleCheck}
        />
      ),
      ErrorToast: ({ text1 , text2 }) => (
        <ToastComponent
        Title={text1}
        TitleColor={'white'}
        ContainerBg={'tomato'}
        SubText={text2}
        SubTextColor={'white'}
        Hidefunc={HideToast}
        LeftIcon={IconAlertCircle}
        
        />
      ),
      WarningToast:( { text1 , text2 }) => (
        <ToastComponent
        Title={text1}
        TitleColor={'white'}
        ContainerBg={'#F4A417'}
        SubText={text2}
        SubTextColor={'white'}
        Hidefunc={HideToast}
        LeftIcon={IconAlertTriangle}
        
        />
      )
}

export default Config;

