import * as ActionType from "./constant";
import api from "../../utils/apiUtil";
export const actFetchLichChieuData = (id) => {
  return (dispatch) => {
    dispatch(actLichChieuRequest());

    api
      .get(
        `QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01&maHeThongRap=${id}`
      )
      .then((result) => {
        dispatch(actLichChieuSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actLichChieuFailed(error));
      });
  };
};

const actLichChieuRequest = () => {
  return {
    type: ActionType.LICH_CHIEU_REQUEST,
  };
};

const actLichChieuSuccess = (data) => {
  return {
    type: ActionType.LICH_CHIEU_SUCCESS,
    payload: data,
  };
};

const actLichChieuFailed = (error) => {
  return {
    type: ActionType.LICH_CHIEU_FAILED,
    payload: error,
  };
};
