import * as ActionType from "./constant";
import api from "../../utils/apiUtil";

export const actFetchDetail = (id) => {
  return (dispatch) => {
    dispatch(actDetailRequest());
    api
      .get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((result) => {
        dispatch(actDetailSuccess(result.data.content));
        console.log(result.data.content);
      })
      .catch((error) => {
        dispatch(actDetailFailed(error));
      });
  };
};

const actDetailRequest = () => {
  return {
    type: ActionType.Detail_REQUEST,
  };
};

const actDetailSuccess = (data) => {
  return {
    type: ActionType.Detail_SUCCESS,
    payload: data,
  };
};

const actDetailFailed = (error) => {
  return {
    type: ActionType.Detail_FAILED,
    payload: error,
  };
};
