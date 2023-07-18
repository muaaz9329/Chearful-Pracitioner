import { TablerIcon } from "tabler-icons-react-native";

export interface ToastType{
    textMain: string;
    hideFunc:()=>void;
    icon:IconProps;
    SubText?:string;

}


export interface ToastComponentProps {
    LeftIcon: TablerIcon;
    Title: string ;
    SubText?: string;
    ContainerBg: string;
    TitleColor: string;
    SubTextColor?: string;
    Hidefunc: () => void;
  }