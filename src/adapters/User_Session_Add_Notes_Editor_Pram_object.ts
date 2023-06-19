import { User_Session_notes_pram_object } from "./User_Session_notes_pram_object";

export class User_Session_Add_Notes_Editor_Pram_object{
    mode:string;
    ClientData:User_Session_notes_pram_object;
    TypeOfNote:"text"|"canvas";
    ComingFor:'update'|'upload';
    content:string;
    constructor(MODE:string , Data:any ,TypeOfNote:"text"|"canvas",Action:'update'|'upload' ){
        this.mode = MODE;
        this.ClientData = new User_Session_notes_pram_object(Data);
        this.TypeOfNote = TypeOfNote;
        this.ComingFor = Action;
        this.content=''

    }
}