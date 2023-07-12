import{
GetUserInfo_ApiFunc,
UserResetPass_ApiFunc,
Get_User_Session_by_Date_ApiFunc,
Get_User_Session_Notes_ApiFunc,
Post_New_Text_Note_ApiFunc,
Delete_Session_Note_ApiFunc,
Update_Note_Content_ApiFunc,
Update_Canvas_Content_ApiFunc,
Post_New_Canvas_Note_ApiFunc,
Get_User_All_Client_ApiFunc,
Get_User_Client_All_Session_ApiFunc,
Get_User_Session_Info_ApiFunc,
Post_New_Session_File_Notes_ApiFunc
} from './Api-Services/Index'


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
   * @param {*} client_id - client id of the user
   * @param {*} session_id - session id of the session
   * @param {*} dispatch -  redux toolkit dispatch function to dispatch the data to the reducer , as hook useDispatch is not available in services and we are not using class based components so we have to pass dispatch function from the component to the service
   * @param {*} ResetAction - Action to reset the state of the reducer
   * @param {*} OnSuccessAction - Action to update the state of the reducer when request is successful
   * 
   */

  Get_User_Session_Notes : Get_User_Session_Notes_ApiFunc,


  /**
   * @description Api to post new text note to a session
   * @param {*} client_id - client id of the user
   * @param {*} session_id - session id of the session
   * @param title - title of the note
   * @param Content - note Content
   */
  Post_New_Text_Note : Post_New_Text_Note_ApiFunc,

  /**
   * @description Api to delete a session note
   * @param {*} note_Id - Note Id of the note to be deleted
   */
  Delete_Session_Note : Delete_Session_Note_ApiFunc,

  /**
   * @description Api function to Update Session Note
   * @param {*} Client_id - client id of the user
   * @param {*} Session_id - session id of the session
   * @param {*} Note_Id - Id of Note 
   * @param title - title of the note
   * @param content - note Content needed to be Updated
   * 
   */
  Update_Note_Content_Text : Update_Note_Content_ApiFunc,

  /**
   * @description Api function to Update  Canvas Session Note
   * @param {*} Client_id - client id of the user
   * @param {*} Session_id - session id of the session
   * @param {*} Note_Id - Id of Note
   * @param {*} Content - note Content needed to be Updated , mainly array of points
   * @param {*} Base64Img -  Base64 Image of the Canvas
   * 
   */
  Update_Canvas_Content : Update_Canvas_Content_ApiFunc,
  /**
   * @description Api function to Post  Canvas Session Note
   * @param {*} Client_id - client id of the user
   * @param {*} Session_id - session id of the session
   * @param {*} file - Base64 Image of the Canvas
   * @param {*} Content - note Content needed to be Uploaded , mainly array of points
   * 
   */
  Post_Canvas_Content : Post_New_Canvas_Note_ApiFunc,


  /**
   * @description Api function to get all the clients of a user
   * @param {*} dispatch - redux toolkit dispatch function to dispatch the data to the reducer , as hook useDispatch is not available in services and we are not using class based components so we have to pass dispatch function from the component to the service
   * @param {*} OnLoadingAction - Action to update the state of the reducer when request is loading
   * @param {*} OnSuccessAction - Action to update the state of the reducer when request is successful
   * @param {*} onError - Action to update the state of the reducer when request is failed
   */
  Get_User_All_Client : Get_User_All_Client_ApiFunc,

  /**
   * @description Api function to get all the sessions of a client
   * @param {*} dispatch - redux toolkit dispatch function to dispatch the data to the reducer , as hook useDispatch is not available in services and we are not using class based components so we have to pass dispatch function from the component to the service
   * @param {*} OnLoadingAction - Action to update the state of the reducer when request is loading
   * @param {*} OnSuccessAction - Action to update the state of the reducer when request is successful
   * @param {*} onError - Action to update the state of the reducer when request is failed
   * @param {*} Client_Id - Client Id of the client
   */
  Get_User_Client_All_Session : Get_User_Client_All_Session_ApiFunc,
  /**
   * @description Api function to get session info of a session
   * @param {*} Client_Id - Client Id of the client
   * @param {*} Session_Id - Session Id of the session
   * @returns {Object} - Session Info
   * 
   */

  Get_User_Session_Info : Get_User_Session_Info_ApiFunc,
  /**
   * @description Api function to Post new Session note of Type file (image , odf , docx)
   * @param {*} Client_Id - Client Id of the client
   * @param {*} Session_Id - Session Id of the session
   * @param {*} Base64File - Base64 File of the file
   * @param {*} fileType - Type of the file like image , pdf , docx
   * @param {*} fileName - Name of the file
   * 
   */
  Post_New_File_Note : Post_New_Session_File_Notes_ApiFunc,
};
