import{
GetUserInfo_ApiFunc,
UserResetPass_ApiFunc,
Get_User_Session_by_Date_ApiFunc
} from './Api-Services/Index'
import Get_User_Session_Notes_ApiFunc from './Api-Services/Get_User_Session_Notes';

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
  GetUserInfo: GetUserInfo_ApiFunc,

  /**
   * @description Used for Reseting the Password , User gives his email to get Reset password link
   * @param {*} actionSuccess Action That that updates the state When Request is Succesful 
   * @param {*} actionFail Action That that updates the state When Request is Failed
   * @param {*} actionLoading Action That that updates the state When Request is Loading
   * @param {*} dispatch useDispatch hook
   * @param {*} email (string)
   */

  UserResetPass: UserResetPass_ApiFunc,

  /**
   * @description Api call to get user sessions with his cutomers , will update the redux store (SessionReducers) with the user sessions
   * @param {*} action - redux toolkit action to dispatch the data to the reducer , in our case it is SetSessionData from SessionReducers.js
   * @param {*} dispatch -  redux toolkit dispatch function to dispatch the data to the reducer , as hook useDispatch is not available in services and we are not using class based components so we have to pass dispatch function from the component to the service
   * @param {*} date - Date in string in format "YYYY-MM-DD" , if date is not provided in this format it will throw an error of invalid date format
   * 
   */

  Get_User_Session_by_Date: Get_User_Session_by_Date_ApiFunc,



  /**
   * @description Api to get Session Notes of a particular session 
   */

  Get_User_Session_Notes : Get_User_Session_Notes_ApiFunc
};
