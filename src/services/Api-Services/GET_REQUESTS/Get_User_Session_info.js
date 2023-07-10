import { GetAccessToken, Url_With_Prams } from "@app/api/util";
import { Get_User_Session_Info as Endpoint } from "@app/api/endpoints";

 const Get_User_Session_Info = async (
  SessionId,
  ClientId,
) => {
    
    const url = Url_With_Prams(Endpoint,{client_id:ClientId,session_id:SessionId});
    const token = await GetAccessToken();
    const response = fetch(url , {
        method: "GET",
        headers: {
          Authorization : `Bearer ${token}`,
        }
    })
   
    return (await response).json();
};
export default Get_User_Session_Info;