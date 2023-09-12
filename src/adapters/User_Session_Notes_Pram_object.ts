/**
 * @description Used for Passing the Prameter object through the navigation
 * @data is the Object that consists of Session notes information and content
 */

interface IncomingObj {
  patient_id: number;
  id: number;
  client_image?: string;
  appointment_date: string;
  appointment_time: string;
  client_full_name: string;
  avatar?: string;
}

export class UserSessionNotesParamObj {
  Client_ID: number;
  Session_ID: number;

  constructor(data: IncomingObj) {
    this.Client_ID = data.patient_id;
    this.Session_ID = data.id;

    // this.Client_ID = 1;
    // this.Session_ID = 1;
  }
}
