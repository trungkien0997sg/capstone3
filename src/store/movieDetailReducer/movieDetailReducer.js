import * as ActionType from "./constant";

const initState = {
  loadingDetail: false,
  dataDetail: null,
  errorDetail: null,
};

const movieDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.Detail_REQUEST: {
      state.loadingDetail = true;
      state.dataDetail = null;
      state.errorDetail = null;
      return { ...state };
    }

    case ActionType.Detail_SUCCESS: {
      state.loadingDetail = false;
      state.dataDetail = action.payload;
      state.errorDetail = null;
      return { ...state };
    }

    case ActionType.Detail_FAILED: {
      state.loadingDetail = false;
      state.dataDetail = null;
      state.errorDetail = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default movieDetailReducer;
