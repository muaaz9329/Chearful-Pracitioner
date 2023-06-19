export class User_Session_Add_Note_object{
    NoteType:string;
    ClientId:number;
    SessionId:number;
    constructor(Data:any , Type:string){
        this.NoteType = Type;
        this.ClientId = Data.patient_id;
        this.SessionId = Data.id;
    }
}