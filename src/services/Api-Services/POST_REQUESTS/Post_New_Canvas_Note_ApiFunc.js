import { Post_User_Session_Canvas_Note } from "@app/api/endpoints";
import { GetAccessToken, UrlMaker } from "@app/api/util";
import axios from "axios";

const Post_New_Canvas_Note_ApiFunc = async (
  client_id,
  session_id,
  file,
  canvas
) => {
  const URL = UrlMaker(Post_User_Session_Canvas_Note);
  const Token = await GetAccessToken();
  try {
    const response = await axios.post(
      URL,
      {
        client_id: client_id,
        session_id: session_id,
        file: file ,
        canvas: JSON.stringify(canvas),
        canvas_type: "drawing",
      },
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    );
    if(response.status === 200){
        return true
    }
  } catch (error) {
    throw new Error("Failed to fetch user session notes :" + error);
  }
};
export default Post_New_Canvas_Note_ApiFunc;
