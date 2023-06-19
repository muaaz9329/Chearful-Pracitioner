/**
 * @description Used for Passing the Prameter object through the navigation 
 * @data is the Object that consists of Session notes information and content
 */



interface appointmentType {
    date:string;
    time:string
}

interface IncomingObj {
    patient_id:number;
    id:number;
    client_image:string;
    appointment_date:string;
    appointment_time:string;

}

export class User_Session_notes_pram_object {
    Client_ID:number;
    Session_ID:number;
    Client_image:string;
    appointment: appointmentType;
    constructor(data:IncomingObj) {
      this.Client_ID = data.patient_id;
      this.Session_ID = data.id;
      this.Client_image = data.client_image;
      this.appointment = {
        date: data.appointment_date,
        time: data.appointment_time,
      };
    }
  }
  