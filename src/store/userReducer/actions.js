import api from "../../utils/apiUtil";
import * as ActionType from "./constants";

export const acFetchUserLogin = (user) => {
  return (dispatch) => {
    dispatch(acUserLoginRequest());
    // call api
    api
      .post("/QuanLyNguoiDung/DangNhap", user)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.content));
        dispatch(acUserLoginSuccess(response.data.content));
      })
      .catch((error) => dispatch(acUserLoginFailed(error)));
  };
};

const acUserLoginRequest = () => {
  return {
    type: ActionType.USER_LOGIN_REQUEST,
  };
};
const acUserLoginSuccess = (data) => {
  return {
    type: ActionType.USER_LOGIN_SUCCESS,
    payload: data,
  };
};
const acUserLoginFailed = (error) => {
  return {
    type: ActionType.USER_LOGIN_FAILED,
    payload: error,
  };
};
