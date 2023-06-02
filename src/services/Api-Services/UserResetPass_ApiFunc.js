import { UrlMaker } from "@app/api/util";
import { Reset_Password } from "@app/api/endpoints";
import { isValidEmail } from "@app/helper/customFunction";

const UserResetPass_ApiFunc = async (
  actionSuccess,
  actionFail,
  actionLoading,
  dispatch,
  email
) => {
  try {
    dispatch(actionLoading());
    if (isValidEmail(email)) {
      const url = UrlMaker(Reset_Password);
      const response = await fetch(url, {
        method: "POST",

        body: {
          email: email,
        },
      });
      console.log(response.data);
      dispatch(actionSuccess());
    } else {
      dispatch(actionFail("Please enter correct email address"));
    }
  } catch (error) {
    // console.log(error);
    // dispatch(actionFail(error));
  }
};
export default UserResetPass_ApiFunc;
