import { Update_Session_Note_Text } from "@app/api/endpoints";
import { GetAccessToken, UrlMaker } from "@app/api/util";
import axios from "axios";

const Update_Note_Content_ApiFunc = async (
    Client_id,
    Session_id,
    Note_id,
    title,
    content,
)=>{
    const Token = await GetAccessToken();
    const url = UrlMaker(Update_Session_Note_Text);
    try{
        const response = await axios.post(url,{
            client_id:Client_id,
            session_id:Session_id,
            note_id:Note_id,
            title:title,
            editor_content:content
        },{
            headers:{
                Authorization: `Bearer ${Token}`,
            }
        })
        if( response.status === 200){
            return true
        }
        else{
            return false
        }

    }
    catch(error){
        throw new Error("Failed to update note content :" + error);
    }
}

export default Update_Note_Content_ApiFunc;