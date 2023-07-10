import { User_Session_notes_pram_object } from "./User_Session_notes_pram_object";

export class User_Session_Add_Notes_Editor_Pram_object{
    mode:string;
    ClientData:User_Session_notes_pram_object;
    TypeOfNote:"text"|"canvas";
    ComingFor:'update'|'upload';
    content:string;
    AfterCompletePath:"back"|"PreviewNotes"
    constructor(MODE:string , Data:User_Session_notes_pram_object ,TypeOfNote:"text"|"canvas",Action:'update'|'upload' , AfterCompletePath:"back"|"PreviewNotes" ){
        this.mode = MODE;
        this.ClientData = Data;
        this.TypeOfNote = TypeOfNote;
        this.ComingFor = Action;
        this.content='';
        this.AfterCompletePath = AfterCompletePath

    }
}