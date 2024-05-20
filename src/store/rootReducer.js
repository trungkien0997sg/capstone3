import { combineReducers } from "redux";
import listMovieReducer from "./listMovieReducer/listMovieReducer";
import bannerReducer from "./bannerReducer/bannerReducer";
import heThongRapReducer from "./heThongRapReducer/heThongRapReducer";
import movieDetailReducer from "./movieDetailReducer/movieDetailReducer";

const rootReducer = combineReducers({
  // key: value
  listMovieReducer,
  bannerReducer,
  heThongRapReducer,
  movieDetailReducer,
});

export default rootReducer;
