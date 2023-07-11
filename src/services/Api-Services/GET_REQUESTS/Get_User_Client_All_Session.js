import { UrlMaker, Url_With_Prams, GetAccessToken } from "@app/api/util";
import { Get_User_Client_All_Session } from "@app/api/endpoints";
const Get_User_Client_All_Session_func = async (
  dispatch,
  onLoading,
  onSuccess,
  onError,
  ResetSession,
  Client_ID
) => {
  dispatch(ResetSession());
  dispatch(onLoading(true));
  const url = Url_With_Prams(Get_User_Client_All_Session, {
    client_id: Client_ID,
  });
  const Token = await GetAccessToken();
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    const data = await response.json();

    
      dispatch(onSuccess(data.data));
    
  } catch (error) {
    console.log(error);
    dispatch(onError(error));
  }
};

export default Get_User_Client_All_Session_func
