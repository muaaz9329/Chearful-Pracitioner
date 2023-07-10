export const BASE_URL = "https://dev.chearful.com/api/v2"

// GET REQUESTS
export const Get_User_Info = "/get-user"
export const Get_Doctor_Sessions = "/practitioner/sessions/all"
export const Get_User_Session_Notes = "/practitioner/load-session-notes"
export const Get_User_All_Client ="/practitioner/get-clients"
export const Get_User_Client_All_Session = '/practitioner/get-client-all-sessions'
export const Get_User_Session_Info = "/practitioner/load-session-info"


// POST REQUESTS
export const Auth = "/user/login"
export const Post_User_Session_Note_Text = "/practitioner/store-notes"
export const Reset_Password = "/user/password-reset"
export const Delete_Session_Note = "/practitioner/delete-note"
export const Update_Session_Note_Text = "/practitioner/note/update"
export const Update_Session_Canvas_content = "/practitioner/update-uploaded-notes-for-mobile"
export const Post_User_Session_Canvas_Note = "/practitioner/upload-notes-for-mobile"



