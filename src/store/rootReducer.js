import { combineReducers } from "redux";
import listMovieReducer from "./listMovieReducer/listMovieReducer";
import bannerReducer from "./bannerReducer/bannerReducer";
import heThongRapReducer from "./heThongRapReducer/heThongRapReducer";
import movieDetailReducer from "./movieDetailReducer/movieDetailReducer";
import lichChieuReducer from "./lichChieuReducer/lichChieuReducer";
import userReducer from "./userReducer/userReducer";

const rootReducer = combineReducers({
  // key: value
  listMovieReducer,
  bannerReducer,
  heThongRapReducer,
  movieDetailReducer,
  lichChieuReducer,
  userReducer,
});

export default rootReducer;
