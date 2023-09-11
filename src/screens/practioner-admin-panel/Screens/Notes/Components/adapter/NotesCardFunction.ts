import Adapter from "../../../Clients/components/adapters/Adapter";

interface IncomingObj {
    client_id:number;
    session_id:number;
}

class NotesCardAdapter extends Adapter{
    constructor(data:IncomingObj) {
            super();
            this.Client_ID = data.client_id;
            this.Session_ID = data.session_id;
    }
      
}

export function NotesCardAdapterFunction(data:IncomingObj):NotesCardAdapter {
    return new NotesCardAdapter(data);
}