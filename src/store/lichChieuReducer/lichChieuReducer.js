import * as ActionType from "./constant";
const initState = {
  loadingLich: false,
  dataLich: null,
  errorLich: null,
};

const lichChieuReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.LICH_CHIEU_REQUEST: {
      state.loadingLich = true;
      state.dataLich = null;
      state.errorLich = null;
      return { ...state };
    }
    case ActionType.LICH_CHIEU_SUCCESS: {
      state.loadingLich = false;
      state.dataLich = action.payload;
      state.errorLich = null;
      return { ...state };
    }
    case ActionType.LICH_CHIEU_FAILED: {
      state.loadingLich = false;
      state.dataLich = null;
      state.errorLich = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
export default lichChieuReducer;
