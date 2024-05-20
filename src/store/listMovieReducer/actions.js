import * as ActionType from "./constant";
import api from "../../utils/apiUtil";
export const actFetchListData = () => {
  return (dispatch) => {
    dispatch(actListMoveRequest());

    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((result) => {
        dispatch(actListMoveSuccess(result.data.content));
      })
      .catch((error) => {
        dispatch(actListMoveFailed(error));
      });
  };
};

const actListMoveRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMoveSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMoveFailed = (error) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: error,
  };
};
