import * as ActionType from "./constant";
import api from "../../utils/apiUtil";
export const actFetchLichChieuData = (id) => {
  return (dispatch) => {
    dispatch(actLichChieuRequest());

    api
      .get(
        `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`
      )
      .then((result) => {
        dispatch(actLichChieuSuccess(result.data.content));
        console.log(result.data.content);
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
