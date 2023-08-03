import { UrlMaker, GetAccessToken } from "@app/api/util";
import { Get_User_All_Notes } from "@app/api/endpoints";

const Get_User_All_Notes_ApiFunc = async (
  dispatch,
  OnSuccess,
  OnLoading,
  OnError,
  OnReset
) => {

    const url = UrlMaker(Get_User_All_Notes);
    const token = await GetAccessToken();
    try {
        dispatch(OnReset());
        dispatch(OnLoading());
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        });
        if (response.status == 200) {
            const data = await response.json();
            dispatch(OnSuccess(data.data.session_notes));
        } 
    }
    catch (error) {
        dispatch(OnError());

    }

};
export default Get_User_All_Notes_ApiFunc;
