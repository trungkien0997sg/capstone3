import api from "../../utils/apiUtil";

export const BANNER_REQUEST = "@bannerReducer/BANNER_REQUEST";
export const BANNER_SUCCESS = "@bannerReducer/BANNER_SUCCESS";
export const BANNER_FAILED = "@bannerReducer/BANNER_FAILED";

export const actFetchBanner = () => {
  return (dispatch) => {
    dispatch(actBannerRequest());
    api
      .get("QuanLyPhim/LayDanhSachBanner")
      .then((res) => {
        dispatch(actBannerSuccess(res.data.content));
      })
      .catch((err) => {
        dispatch(actBannerError(err));
      });
  };
};

export const actBannerRequest = () => {
  return {
    type: BANNER_REQUEST,
  };
};
export const actBannerSuccess = (data) => {
  return {
    type: BANNER_SUCCESS,
    payload: data,
  };
};
export const actBannerError = (data) => {
  return {
    type: BANNER_FAILED,
    payload: data,
  };
};
