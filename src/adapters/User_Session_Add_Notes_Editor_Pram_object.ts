import { User_Session_notes_pram_object } from "./User_Session_notes_pram_object";

export class User_Session_Add_Notes_Editor_Pram_object{
    mode:string;
    ClientData:User_Session_notes_pram_object;
    TypeOfNote:"text"|"canvas"|"img"|"pdf"|'docx';
    ComingFor:'update'|'upload';
    content:string;
    routeLoc:"back"|"Prac_Session" | "Prac_ClientDetail" |"Prac_AddNoteSession"
    constructor(MODE:string , Data:User_Session_notes_pram_object ,TypeOfNote:"text"|"canvas"|"img"|"pdf"|'docx',Action:'update'|'upload' , routeLoc:"back"|"Prac_Session" | "Prac_ClientDetail" |"Prac_AddNoteSession" ){
        this.mode = MODE;
        this.ClientData = Data;
        this.TypeOfNote = TypeOfNote;
        this.ComingFor = Action;
        this.content='';
        this.routeLoc = routeLoc;

    }
}