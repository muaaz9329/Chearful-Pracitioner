import { GetAccessToken, UrlMaker } from "@app/api/util";
import { Post_User_Session_Note_Text } from "@app/api/endpoints";
import axios from "axios";

const Post_New_Text_Note_ApiFunc = async (
  ClientId,
  SessionId,
  Title,
  Content
) => {
  try {
    const URL = UrlMaker(Post_User_Session_Note_Text);
    const Token = await GetAccessToken();
    console.log(URL)
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: ClientId,
        session_id: SessionId,
        title: Title,
        editor_content: Content,
      }),
    });
    console.log(response.status);
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
export default Post_New_Text_Note_ApiFunc;
