import { Delete_Session_Note } from "@app/api/endpoints";
import { GetAccessToken, UrlMaker } from "@app/api/util";

const Delete_Session_Note_ApiFunc = async (NoteId) => {
  const url = UrlMaker(Delete_Session_Note);
  const Token = await GetAccessToken();
  const body = {
    note_id: NoteId,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
      body: JSON.stringify(body),
    });
    console.log(response);
    if (response.status == 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default Delete_Session_Note_ApiFunc;
