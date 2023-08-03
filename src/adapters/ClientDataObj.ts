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
    client_image?:string;
    appointment_date:string;
    appointment_time:string;
    client_full_name:string;
    avatar?:string;

}

export class ClientDataObj {
    Client_ID:number;
    Session_ID:number;
    Client_image:string | undefined;
    Client_fullName:string;
    appointment: appointmentType;
    constructor(data:IncomingObj) {
      this.Client_ID = data.patient_id;
      this.Session_ID = data.id;
      data.client_image === undefined  ? this.Client_image = data.avatar : this.Client_image = data.client_image;
      this.Client_fullName = data.client_full_name
      this.appointment = {
        date: data.appointment_date,
        time: data.appointment_time,
      };
    }
  }
  