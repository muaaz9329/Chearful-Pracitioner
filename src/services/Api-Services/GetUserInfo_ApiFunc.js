import { GetAccessToken, UrlMaker } from "@app/api/util";
import { Get_User_Info } from "@app/api/endpoints";
import axios from "axios";

const GetUserInfo_ApiFunc = async (action, dispatch) => {
  try {
    const url = UrlMaker(Get_User_Info);
    const Token = await GetAccessToken();
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${Token}`,
        Accept: "application/json",
      },
    });
    dispatch(action(response.data.data));
  } catch (error) {
    // Handle error
    throw new Error("Failed to fetch user profile :" + error);
  }
};
export default GetUserInfo_ApiFunc;
