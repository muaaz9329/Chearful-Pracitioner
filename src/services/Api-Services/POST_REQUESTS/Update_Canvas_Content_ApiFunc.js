import { Update_Session_Canvas_content } from "@app/api/endpoints";
import { UrlMaker, GetAccessToken } from "@app/api/util";
import axios from "axios";

const Update_Canvas_Content_ApiFunc = async (
  client_id,
  session_id,
  canvas_point,
  note_id,
  Base64Img
) => {
  const url = UrlMaker(Update_Session_Canvas_content);
  console.log(url);
  const Token = await GetAccessToken();

  try {
    const response = await axios.post(
      url,
      {
        client_id: client_id,
        session_id: session_id,
        canvas: canvas_point,
        note_id: note_id,
        file: Base64Img,
        canvas_type: "drawing",
      },
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    );

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error("Failed to update canvas content :" + error);
  }
};
export default Update_Canvas_Content_ApiFunc;
