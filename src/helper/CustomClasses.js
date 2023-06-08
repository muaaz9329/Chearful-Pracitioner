export class User_Session_notes_pram_object{
    Client_ID;
    Session_ID;
    Client_image;
    appointment;
    constructor(data){
        this.Client_ID = data.patient_id;
        this.Session_ID = data.id;
        this.Client_image = data.client_image;
        this.appointment = {
            date:data.appointment_date,
            time:data.appointment_time
        }
    }
    
}


export class User_Session_Notes_Editor_Pram_object {
    mode;
    content;
    data;
    constructor(mode,content,ClientData){
        this.mode = mode;
        this.content = content;
        this.ClientData = ClientData;
    }

}
