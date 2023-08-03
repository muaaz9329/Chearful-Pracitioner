import axios from "axios";
import { GetAccessToken, Url_With_Prams } from "@app/api/util";
import { Get_User_Session_Notes } from "@app/api/endpoints";

const Get_User_Session_Notes_ApiFunc = async (
  client_id,
  session_id,
  dispatch,
  ResetAction,
  OnSuccessAction
) => {
  try {
    dispatch(ResetAction());
    // const URL = Url_With_Prams(Get_User_Session_Notes, {
    //   client_id: client_id,
    //   session_id: session_id,
    // });

    const URL = `https://chearful.com/api/v2/practitioner/load-session-notes?client_id=${client_id}&session_id=${session_id}`
    const Token = await GetAccessToken();
    console.log(Token);
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${Token}`,
        Accept: "application/json",
      },
    });
    if (response.data.status_code == 200) {
      dispatch(OnSuccessAction(response.data.data))
    }
  } catch (error) {
    throw new Error("Failed to fetch user session notes :" + error);
  }
};

export default Get_User_Session_Notes_ApiFunc;
