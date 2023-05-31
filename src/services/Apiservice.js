import axios from "axios";
import { GetAccessToken, UrlMaker, Url_With_Prams } from "@app/api/util";
import {
  Get_Doctor_Sessions,
  Get_User_Info,
  Reset_Password,
} from "@app/api/endpoints";
import { isValidDateFormat, isValidEmail } from "@app/helper/customFunction";

/**
 * Api services for the app
 * Created by Muaaz Bin Sarfraz 30th may 2023
 * @author Muaaz Bin Sarfraz
 * @description Api services for the app , all the Api calls will be here except auth that is being handled by redux toolkit thunks functions
 * @private Token is being fetched from async storage and then passed to the api call , Token is itself being fetched from function GetAccessToken in util.js
 */

export const ApiServices = {
  /**
   * @description Api call to get user info for home Screen , will update the redux store (HomeReducers) with the user info
   * @param {function} action - redux toolkit action to dispatch the data to the reducer , in our case it is SetUserData from HomeReducer.js
   * @param {function} dispatch - redux toolkit dispatch function to dispatch the data to the reducer , as hook useDispatch is not available in services and we are not using class based components so we have to pass dispatch function from the component to the service
   *
   */
  GetUserInfo: async (action, dispatch) => {
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
  },

  /**
   * @description Used for Reseting the Password , User gives his email to get Reset password link
   * @param {*} actionSuccess Action That that updates the state When Request is Succesful 
   * @param {*} actionFail Action That that updates the state When Request is Failed
   * @param {*} actionLoading Action That that updates the state When Request is Loading
   * @param {*} dispatch useDispatch hook
   * @param {*} email (string)
   */

  UserResetPass: async (
    actionSuccess,
    actionFail,
    actionLoading,
    dispatch,
    email
  ) => {
    try {
      dispatch(actionLoading());
      if (isValidEmail(email)) {
        const url = UrlMaker(Reset_Password);
        const response = await fetch(url, {
          method: "POST",
          

          body: {
            email: email,
          },
        });
        console.log(response.data);
        dispatch(actionSuccess());
      } else {
        dispatch(actionFail("Please enter correct email address"));
      }
    } catch (error) {
      // console.log(error);
      // dispatch(actionFail(error));
    }
  },

  /**
   * @description Api call to get user sessions with his cutomers , will update the redux store (SessionReducers) with the user sessions
   * @param {*} action - redux toolkit action to dispatch the data to the reducer , in our case it is SetSessionData from SessionReducers.js
   * @param {*} dispatch -  redux toolkit dispatch function to dispatch the data to the reducer , as hook useDispatch is not available in services and we are not using class based components so we have to pass dispatch function from the component to the service
   * @param {*} date - Date in string in format "YYYY-MM-DD" , if date is not provided in this format it will throw an error of invalid date format
   */

  Get_User_Session_by_Date: async (action, dispatch, date) => {
    if (!isValidDateFormat(date)) {
      throw new Error("Invalid Date Format");
    } else {
      try {
        const url = Url_With_Prams(Get_Doctor_Sessions, { date_filter: date });
        const Token = await GetAccessToken();
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${Token}`,
            Accept: "application/json",
          },
        });
        console.log(response.data);
        dispatch(action(response.data));
      } catch (error) {
        throw new Error("Failed to fetch user Sessions :" + error);
      }
    }
  },
};
