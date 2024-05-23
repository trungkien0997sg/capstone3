import * as ActionType from "./constants";

const currentUser = localStorage.getItem("user");

const initialState = {
  loading: false,
  data: currentUser ? JSON.parse(currentUser) : null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.USER_LOGIN_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case ActionType.USER_LOGIN_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
