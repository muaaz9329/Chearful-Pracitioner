import axios from "axios";
import { GetAccessToken, Url_With_Prams, UrlMaker } from "@app/api/util";
import { Get_Doctor_Sessions } from "@app/api/endpoints";
import { isValidDateFormat } from "@app/helper/customFunction";

const Get_User_Session_by_Date_ApiFunc = async (
  SetDataAction,
  ResetDataAction,
  dispatch,
  date
) => {
  var url;

  try {
    dispatch(ResetDataAction());
    if (date == null || date == undefined || date == "") {
      url = UrlMaker(Get_Doctor_Sessions);
    } else {
      if (!isValidDateFormat(date)) {
        throw new Error("Invalid Date Format");
      } else {
        url = Url_With_Prams(Get_Doctor_Sessions, { date_filter: date });
      }
    }
    const Token = await GetAccessToken();
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${Token}`,
        Accept: "application/json",
      },
    });
    dispatch(SetDataAction(response.data));
  } catch (error) {
    throw new Error("Failed to fetch user Sessions :" + error);
  }
};
export default Get_User_Session_by_Date_ApiFunc;
