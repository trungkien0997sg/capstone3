import * as ActionType from "./constant";
import api from "../../utils/apiUtil";

export const actFetchRap = () => {
  return (dispatch) => {
    dispatch(actRapRequest());
    api
      .get("/QuanLyRap/LayThongTinHeThongRap")
      .then((result) => {
        dispatch(actRapSuccess(result.data.content));
        console.log(result.data.content);
      })
      .catch((error) => {
        dispatch(actRapFailed(error));
      });
  };
};

const actRapRequest = () => {
  return {
    type: ActionType.RAP_REQUEST,
  };
};

const actRapSuccess = (data) => {
  return {
    type: ActionType.RAP_SUCCESS,
    payload: data,
  };
};

const actRapFailed = (error) => {
  return {
    type: ActionType.RAP_FAILED,
    payload: error,
  };
};
