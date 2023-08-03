
const Prod_Base_URL="https://chearful.com/api/v2"
const Dev_Base_URL="https://dev.chearful.com/api/v2"

export const BASE_URL =Prod_Base_URL


// GET REQUESTS
export const Get_User_Info = "/get-user" // this is the route to get the user info
export const Get_Doctor_Sessions = "/practitioner/sessions/all" // this is the route to get all the sessions of a practitioner
export const Get_User_Session_Notes = "/practitioner/load-session-notes" // this is the route to get all the notes of the Required Client & session
export const Get_User_All_Client ="/practitioner/get-clients" // this is the route to get all the clients of a practitioner
export const Get_User_Client_All_Session = '/practitioner/get-client-all-sessions' // this is the route to get all the sessions & Notes of a client
export const Get_User_Session_Info = "/practitioner/load-session-info" // this is the route to get required Session Info
export const Get_User_Client_Session_Only = '/practitioner/get-client-all-sessions-only' // this is the route to get all the sessions (only) of a client
export const Get_User_All_Notes = '/practitioner/load-client-notes'


// POST REQUESTS
export const Auth = "/user/login"
export const Post_User_Session_Note_Text = "/practitioner/store-notes"
export const Reset_Password = "/user/password-reset"
export const Delete_Session_Note = "/practitioner/delete-note"
export const Update_Session_Note_Text = "/practitioner/note/update"
export const Update_Session_Canvas_content = "/practitioner/update-uploaded-notes-for-mobile"
export const Post_User_Session_Canvas_Note = "/practitioner/upload-notes-for-mobile"
export const Post_User_Session_File_Note = "/practitioner/upload-notes-file"



