import { User_Session_Add_Notes_Editor_Pram_object } from "@app/adapters/User_Session_Add_Notes_Editor_Pram_object";
import { User_Session_notes_pram_object } from "@app/adapters/User_Session_notes_pram_object";
import { NavigationHelpers } from "@react-navigation/native";

interface IconProps {
  width: number;
  height: number;
  color?: string;
}

type IconComponent = React.FC<IconProps>;

interface RouteProps {
  params: any;
}

interface IEditorRouteProp extends RouteProps {
  params: {
    mode: string;
    ClientData: User_Session_notes_pram_object;
    TypeOfNote: "text" | "canvas" | "img" | "pdf" | "docx";
    ComingFor: "update" | "upload";
    content?: string;
    routeLoc:
      | "back"
      | "Prac_Session"
      | "Prac_ClientDetail"
      | "Prac_AddNoteSession";
    NoteId?: number;
  };
}

interface IEditorProps {
    navigation:NavigationHelpers<any, any>;
    route:IEditorRouteProp;
}

interface IDocsProps{

}


type FileUploadObjType = {
    fileName: string;
    fileType: string | null;
    base64: string;
    fileExtension: string;
  };

interface IDoodle {
  width: number;
  height: number;
  color: string;
}

type DoodleComponent = React.FC<IDoodle>;