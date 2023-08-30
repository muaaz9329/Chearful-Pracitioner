import Adapter from "../../../Clients/components/adapters/Adapter";
interface IncomingObj {
    patient_id:number;
    id:number;
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