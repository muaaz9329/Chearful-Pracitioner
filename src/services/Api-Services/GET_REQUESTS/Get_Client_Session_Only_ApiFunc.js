import { Url_With_Prams , GetAccessToken } from "@app/api/util";
import { Get_User_Client_Session_Only } from "@app/api/endpoints";

const Get_Client_Session_Only_ApiFunc = async ( dispatch,
    onLoading,
    onSuccess,
    onError,
    ResetSession,  ClientId) => {
    dispatch(ResetSession());
    dispatch(onLoading(true));
    const url = Url_With_Prams(Get_User_Client_Session_Only, {client_id: ClientId});
    const token = await GetAccessToken();
    try {
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        const data = await response.json();
        console.log(data.data);
        if(response.status == 200){
           dispatch(onSuccess((data.data)));
        }
    } catch (error) {
        dispatch(onError(error));
        console.log(error);
        return false;
    }
}

export default Get_Client_Session_Only_ApiFunc;
