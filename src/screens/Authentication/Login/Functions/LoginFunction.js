import { login } from "@app/features/authReducer/authReducer";

const LoginFunction = async (arg, dispatch) => {
  try {
    await dispatch(login(arg));
    
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default LoginFunction;
