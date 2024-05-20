import * as ActionType from "./constant";

const initState = {
  loadingRap: false,
  dataRap: null,
  errorRap: null,
};

const heThongRapReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.RAP_REQUEST: {
      state.loadingRap = true;
      state.dataRap = null;
      state.errorRap = null;
      return { ...state };
    }

    case ActionType.RAP_SUCCESS: {
      state.loadingRap = false;
      state.dataRap = action.payload;
      state.errorRap = null;
      return { ...state };
    }

    case ActionType.RAP_FAILED: {
      state.loadingRap = false;
      state.dataRap = null;
      state.errorRap = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default heThongRapReducer;
