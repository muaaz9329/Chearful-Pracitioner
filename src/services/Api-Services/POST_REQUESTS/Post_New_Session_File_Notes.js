import { UrlMaker, GetAccessToken } from "@app/api/util";
import axios from "axios";
import { Post_User_Session_File_Note } from "@app/api/endpoints";
export const Post_New_Session_File_Note = async (
  Client_Id,
  Session_Id,
  Base64File,
  fileType,
  fileName
) => {
  const url = UrlMaker(Post_User_Session_File_Note);

  const token = await GetAccessToken();

  try {
    const response = await axios.post(
      url,
      {
        client_id: Client_Id,
        session_id: Session_Id,
        file: Base64File,
        file_type: fileType,
        file_name: fileName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.status);
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
export default Post_New_Session_File_Note;
