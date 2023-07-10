import axios from "axios";
import { Get_User_All_Client } from "@app/api/endpoints";
import { GetAccessToken, UrlMaker } from "@app/api/util";

const Get_User_All_Client_Api = async (
  dispatch,
  OnLoadingAction,
  onSuccessAction,
  onError
) => {
  const url = UrlMaker(Get_User_All_Client);
  const Token = await GetAccessToken();
  try {
    dispatch(OnLoadingAction());
    const Response = await fetch(url,{
        method: 'GET',
        headers: {
            Authorization: `Bearer ${Token}`,
        }
    })
    const data = await Response.json();
    dispatch(onSuccessAction(data.data));

  } catch (error) {
    dispatch(onError(error));
    throw new Error("Failed to fetch user Clients :" + error);
  }
};

export default Get_User_All_Client_Api;

