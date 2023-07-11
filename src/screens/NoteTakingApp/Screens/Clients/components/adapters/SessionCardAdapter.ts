import Adapter from "./Adapter";

interface IncomingObj {
    "id": number,
    "patient_id": number,
}

class SessionCardAdapter extends Adapter{
   constructor(data:IncomingObj) {
         super();
         this.Client_ID = data.patient_id;
         this.Session_ID = data.id;
   }
  }

export function SessionCardAdapterFunction(data:IncomingObj):SessionCardAdapter {
    return new SessionCardAdapter(data);
  }