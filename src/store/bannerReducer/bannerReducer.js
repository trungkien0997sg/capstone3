import * as ActionType from "./actions";

const initState = {
  loadingBanner: false,
  dataBanner: null,
  errorBanner: null,
};

const bannerReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.BANNER_REQUEST: {
      state.loadingBanner = true;
      state.dataBanner = null;
      state.errorBanner = null;
      return { ...state };
    }

    case ActionType.BANNER_SUCCESS: {
      state.loadingBanner = false;
      state.dataBanner = action.payload;
      state.errorBanner = null;
      return { ...state };
    }
    case ActionType.BANNER_FAILED: {
      state.loadingBanner = false;
      state.dataBanner = null;
      state.errorBanner = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default bannerReducer;
